const express = require('express');
const router = express();
const conexion = require('./database/db');
const crud = require('.//controllers/crud');
const authControllers = require('./controllers/authController');

//index ADMIN
router.get('/',authControllers.isAuthenticated,(req,res)=>{

    conexion.query('SELECT * from agentes_callb', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('index',{result:result,user:req.user});
        }

    })    
})
// SUPER USER
router.get('/superUser',authControllers.isAuthenticated,(req,res)=>{

    conexion.query('SELECT * from agentes_callb', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('superUser',{result:result,user:req.user});
        }

    })    
})
// pagina invitado
router.get('/invitado',authControllers.isAuthenticated,(req,res)=>{

    conexion.query('SELECT * from agentes_callb', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('invitado',{result:result,user:req.user});
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
//Data Call B
router.get('/data/callb',(req,res)=>{

    conexion.query('SELECT * from agentes_callb', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Call F
router.get('/data/callf',(req,res)=>{

    conexion.query('SELECT * from agentes_callf', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Call L
router.get('/data/calll',(req,res)=>{

    conexion.query('SELECT * from agentes_calll', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Call M
router.get('/data/callm',(req,res)=>{

    conexion.query('SELECT * from agentes_callm', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Call N
router.get('/data/calln',(req,res)=>{

    conexion.query('SELECT * from agentes_calln', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Call O
router.get('/data/callo',(req,res)=>{

    conexion.query('SELECT * from agentes_callo', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Call P
router.get('/data/callp',(req,res)=>{

    conexion.query('SELECT * from agentes_callp', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Call SM
router.get('/data/callsm',(req,res)=>{

    conexion.query('SELECT * from agentes_callsm', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})
//Data Rosario Call A
router.get('/data/callr',(req,res)=>{

    conexion.query('SELECT * from agentes_roscalla',(error, result)=>{

        if(error){
            throw error;
        }else{
            data= JSON.stringify(result);
            res.send(data);
        }
    })
})
//Data Rosario Call B
router.get('/data/callt',(req,res)=>{
    conexion.query('SELECT * from agentes_roscallb',(error, result)=>{
        if (error) {
            throw error;
        } else {
            data = JSON.stringify(result);
            res.send(data);
        }
    })
})
//Data Rosario Call C
router.get('/data/callu',(req,res)=>{
    conexion.query('SELECT * from agentes_roscallc',(error,result)=>{
        if (error) {
            throw error;
        } else {
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
//Call A
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
//Call B
router.get('/edit/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_callb WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('edit',{boxId:result[0],user:req.user});
        }

    })   

})
//Call F
router.get('/editf/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_callf WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editf',{boxId:result[0],user:req.user});
        }
    })   
})
//Call L
router.get('/editl/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_calll WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editl',{boxId:result[0],user:req.user});
        }
    })   
})
//Call M
router.get('/editm/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_callm WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editm',{boxId:result[0],user:req.user});
        }
    })   
})
//Call N
router.get('/editn/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_calln WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editn',{boxId:result[0],user:req.user});
        }
    })   
})
//Call O
router.get('/edito/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_callo WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('edito',{boxId:result[0],user:req.user});
        }
    })   
})
//Call P
router.get('/editp/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_callp WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editp',{boxId:result[0],user:req.user});
        }
    })   
})
//Call SM
router.get('/editsm/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_callsm WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editsm',{boxId:result[0],user:req.user});
        }
    })   
})
//Call A rosario
router.get('/editR/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_roscalla WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editR',{boxId:result[0],user:req.user});
        }
    })   
})
//Call B rosario
router.get('/editT/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_roscallb WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editT',{boxId:result[0],user:req.user});
        }
    })   
})
//Call C rosario
router.get('/editU/:boxId',authControllers.isAuthenticated,(req, res)=>{
    const box = req.params.boxId;   
        
    conexion.query('SELECT * FROM agentes_roscallc WHERE boxId=?',[box],(error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('editU',{boxId:result[0],user:req.user});
        }
    })   
})

//Login
router.get('/login',(req, res)=>{
    res.render('login',{alert:false});
})

// registrar usuario
router.get('/register',authControllers.isAuthenticated,(req, res)=>{
    res.render('register',{user:req.user});
})

// Cambiar contraseña SuperAdmin
router.get('/passUser', authControllers.isAuthenticated,(req, res)=>{
    res.render('changePassRol', {user:req.user} );        
})
// Cambiar contraseña ADMIN
router.get('/pass', authControllers.isAuthenticated,(req, res)=>{
    res.render('changePass', {user:req.user} );        
})
// Cambiar contraseña Invitado
router.get('/passInv', authControllers.isAuthenticated,(req, res)=>{
    res.render('changePass-invitado', {user:req.user} );        
})


//Ruta Edicion de datos
router.post('/update', crud.update); // call-B 
router.post('/editar', crud.editar); // call-A
router.post('/editarf', crud.editarF); // call-F
router.post('/editarl', crud.editarL); // call-L
router.post('/editarm', crud.editarM); // call-M
router.post('/editarn', crud.editarN); // call-M
router.post('/editarp', crud.editarP); // call-P
router.post('/editaro', crud.editarO); // call-O
router.post('/editarsm', crud.editarSm); // call-SM
router.post('/editAros', crud.editAros); // call-A-Rosario
router.post('/editBros', crud.editBros); // call-B-Rosario
router.post('/editCros', crud.editCros); // call-C-Rosario

//Ruta de registro de usuario
router.post('/register',authControllers.register);

//Ruta Cambiar Contraseña
router.post('/pass',authControllers.changePass);
//Ruta Cambiar Contraseña SuperUser
router.post('/passUser',authControllers.changePassUser);
//Ruta Cambiar Contraseña Invitado
router.post('/passInv',authControllers.changePassInv);

//Ruta login Usuario
router.post('/login',authControllers.login);

//ruta deslogueo Usuario
router.get('/logout', authControllers.logout);

module.exports = router;