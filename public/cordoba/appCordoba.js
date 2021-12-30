const divCallL = [];
const arrayDomBoxL = [];
const divCallN = [];
const arrayDomBoxN = [];
const divCallM = [];
const arrayDomBoxM = [];
const divCallF = [];
const arrayDomBoxF = [];
const divCallP = [];
const arrayDomBoxP = [];
const divCallO = [];
const arrayDomBoxO = [];
const divCallD = [];
const arrayDomBoxD = [];

//Arrays Call L 
for (let i = 1; i < 41; i++) {    
    divCallL.push(document.querySelector(`.element${i}`));
}
for (let i = 1; i < 41; i++) {    
    arrayDomBoxL.push(document.querySelector(`.element${i}`).textContent);       
}
//Arrays Call N
for (let i = 1; i < 92; i++) {    
    divCallN.push(document.querySelector(`.elementN${i}`))    
}
for (let i = 1; i < 92; i++) {    
    arrayDomBoxN.push(document.querySelector(`.elementN${i}`).textContent);       
}
//Arrays Call M
for (let i = 1; i < 29; i++) {    
    divCallM.push(document.querySelector(`.elementM${i}`))    
}
for (let i = 1; i < 29; i++) {    
    arrayDomBoxM.push(document.querySelector(`.elementM${i}`).textContent);       
}
//Arrays Call F
for (let i = 1; i < 29; i++) {    
    divCallF.push(document.querySelector(`.elementF${i}`))    
}
for (let i = 1; i < 29; i++) {    
    arrayDomBoxF.push(document.querySelector(`.elementF${i}`).textContent);       
}
//Arrays Call P
for (let i = 1; i < 100; i++) {    
    divCallP.push(document.querySelector(`.elementP${i}`))    
}
for (let i = 1; i < 100; i++) {    
    arrayDomBoxP.push(document.querySelector(`.elementP${i}`).textContent);       
}
//Arrays Call O
for (let i = 1; i < 98; i++) {    
    divCallO.push(document.querySelector(`.elementO${i}`))    
}
for (let i = 1; i < 98; i++) {    
    arrayDomBoxO.push(document.querySelector(`.elementO${i}`).textContent);       
}
//Arrays Call D
for (let i = 1; i < 17; i++) {    
    divCallD.push(document.querySelector(`.elementD${i}`))    
}
for (let i = 1; i < 17; i++) {    
    arrayDomBoxD.push(document.querySelector(`.elementD${i}`).textContent);       
}

//Colores box
const rojo = [187, 20, 20];
const verde = [19, 173, 27];
const celeste = [21, 122, 168];
const marron = [151, 76, 14];
const mostaza = [182, 166, 19];
const gris = [76, 77, 85];
const ocupadoTlT = `rgb(${rojo})`;
const disponible = `rgb(${verde})`;
const DisponibleSinPC = `rgb(${celeste})`;
const ocupadoTm = `rgb(${marron})`;
const ocupadoTt = `rgb(${mostaza})`;
const porOrdenanza = `rgb(${gris})`;

// Peticiones hacia el Backend Call L
fetch('/data/calll')
.then( res => res.json())
.then(resultado =>{

    estadoBoxCallL(resultado)   
    tituloBoxL(resultado)
    ocupacionCallL(resultado)

})
// Peticiones hacia el Backend Call N
fetch('/data/calln')
.then( res => res.json())
.then(resultado =>{ 
    estadoBoxCallN(resultado)
    tituloBoxN(resultado)
    ocupacionCallN(resultado)
})
// Peticiones hacia el Backend Call M
fetch('/data/callm')
.then( res => res.json())
.then(resultado =>{ 
    estadoBoxCallM(resultado)
    tituloBoxM(resultado)
    ocupacionCallM(resultado)
})
// Peticiones hacia el Backend Call F
fetch('/data/callf')
.then( res => res.json())
.then(resultado =>{
    estadoBoxCallF(resultado)
    tituloBoxF(resultado)
    ocupacionCallF(resultado)
})
// Peticiones hacia el Backend Call O
fetch('/data/callo')
.then( res => res.json())
.then(resultado =>{
    estadoBoxCallO(resultado)
    tituloBoxO(resultado)
    ocupacionCallO(resultado)
})
// Peticiones hacia el Backend Call P
fetch('/data/callp')
.then( res => res.json())
.then(resultado =>{
    estadoBoxCallP(resultado)
    tituloBoxP(resultado)
    ocupacionCallP(resultado)  
})
// Peticiones hacia el Backend Call D
fetch('/data/calld')
.then( res => res.json())
.then(resultado =>{
    estadoBoxCallD(resultado)    
    tituloBoxD(resultado)
    ocupacionCallD(resultado)  
})
//CALL L
//Funcion para pintar la situacion de los BOX del Call L
const estadoBoxCallL =(data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc); 
            arrayNombreTm.push(data[i].nombre);               
        }else{
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
            arrayNombreTt.push(data[i].nombre);  
        }        
    }

    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxL.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxL[i] && arrayBoxDataTt[i] == arrayDomBoxL[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallL[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divCallL[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallL[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallL[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                divCallL[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallL[i].style.backgroundColor=porOrdenanza;                        
                    }            
        }else{
            console.log("error en pintar DIV")
        }
    }    
}
//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call L
const tituloBoxL = (data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else{
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }   
    }

    //Buble para comparar conidencia de box y agregar los titulos a los elementos
    for (let  i= 0; i < arrayDomBoxL.length ; i++){

        if (arrayBoxDataTm[i] == arrayDomBoxL[i] && arrayBoxDataTt[i] == arrayDomBoxL[i]) {

            divCallL[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }

}
//Funcion para mostrar Ocupacion del Call L
const ocupacionCallL = (data) =>{

    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');

    let ocupacion = 0;
    let disponibilidad = 0;
    let sinUtilizacion = 0;
    let ocupacionTm = 0;
    let disponibilidadTm = 0; 
    let sinUtilizacionTm = 0;
    let ocupacionTt = 0;
    let disponibilidadTt = 0; 
    let sinUtilizacionTt = 0;

    //Contadores de estados Call L
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }

        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }
        
    }

    // Variables Turno Mañana Call L
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call L
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    // Variables para el Total Call L    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call L
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    

}

//CALL N
//Funcion para pintar la situacion de los BOX del Call N
const estadoBoxCallN =(data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc); 
            arrayNombreTm.push(data[i].nombre);               
        }else{
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
            arrayNombreTt.push(data[i].nombre);  
        }        
    }

    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxN.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxN[i] && arrayBoxDataTt[i] == arrayDomBoxN[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallN[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divCallN[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallN[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallN[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                divCallN[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallN[i].style.backgroundColor=porOrdenanza;                        
                    }            
        }else{
            console.log("error en pintar DIV")
        }
    }    
}
//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call N
const tituloBoxN = (data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else{
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }   
    }

    //Buble para comparar conidencia de box y agregar los titulos a los elementos
    for (let  i= 0; i < arrayDomBoxN.length ; i++){

        if (arrayBoxDataTm[i] == arrayDomBoxN[i] && arrayBoxDataTt[i] == arrayDomBoxN[i]) {

            divCallN[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }

}
//Funcion para mostrar Ocupacion del Call N
const ocupacionCallN = (data) =>{

    const p1 = document.getElementById('p4');
    const p2 = document.getElementById('p5');
    const p3 = document.getElementById('p6');

    let ocupacion = 0;
    let disponibilidad = 0;
    let sinUtilizacion = 0;
    let ocupacionTm = 0;
    let disponibilidadTm = 0; 
    let sinUtilizacionTm = 0;
    let ocupacionTt = 0;
    let disponibilidadTt = 0; 
    let sinUtilizacionTt = 0;

    //Contadores de estados Call N
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }

        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }
        
    }

    // Variables Turno Mañana Call N
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call N
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    // Variables para el Total Call N    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call N
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    

}

//CALL M
//Funcion para pintar la situacion de los BOX del Call M
const estadoBoxCallM =(data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc); 
            arrayNombreTm.push(data[i].nombre);               
        }else{
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
            arrayNombreTt.push(data[i].nombre);  
        }        
    }

    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxM.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxM[i] && arrayBoxDataTt[i] == arrayDomBoxM[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallM[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divCallM[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallM[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallM[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] == 'Disponible sin PC' && arrayEstadoTm[i] == 'Disponible sin PC'){
                divCallM[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallM[i].style.backgroundColor=porOrdenanza;                        
                    }            
        }else{
            console.log("error en pintar DIV")
        }
    }    
}
//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call M
const tituloBoxM = (data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else{
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }   
    }

    //Buble para comparar conidencia de box y agregar los titulos a los elementos
    for (let  i= 0; i < arrayDomBoxM.length ; i++){

        if (arrayBoxDataTm[i] == arrayDomBoxM[i] && arrayBoxDataTt[i] == arrayDomBoxM[i]) {

            divCallM[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }

}
//Funcion para mostrar Ocupacion del Call M
const ocupacionCallM = (data) =>{

    const p1 = document.getElementById('p7');
    const p2 = document.getElementById('p8');
    const p3 = document.getElementById('p9');

    let ocupacion = 0;
    let disponibilidad = 0;
    let sinUtilizacion = 0;
    let ocupacionTm = 0;
    let disponibilidadTm = 0; 
    let sinUtilizacionTm = 0;
    let ocupacionTt = 0;
    let disponibilidadTt = 0; 
    let sinUtilizacionTt = 0;

    //Contadores de estados Call M
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }

        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }
        
    }

    // Variables Turno Mañana Call M
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call M
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    // Variables para el Total Call M    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call M
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    

}

//CALL F
//Funcion para pintar la situacion de los BOX del Call F
const estadoBoxCallF =(data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc); 
            arrayNombreTm.push(data[i].nombre);               
        }else{
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
            arrayNombreTt.push(data[i].nombre);  
        }        
    }

    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxF.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxF[i] && arrayBoxDataTt[i] == arrayDomBoxF[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallF[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divCallF[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallF[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallF[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                divCallF[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallF[i].style.backgroundColor=porOrdenanza;                        
                    }            
        }else{
            console.log("error en pintar DIV")
        }
    }    
}
//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call F
const tituloBoxF = (data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else{
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }   
    }

    //Buble para comparar conidencia de box y agregar los titulos a los elementos
    for (let  i= 0; i < arrayDomBoxF.length ; i++){

        if (arrayBoxDataTm[i] == arrayDomBoxF[i] && arrayBoxDataTt[i] == arrayDomBoxF[i]) {

            divCallF[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }

}
//Funcion para mostrar Ocupacion del Call F
const ocupacionCallF = (data) =>{

    const p1 = document.getElementById('p10');
    const p2 = document.getElementById('p11');
    const p3 = document.getElementById('p12');

    let ocupacion = 0;
    let disponibilidad = 0;
    let sinUtilizacion = 0;
    let ocupacionTm = 0;
    let disponibilidadTm = 0; 
    let sinUtilizacionTm = 0;
    let ocupacionTt = 0;
    let disponibilidadTt = 0; 
    let sinUtilizacionTt = 0;

    //Contadores de estados Call F
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }

        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }
        
    }

    // Variables Turno Mañana Call F
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call F
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    // Variables para el Total Call F    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call F
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    

}

//CALL P
//Funcion para pintar la situacion de los BOX del Call P
const estadoBoxCallP =(data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc); 
            arrayNombreTm.push(data[i].nombre);               
        }else{
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
            arrayNombreTt.push(data[i].nombre);  
        }        
    }

    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxP.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxP[i] && arrayBoxDataTt[i] == arrayDomBoxP[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallP[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divCallP[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallP[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallP[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                divCallP[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallP[i].style.backgroundColor=porOrdenanza;                        
                    }            
        }else{
            console.log("error en pintar DIV")
        }
    }    
}
//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call P
const tituloBoxP = (data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else{
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }   
    }

    //Buble para comparar conidencia de box y agregar los titulos a los elementos
    for (let  i= 0; i < arrayDomBoxP.length ; i++){

        if (arrayBoxDataTm[i] == arrayDomBoxP[i] && arrayBoxDataTt[i] == arrayDomBoxP[i]) {

            divCallP[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }

}
//Funcion para mostrar Ocupacion del Call P
const ocupacionCallP = (data) =>{

    const p1 = document.getElementById('p16');
    const p2 = document.getElementById('p17');
    const p3 = document.getElementById('p18');

    let ocupacion = 0;
    let disponibilidad = 0;
    let sinUtilizacion = 0;
    let ocupacionTm = 0;
    let disponibilidadTm = 0; 
    let sinUtilizacionTm = 0;
    let ocupacionTt = 0;
    let disponibilidadTt = 0; 
    let sinUtilizacionTt = 0;

    //Contadores de estados Call P
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }

        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }
        
    }

    // Variables Turno Mañana Call P
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call P
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    // Variables para el Total Call P    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call P
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    

}

//CALL O
//Funcion para pintar la situacion de los BOX del Call O
const estadoBoxCallO =(data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc); 
            arrayNombreTm.push(data[i].nombre);               
        }else{
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
            arrayNombreTt.push(data[i].nombre);  
        }        
    }

    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxO.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxO[i] && arrayBoxDataTt[i] == arrayDomBoxO[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallO[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divCallO[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallO[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallO[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                divCallO[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallO[i].style.backgroundColor=porOrdenanza;                        
                    }            
        }else{
            console.log("error en pintar DIV")
        }
    }    
}
//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call O
const tituloBoxO = (data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else{
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }   
    }

    //Buble para comparar conidencia de box y agregar los titulos a los elementos
    for (let  i= 0; i < arrayDomBoxO.length ; i++){

        if (arrayBoxDataTm[i] == arrayDomBoxO[i] && arrayBoxDataTt[i] == arrayDomBoxO[i]) {

            divCallO[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }

}
//Funcion para mostrar Ocupacion del Call O
const ocupacionCallO = (data) =>{

    const p1 = document.getElementById('p13');
    const p2 = document.getElementById('p14');
    const p3 = document.getElementById('p15');

    let ocupacion = 0;
    let disponibilidad = 0;
    let sinUtilizacion = 0;
    let ocupacionTm = 0;
    let disponibilidadTm = 0; 
    let sinUtilizacionTm = 0;
    let ocupacionTt = 0;
    let disponibilidadTt = 0; 
    let sinUtilizacionTt = 0;

    //Contadores de estados Call O
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }

        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }
        
    }

    // Variables Turno Mañana Call O
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call O
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    // Variables para el Total Call O    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call O
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    

}

//CALL D
//Funcion para pintar la situacion de los BOX del Call D
const estadoBoxCallD =(data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc); 
            arrayNombreTm.push(data[i].nombre);               
        }else{
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
            arrayNombreTt.push(data[i].nombre);  
        }        
    }

    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxD.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxD[i] && arrayBoxDataTt[i] == arrayDomBoxD[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallD[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divCallD[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divCallD[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallD[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                divCallD[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallD[i].style.backgroundColor=porOrdenanza;                        
                    }            
        }else{
            console.log("error en pintar DIV")
        }
    }    
}
//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call D
const tituloBoxD = (data) =>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else{
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }   
    }

    //Buble para comparar conidencia de box y agregar los titulos a los elementos
    for (let  i= 0; i < arrayDomBoxD.length ; i++){

        if (arrayBoxDataTm[i] == arrayDomBoxD[i] && arrayBoxDataTt[i] == arrayDomBoxD[i]) {

            divCallD[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }

}
//Funcion para mostrar Ocupacion del Call D
const ocupacionCallD = (data) =>{

    const p1 = document.getElementById('p19');
    const p2 = document.getElementById('p20');
    const p3 = document.getElementById('p21');

    let ocupacion = 0;
    let disponibilidad = 0;
    let sinUtilizacion = 0;
    let ocupacionTm = 0;
    let disponibilidadTm = 0; 
    let sinUtilizacionTm = 0;
    let ocupacionTt = 0;
    let disponibilidadTt = 0; 
    let sinUtilizacionTt = 0;

    //Contadores de estados Call D
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }

        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }
        
    }

    // Variables Turno Mañana Call D
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call D
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    // Variables para el Total Call D    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call D
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    

}