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

// Editar Call B Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callb SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
        
    })

}
// Editar Call A Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_calla SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call F Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callf SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe,servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call L Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_calll SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call M Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callm SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call N Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_calln SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call O Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callo SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call P Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callp SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call D Modificado
exports.editarD = (req, res)=>{
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_calld SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
// Editar Call SM Modificado
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_callsm SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
//Editar Call A Rosario
exports.editAros = (req, res)=>{
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_roscalla SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}
//Editar Call B Rosario
exports.editBros = (req, res)=>{
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_roscallb SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}

//Editar Call C Rosario
exports.editCros = (req, res)=>{
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
    const servicio    = req.body.servicio;
    const modalidadTT = req.body.modalidadTT;
    const editor      = req.body.editor;
    const fechaEdicion= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} -- ${fecha.getHours()}:${fecha.getMinutes()}`
    

    conexion.query('UPDATE agentes_roscallc SET ? WHERE boxId = ?', [{estadoPc:estadoPc, obleaPC:obleaPc,DNI:dni,nombre:nombre,ingreso:ingreso,egreso:egreso,lider:lider,
    jefe:jefe, servicio:servicio,modalidadTT:modalidadTT,editor:editor,fechaEdicion},boxId],(error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }        
    })
}