const $prueba = document.querySelector('.element5');

//Elemento DOM div
const divBox =[];
for (let i = 5; i < 253; i++) {    
    divBox.push(document.querySelector(`.element${i}`))    
}
//Colores box
// rgb(187, 20, 20);
// rgb(19, 173, 27);
// rgb(21, 122, 168);
// rgb(151, 76, 14);
// rgb(182, 166, 19);
// rgb(76, 77, 85);

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


// Peticiones hacia el Backend
fetch('/data')
.then( res => res.json())
.then(resultado =>{

    tituloPrueba(resultado);
    estadoBox(resultado);    
    
})


const tituloBox = (data)=>{
    let box1 = data[0].box;
    let nombre = data[0].nombre;
    let ingreso = data[0].ingreso;
    let egreso = data[0].egreso;
    let turno = data[0].jornada;
    
    //Titulo para ver contenido del Box
    $prueba.setAttribute('title',`Agente: ${nombre}
    Ingreso: ${ingreso} Egreso:${egreso}
    Box:${box1} Turno:${turno}`)
}
//Funcion para poner titulo a los elemento para mostrar datos del Box posicionado
const tituloPrueba = (data)=>{
    
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
            Agente:${nombreTm[i]}
            Ingreso: ${ingresoTm[i]}--Egreso:${egresoTm[i]}
            Turno T.:
            Agente:${nombreTt[i]}
            Ingreso: ${ingresoTt[i]} Egreso:${egresoTt[i]}`)
            
        }    
    }
}
//Funcion para pintar la situacion de los BOX del Call
const estadoBox=(data)=>{
    
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
    //Bucle donde se compara la conicidencia de BOX para pintar correctamente dependiendo el estado del mismo
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
