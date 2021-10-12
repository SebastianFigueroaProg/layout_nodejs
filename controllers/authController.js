const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conexion = require('../database/db');
const {promisify} = require('util');


exports.register =  async (req, res)=>{

    try {
        const user = req.body.user;
        const name = req.body.name;
        const pass = req.body.pass;
    
        let passHash = await bcryptjs.hash(pass, 8)
    
        conexion.query('INSERT INTO user SET ?',{user:user, name:name, pass:passHash},(error,result)=>{
            if (error) {console.log(error)}
            res.redirect('/')
        })
        
    } catch (error) {
        console.log(error)        
    }
}

exports.login = async (req,res)=>{

    try {
        const user = req.body.usuario;
        const pass = req.body.password;
        
        if (!user || !pass) {
            res.render('login',{
                alert: true,
                alertTitle:'Advertencia',
                alertMessage: 'Ingrese un usuario y password',
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
            
        }else{
            conexion.query('SELECT * FROM user WHERE user = ?', [user], async (error, results)=>{
                if (results.length == 0 || ! await(bcryptjs.compare(pass, results[0].pass) )) {
                    res.render('login',{
                    alert: true,
                    alertTitle:'Advertencia',
                    alertMessage: 'Ingrese un usuario y password',
                    alertIcon: 'info',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                    })
                    
                }else{
                    const id = results[0].id
                    const token = jwt.sign({id:id},process.env.JWT_SECRETO)
                    // console.log("token :"+token+"para el usuario:"+user)

                    const cookieOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES *24 *60* 60*1000),
                        httpOnly: true
                    }

                    res.cookie('jwt',token,cookieOptions)
                    res.render('login',{
                        alert: true,
                        alertTitle:'Conexion exitosa',
                        alertMessage: '¡Login Correcto!',
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: ''
                    })
                }
            })
        }



    } catch (error) {
        console.log(error)        
    }

}


exports.isAuthenticated = async (req, res, next)=>{
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            conexion.query('SELECT * FROM user WHERE id = ?', [decodificada.id], (error, results)=>{
                if (!results) {return next()}
                req.user = results[0]
                return next()
            })
        } catch (error) {
            console.log(error)
            return next()
        }
        
    }else{
        res.redirect('/login')        
    }
}


exports.logout = (req,res)=>{
    res.clearCookie('jwt')
    return res.redirect('/login')
}