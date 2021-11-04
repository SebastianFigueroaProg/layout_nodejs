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

// Editar Call B
exports.update = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callb SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
        
    })

}
// Editar Call A
exports.editar = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_calla SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call F
exports.editarF = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callf SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call L
exports.editarL = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_calll SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call M
exports.editarM = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callm SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call N
exports.editarN = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_calln SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call O
exports.editarO = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callo SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call P
exports.editarP = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callp SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call SM
exports.editarSm = (req, res)=>{
    let fecha = new Date();
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
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callsm SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, sitio:sitio,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}