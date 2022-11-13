const btnAbrirMensaje= 
document.querySelector("#button");
const btnCerrarMensaje= document.querySelector('#btncerrar');
const mensaje=
document.querySelector("#mensaje");
var con_click=1;



const formulario = document.querySelector('.formulario');
const contactos = [];

const mostrarAlerta = (mensaje, error=null) => {

    const parrafo = document.createElement("p");
    parrafo.innerHTML = mensaje;
    const alerta = document.querySelector('#alerta');

    if(error){
        parrafo.classList.add("error");
    }else{
        parrafo.classList.add("correcto");
    }

    alerta.appendChild(parrafo);

    setTimeout(() => {
        parrafo.remove();
    }, 3000);

};

const imprimirContador = (mensaje, td) => {
    const parrafo = document.createElement("p");
    parrafo.innerHTML = mensaje;
    const contenedor = document.querySelector('#'+td+'');
    contenedor.appendChild(parrafo);
};


const contador =(contact)=>{
    var cmayores=0;
    var contadorcurso=[0,0,0,0,0,0];
    var cpersonasgenero=[0,0];
    var contvulnerables=0;
    var contubicacion=[0,0,0,0];
    var contadorgeneral;

    for (let f = 0; f < contact.length; f++) {
        var objetoslit=Object.values(contact[f])
        for (let c = 0; c < 8; c++) {
            if (c=2) {
                if (objetoslit[2]=="6") {
                    contadorcurso[0]+=1;
                }else if (objetoslit[2]=="7"){
                    contadorcurso[1]+=1;
                }else if (objetoslit[2]=="8"){
                    contadorcurso[2]+=1;
                }else if (objetoslit[2]=="9"){
                    contadorcurso[3]+=1;
                }else if (objetoslit[2]=="10"){
                    contadorcurso[4]+=1;
                }else{
                    contadorcurso[5]+=1;
                }
            }
            if (c=3) {
                if (objetoslit[3]>=18) {
                    cmayores+=1;
                }
            }
            if (c=4) {
                if (objetoslit[4]=="Femenino") {
                    cpersonasgenero[0]+=1;
                    
                }else if(objetoslit[4]=="Masculino"){
                    cpersonasgenero[1]+=1;
                }
                
            }
            if (c=6) {
                if (objetoslit[6]=="Si") {
                    contvulnerables+=1;
                }
                
            }
            if (c=7) {
                if (objetoslit[7]=="La Playa") {
                    contubicacion[0]+=1;
                }else if(objetoslit[7]=="Malambo"){
                    contubicacion[1]+=1;
                }else if(objetoslit[7]=="Barranquilla"){
                    contubicacion[2]+=1;
                }else{
                    contubicacion[3]+=1;
                }   
            }       
        }
    }
    contadorgeneral= [contadorcurso,cmayores,cpersonasgenero,contvulnerables,contubicacion];
    return contadorgeneral;
};



const validarFormulario = (e) =>{
    e.preventDefault();

    const nombres = document.querySelector('#nombres').value;
    const apellidos = document.querySelector('#apellidos').value;
    const curso = document.querySelector('#curso').value;
    const edad = document.querySelector('#edad').value;
    const sexo = document.querySelector('#sexo').value;
    const ecivil = document.querySelector('#ecivil').value;
    const poblacion = document.querySelector('#poblacion').value;
    const ubicacion = document.querySelector('#ubicacion').value;


    if([nombres, apellidos, curso,edad,sexo,ecivil,poblacion,ubicacion].includes("")){
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    };

    // Paso la validacion de la
    mostrarAlerta("Datos guardados de manera exitosa ["+con_click+"]");
    con_click+=1;

    // Objeto Literal
    const datos = {
        nombres,
        apellidos,
        curso,
        edad,
        sexo,
        ecivil,
        poblacion,
        ubicacion
    };

    formulario.reset();
    contactos.push(datos);
    console.table(contactos);

    if(con_click==11){
        var contadorV=contador(contactos);
        console.log(contadorV);
        imprimirContador(contadorV[0][0],"sexto");
        imprimirContador(contadorV[0][1],"septimo");
        imprimirContador(contadorV[0][2],"octavo");
        imprimirContador(contadorV[0][3],"noveno");
        imprimirContador(contadorV[0][4],"decimo");
        imprimirContador(contadorV[0][5],"once");
        imprimirContador(contadorV[1],"personas_m");
        imprimirContador(contadorV[2][0],"fem");
        imprimirContador(contadorV[2][1],"masc");
        imprimirContador(contadorV[3],"vulnerable");
        imprimirContador(contadorV[4][0],"playaa");
        imprimirContador(contadorV[4][1],"malamboo");
        imprimirContador(contadorV[4][2],"bquilla");
        imprimirContador(contadorV[4][3],"galapaa");

    }

    if(con_click==10){
        btnAbrirMensaje.addEventListener("click",()=>{
            mensaje.showModal();
        })
            btnCerrarMensaje.addEventListener("click",()=>{
            mensaje.close();
        })
    }




};

formulario.addEventListener("submit", validarFormulario);