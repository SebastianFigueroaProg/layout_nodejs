const express = require('express');
const router = express();
const conexion = require('./database/db');
const crud = require('.//controllers/crud');
const authControllers = require('./controllers/authController');

//index
router.get('/',authControllers.isAuthenticated,(req,res)=>{

    conexion.query('SELECT * from agentes_call', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('index',{result:result,user:req.user});
        }

    })    
})
//Data Call B
router.get('/data/callb',(req,res)=>{

    conexion.query('SELECT * from agentes_call', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Call A
router.get('/data/calla',(req,res)=>{

    conexion.query('SELECT * from agentes_calla', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})


//Usuarios Registrados
router.get('/user',(req,res)=>{

    conexion.query('SELECT * from user', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            user = JSON.stringify(result);
            res.send(user);
        }

    })    
})



// //Editar Registros
router.get('/edit/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_call WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('edit',{boxId:result[0],user:req.user});
        }

    })   

})
router.get('/edita/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_calla WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('edita',{boxId:result[0],user:req.user});
        }

    })   

})


//Login
router.get('/login',(req, res)=>{
    res.render('login',{alert:false});
})

// registrar page oculta
router.get('/register',(req, res)=>{
    res.render('register');
})
// Cambiar contraseña
router.get('/pass', authControllers.isAuthenticated,(req, res)=>{
    res.render('changePass', {user:req.user} );        
})


// pagina invitado
router.get('/invitado',(req,res)=>{

    conexion.query('SELECT * from agentes_call', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('invitado',{result:result});
        }

    })    
})


//Ruta Edicion de datos
router.post('/update', crud.update);
router.post('/editar', crud.editar);

//Ruta de registro de usuario
router.post('/register',authControllers.register);

//Ruta Cambiar Contraseña
router.post('/pass',authControllers.changePass);

//Ruta login Usuario
router.post('/login',authControllers.login);

//ruta deslogueo Usuario
router.get('/logout', authControllers.logout);



module.exports = router;