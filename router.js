const express = require('express');
const router = express();
const conexion = require('./database/db');
const crud = require('.//controllers/crud');
const authControllers = require('./controllers/authController');


router.get('/',authControllers.isAuthenticated,(req,res)=>{

    conexion.query('SELECT * from agentes_call', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('index',{result:result,user:req.user});
        }

    })    
})

router.get('/data',(req,res)=>{

    conexion.query('SELECT * from agentes_call', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            data = JSON.stringify(result);
            res.send(data);
        }

    })    
})

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

router.get('/login',(req, res)=>{
    res.render('login',{alert:false});
})
router.get('/register',(req, res)=>{
    res.render('register');
})

router.get('/invitado',(req,res)=>{

    conexion.query('SELECT * from agentes_call', (error,result)=>{
    
        if(error){
            throw error;
        }else{
            res.render('invitado',{result:result});
        }

    })    
})



router.post('/update', crud.update);

router.post('/register',authControllers.register);

router.post('/login',authControllers.login);

router.get('/logout', authControllers.logout);



module.exports = router;