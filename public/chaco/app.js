const divCallA = [];
const arrayDomBoxA = [];
const divCallB = [];
const arrayDomBoxB = [];
//Arrays Call A
for (let i = 5; i < 255; i++) {    
    divCallA.push(document.querySelector(`.elementA${i}`))    
}
for (let i = 5; i < 255; i++) {    
    arrayDomBoxA.push(document.querySelector(`.elementA${i}`).textContent);       
}
//Arrays Call B
for (let i = 5; i < 253; i++) {    
    divCallB.push(document.querySelector(`.element${i}`));
}
for (let i = 5; i < 253; i++) {    
    arrayDomBoxB.push(document.querySelector(`.element${i}`).textContent);       
}
console.log(arrayDomBoxB)
//Colores box
const rojo = [187, 20, 20];
const verde = [19, 173, 27];
const celeste = [21, 122, 168];
const marron = [151, 76, 14];
const mostaza = [182, 166, 19];
const gris = [76, 77, 85];
const lila = [105,21,214];
const naranja = [206, 136, 57];
const rosa = [200, 53, 219];
const cian = [42, 204, 204]; 
const ocupadoTlT = `rgb(${rojo})`;
const ocupadoTmt = `rgb(${naranja})`;  
const ocupadoTmn = `rgb(${rosa})`;  
const ocupadoTtn = `rgb(${cian})`; 
const disponible = `rgb(${verde})`;
const DisponibleSinPC = `rgb(${celeste})`;
const ocupadoTm = `rgb(${marron})`;
const ocupadoTt = `rgb(${mostaza})`;
const ocupadoTn = `rgb(${lila})`;
const porOrdenanza = `rgb(${gris})`;

// Peticiones hacia el Backend Call B
fetch('/data/callb')
.then( res => res.json())
.then(resultado =>{

    tituloBoxCallB(resultado);
    estadoBoxCallB(resultado); 
    porcentajeCallB(resultado);   
    
})

// Peticiones hacia el Backend Call A
fetch('/data/calla')
.then( res => res.json())
.then(resultado =>{
    
    estadoBoxCallA(resultado);
    tituloBoxCallA(resultado);
    porcentajeCallA(resultado);
    
})

//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call B
const tituloBoxCallB = (data)=>{
    
    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayBoxDataTn = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];
    const nombreTn = [];
    const ingresoTn = [];
    const egresoTn = [];

    
    for (let i = 0; i < 743; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else if(data[i].jornada === 'TT'){
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }else{
            arrayBoxDataTn.push(data[i].box);
            nombreTn.push(data[i].nombre);
            ingresoTn.push(data[i].ingreso);
            egresoTn.push(data[i].egreso);    
        }     
    }
    // console.log(arrayDomBoxB)
    console.log(arrayBoxDataTt)
    console.log(arrayBoxDataTn)
    
    //Buble para comparar conidencia de box y agregar los titulos a los elementos Call A
    for (let  i= 0; i < arrayDomBoxB.length ; i++){
        

        if (arrayBoxDataTm[i] == arrayDomBoxB[i] && arrayBoxDataTt[i] == arrayDomBoxB[i] && arrayBoxDataTn[i] == arrayDomBoxB[i]) {

            divCallB[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}
            Turno N.:
            Agente: ${nombreTn[i]}
            Ingreso: ${ingresoTn[i]} Egreso:${egresoTn[i]}`)
            
        }    
    }
}
//Funcion para pintar la situacion de los BOX del Call B
const estadoBoxCallB = (data)=>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayBoxDataTn = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayEstadoTn = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc);              
        }else if(data[i].jornada === 'TT'){
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
        }else{
            arrayBoxDataTn.push(data[i].box);
            arrayEstadoTn.push(data[i].estadoPc)
        }
        
    }
    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxB.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxB[i]  && arrayBoxDataTt[i] == arrayDomBoxB[i] && arrayBoxDataTn[i] == arrayDomBoxB[i]) {

            if(arrayEstadoTt[i] == 'Ocupado' && arrayEstadoTm[i] == 'Ocupado' && arrayEstadoTn[i] == 'Ocupado'){
                divCallB[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] == 'Ocupado' && arrayEstadoTm[i] == 'Ocupado' && arrayEstadoTn[i] != 'Ocupado'){
                divCallB[i].style.backgroundColor=ocupadoTmt;
            }else if(arrayEstadoTt[i] == 'Ocupado' && arrayEstadoTm[i] != 'Ocupado' && arrayEstadoTn[i] == 'Ocupado'){
                divCallB[i].style.backgroundColor=ocupadoTtn;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] == 'Ocupado' && arrayEstadoTn[i] == 'Ocupado'){
                divCallB[i].style.backgroundColor=ocupadoTmn;
            }else if(arrayEstadoTt[i] == 'Ocupado' && arrayEstadoTm[i] != 'Ocupado' && arrayEstadoTn[i] != 'Ocupado'){
                divCallB[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] == 'Ocupado'&& arrayEstadoTn[i] != 'Ocupado'){
                divCallB[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'&& arrayEstadoTn[i] == 'Ocupado'){
                divCallB[i].style.backgroundColor=ocupadoTn;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallB[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                divCallB[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallB[i].style.backgroundColor=porOrdenanza;                        
            }           
        }else{
            console.log("error en pintar DIV")
        }
    }           
}
//Funcion para mostrar Ocupacion del Call B
const porcentajeCallB = (data)=>{

    const p4 = document.getElementById('p4');
    const p5 = document.getElementById('p5');
    const p6 = document.getElementById('p6');
    
    let ocupacion = 0;
    let disponibilidad = 0;
    let sinUtilizacion = 0;
    let ocupacionTm = 0;
    let disponibilidadTm = 0; 
    let sinUtilizacionTm = 0;
    let ocupacionTt = 0;
    let disponibilidadTt = 0; 
    let sinUtilizacionTt = 0;
    let ocupacionTn = 0;
    let disponibilidadTn = 0; 
    let sinUtilizacionTn = 0;

    //Contadores de estados Call B
    for (let i = 0; i < data.length; i++) {
        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else if(data[i].jornada === 'TT'){
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTn++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTn++;
            }else{
                sinUtilizacionTn++;
            }
        }
        
    }
    // Contador para el Total del Call B
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }
        
    }
    // Variables Turno Mañana Call B
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call B
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    //  Variables Turno Noche Call B
    let sumaTn = ocupacionTn+disponibilidadTn+sinUtilizacionTn; 
    let porOcuTn = ocupacionTn * 100 / sumaTn; 
    let resulTn = porOcuTn.toFixed(2);
    let porDisTn = disponibilidadTn * 100 / sumaTn;
    let resDisTn = porDisTn.toFixed(2);
    let porSutiTn = sinUtilizacionTn * 100 / sumaTn;
    let resSutiTn = porSutiTn.toFixed(2);

    // Variables para el Total Call B    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call B
    p4.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - TN: ${resulTn}% - Tot: ${resul}%`
    p5.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - TT: ${resDisTn}% - Tot: ${resDis}%`
    p6.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - TT: ${resSutiTn}% - Tot: ${resSuti}%`  
    
}


//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call A
const tituloBoxCallA = (data)=>{
    
    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayBoxDataTn = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];
    const nombreTn = [];
    const ingresoTn = [];
    const egresoTn = [];

    
    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            nombreTm.push(data[i].nombre);
            ingresoTm.push(data[i].ingreso);
            egresoTm.push(data[i].egreso);    
        }else if(data[i].jornada === 'TT'){
            arrayBoxDataTt.push(data[i].box);
            nombreTt.push(data[i].nombre);
            ingresoTt.push(data[i].ingreso);
            egresoTt.push(data[i].egreso);    
        }else{
            arrayBoxDataTn.push(data[i].box);
            nombreTn.push(data[i].nombre);
            ingresoTn.push(data[i].ingreso);
            egresoTn.push(data[i].egreso);    
        }     
    }
    //Buble para comparar conidencia de box y agregar los titulos a los elementos Call A
    for (let  i= 0; i < arrayDomBoxA.length ; i++){

        if (arrayBoxDataTm[i] == arrayDomBoxA[i] && arrayBoxDataTt[i] == arrayDomBoxA[i] && arrayBoxDataTn[i] == arrayDomBoxA[i]) {

            divCallA[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}
            Turno N.:
            Agente: ${nombreTn[i]}
            Ingreso: ${ingresoTn[i]} Egreso:${egresoTn[i]}`)
            
        }    
    }
}

//Funcion para pintar la situacion de los BOX del Call A
const estadoBoxCallA = (data)=>{

    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayBoxDataTn = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayEstadoTn = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i].jornada === 'TM'){
            arrayBoxDataTm.push(data[i].box);
            arrayEstadoTm.push(data[i].estadoPc);              
        }else if(data[i].jornada === 'TT'){
            arrayBoxDataTt.push(data[i].box);
            arrayEstadoTt.push(data[i].estadoPc)
        }else{
            arrayBoxDataTn.push(data[i].box);
            arrayEstadoTn.push(data[i].estadoPc)
        }
        
    }
    //Bucle donde se compara la coicidencia de BOX para pintar correctamente dependiendo el estado del mismo
    for (let i = 0; i < arrayDomBoxA.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayDomBoxA[i]  && arrayBoxDataTt[i] == arrayDomBoxA[i] && arrayBoxDataTn[i] == arrayDomBoxA[i]) {

            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado' && arrayEstadoTn[i] === 'Ocupado'){
                divCallA[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado' && arrayEstadoTn[i] != 'Ocupado'){
                divCallA[i].style.backgroundColor=ocupadoTmt;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado' && arrayEstadoTn[i] === 'Ocupado'){
                divCallA[i].style.backgroundColor=ocupadoTtn;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado' && arrayEstadoTn[i] === 'Ocupado'){
                divCallA[i].style.backgroundColor=ocupadoTmn;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado' && arrayEstadoTn[i] != 'Ocupado'){
                divCallA[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'&& arrayEstadoTn[i] != 'Ocupado'){
                divCallA[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'&& arrayEstadoTn[i] === 'Ocupado'){
                divCallA[i].style.backgroundColor=ocupadoTn;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divCallA[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                divCallA[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                divCallA[i].style.backgroundColor=porOrdenanza;                        
            }           
        }else{
            console.log("error en pintar DIV")
        }
    }    
}

//Funcion para mostrar Ocupacion del Call A
const porcentajeCallA = (data)=>{

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
    let ocupacionTn = 0;
    let disponibilidadTn = 0; 
    let sinUtilizacionTn = 0;

    //Contadores de estados Call A
    for (let i = 0; i < data.length; i++) {
        if (data[i].jornada === 'TM') {
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTm++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTm++;
            }else{
                sinUtilizacionTm++;
            }
        }else if(data[i].jornada === 'TT'){
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTt++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTt++;
            }else{
                sinUtilizacionTt++;
            }
        }else{
            if (data[i].estadoPc === 'Ocupado') {
                ocupacionTn++;
            } else if(data[i].estadoPc === 'Disponible'){
                disponibilidadTn++;
            }else{
                sinUtilizacionTn++;
            }
        }
        
    }
    // Contador para el Total del Call A
    for (let i = 0; i < data.length; i++) {

        if (data[i].estadoPc === 'Ocupado') {
            ocupacion++;
        } else if(data[i].estadoPc === 'Disponible'){
            disponibilidad++;
        }else{
            sinUtilizacion++;
        }
        
    }
    // Variables Turno Mañana Call A
    let sumaTm = ocupacionTm+disponibilidadTm+sinUtilizacionTm; 
    let porOcuTm = ocupacionTm * 100 / sumaTm; 
    let resulTm = porOcuTm.toFixed(2);
    let porDisTm = disponibilidadTm * 100 / sumaTm;
    let resDisTm = porDisTm.toFixed(2);
    let porSutiTm = sinUtilizacionTm * 100 / sumaTm;
    let resSutiTm = porSutiTm.toFixed(2);

    //  Variables Turno Tarde Call A
    let sumaTt = ocupacionTt+disponibilidadTt+sinUtilizacionTt; 
    let porOcuTt = ocupacionTt * 100 / sumaTt; 
    let resulTt = porOcuTt.toFixed(2);
    let porDisTt = disponibilidadTt * 100 / sumaTt;
    let resDisTt = porDisTt.toFixed(2);
    let porSutiTt = sinUtilizacionTt * 100 / sumaTt;
    let resSutiTt = porSutiTt.toFixed(2);

    //  Variables Turno Noche Call A
    let sumaTn = ocupacionTn+disponibilidadTn+sinUtilizacionTn; 
    let porOcuTn = ocupacionTn * 100 / sumaTn; 
    let resulTn = porOcuTn.toFixed(2);
    let porDisTn = disponibilidadTn * 100 / sumaTn;
    let resDisTn = porDisTn.toFixed(2);
    let porSutiTn = sinUtilizacionTn * 100 / sumaTn;
    let resSutiTn = porSutiTn.toFixed(2);

    // Variables para el Total Call A    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call A
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - TN: ${resulTn}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - TT: ${resDisTn}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - TT: ${resSutiTn}% - Tot: ${resSuti}%`  
    
}