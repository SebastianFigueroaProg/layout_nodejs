//Elemento DOM div
const divBox =[];
for (let i = 5; i < 253; i++) {    
    divBox.push(document.querySelector(`.element${i}`))    
}
const divBoxA = [];
for (let i = 5; i < 255; i++) {
    divBoxA.push(document.querySelector(`.elementA${i}`))    
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
    porcentajeCallA(resultado)
    
})

//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call B
const tituloBoxCallB = (data)=>{
    
    const arrayBoxDom = [];
    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 5; i < 253; i++) {        
        arrayBoxDom.push(document.getElementById(`element${i}`).textContent)                
    } 
    
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
    for (let  i= 0; i < arrayBoxDom.length ; i++){

        if (arrayBoxDataTm[i] == arrayBoxDom[i] && arrayBoxDataTt[i] == arrayBoxDom[i]) {

            divBox[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }
}
//Funcion para pintar la situacion de los BOX del Call B
const estadoBoxCallB=(data)=>{
    
    const arrayBoxDom = [];
    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 5; i < 253; i++) {        
        arrayBoxDom.push(document.getElementById(`element${i}`).textContent)                
    }    
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
    for (let i = 0; i < arrayBoxDom.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayBoxDom[i] && arrayBoxDataTt[i] == arrayBoxDom[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divBox[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divBox[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divBox[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divBox[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                    divBox[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                    divBox[i].style.backgroundColor=porOrdenanza;                        
                    }
            
        }else{
            console.log("error en pintar DIV")
        }
    }            
}

//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado Call A
const tituloBoxCallA = (data)=>{
    
    const arrayBoxDom = [];
    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const nombreTm = [];
    const ingresoTm = [];
    const egresoTm = [];
    const nombreTt = [];
    const ingresoTt = [];
    const egresoTt = [];

    for (let i = 5; i < 255; i++) {        
        arrayBoxDom.push(document.getElementById(`elementA${i}`).textContent)                
    } 
    
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
    //Buble para comparar conidencia de box y agregar los titulos a los elementos Call A
    for (let  i= 0; i < arrayBoxDom.length ; i++){

        if (arrayBoxDataTm[i] == arrayBoxDom[i] && arrayBoxDataTt[i] == arrayBoxDom[i]) {

            divBoxA[i].setAttribute('title',`${arrayBoxDataTm[i]}
            Turno M.: 
            Agente: ${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente: ${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }
}


//Funcion para pintar la situacion de los BOX del Call A
const estadoBoxCallA=(data)=>{
    
    const arrayBoxDom = [];
    const arrayBoxDataTm = [];
    const arrayBoxDataTt = [];
    const arrayEstadoTm = [];
    const arrayEstadoTt = [];
    const arrayNombreTm = [];
    const arrayNombreTt = [];

    for (let i = 5; i < 255; i++) {        
        arrayBoxDom.push(document.getElementById(`elementA${i}`).textContent)                
    }    
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
    for (let i = 0; i < arrayBoxDom.length; i++) {
        
        if (arrayBoxDataTm[i] == arrayBoxDom[i] && arrayBoxDataTt[i] == arrayBoxDom[i]) {
            if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divBoxA[i].style.backgroundColor=ocupadoTlT;
            }else if(arrayEstadoTt[i] === 'Ocupado' && arrayEstadoTm[i] != 'Ocupado'){
                divBoxA[i].style.backgroundColor=ocupadoTt;
            }else if(arrayEstadoTt[i] != 'Ocupado' && arrayEstadoTm[i] === 'Ocupado'){
                divBoxA[i].style.backgroundColor=ocupadoTm;
            }else if(arrayEstadoTt[i] === 'Disponible' && arrayEstadoTm[i] === 'Disponible'){
                divBoxA[i].style.backgroundColor=disponible;
            }else if(arrayEstadoTt[i] === 'Disponible sin PC' && arrayEstadoTm[i] === 'Disponible sin PC'){
                    divBoxA[i].style.backgroundColor=DisponibleSinPC;
            }else if (arrayEstadoTt[i] === 'Por Ordenanza' && arrayEstadoTm[i] === 'Por Ordenanza'){
                    divBoxA[i].style.backgroundColor=porOrdenanza;                        
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

    // Variables para el Total Call B    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call B
    p4.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p5.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p6.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    
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

    // Variables para el Total Call A    
    let suma = ocupacion+disponibilidad+sinUtilizacion; 
    let porOcu = ocupacion * 100 / suma; 
    let resul = porOcu.toFixed(2);
    let porDis = disponibilidad * 100 / suma;
    let resDis = porDis.toFixed(2);
    let porSuti = sinUtilizacion * 100 / suma;
    let resSuti = porSuti.toFixed(2);

    // Modifica etiqueta pra mostras Ocupacion Call B
    p1.innerHTML = ` TM: ${resulTm}% - TT: ${resulTt}% - Tot: ${resul}%`
    p2.innerHTML = ` TM: ${resDisTm}% - TT: ${resDisTt}% - Tot: ${resDis}%`
    p3.innerHTML = ` TM: ${resSutiTm}% - TT: ${resSutiTt}% - Tot: ${resSuti}%`  
    
}