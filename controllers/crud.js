const conexion = require('../database/db');

// exports.save = (req, res)=>{
//     const user = req.body.user;
//     const rol = req.body.rol;
    
//     conexion.query('INSERT INTO users SET?',{user:user, rol:rol}, (error, results)=>{

//         if(error){
//             console.log(error);
//         }else{
//             res.redirect('/');
//         }
//     })
// }

exports.update = (req, res)=>{
    const id          = req.body.id;
    const boxId       = req.body.boxId
    const box         = req.body.box;
    const jornada     = req.body.jornada;
    const estadoPc    = req.body.estadoPc;
    const obleaPc     = req.body.obleaPc;
    const dni         = req.body.DNI;
    const nombre      = req.body.nombre;
    const ingreso     = req.body.ingreso;
    const egreso      = req.body.egreso;
    const lider       = req.body.lider;
    const jefe        = req.body.jefe;
    const sitio       = req.body.sitio;
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    

    conexion.query('UPDATE agentes_call SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
        
    })

}
