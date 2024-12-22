const submitFunction=(event)=>{
   if(!validarFormulario){
    event.preventDefault()//previene la actualización de la web
   } else{
    event.preventDefault()
    alert(
        'Los datos envíados fueron : \n'+
        'Nombre: ' + document.getElementById('nombre'),value + '\n'+
        'Apellido: ' + document.getElementById('apellido'),value + '\n'+
        'Documento: ' + document.getElementById('documento'),value + '\n'+
        'Email: ' + document.getElementById('email'),value + '\n'+
        'Edad: ' + document.getElementById('edad'),value + '\n'+
        'Activdad: ' + document.getElementById('actividad'),value + '\n'+
        'Nivel de Estudio: ' + document.getElementById('nivelEstudio'),value + '\n'
      
    )
   }
    
   
    
    
}
document.getElementById('formulario').addEventListener('submit', submitFunction) //escucha el envío del formulario

function validarFormulario(){
    //esto valida los campos de texto
    const camposTexto=document.querySelectorAll('input[type="text"]')
    let validacionCorrecta=true;
    camposTexto.forEach(campo => {
        let errorCampo=document.getElementById('error' + campo.id.charAt(0).toUpperCase()+campo.id.slice(1))
        //error + id con la primera letra en mayúscula
        if(campo.value.trim()===''){
            mostrarError(errorCampo,'Este campo es requerido')
            validacionCorrecta= false;
        }
        else if(campo.value.length>0 &&campo.value.length<3){
            mostrarError(errorCampo,'Este campo debe tener al menos 3 caracteres')
            validacionCorrecta= false;
        }
        else{
            ocultarError(errorCampo)
        }
    })
    //esto valida el email
    const email= getElementById('email');
    let errorEmail=document.getElementById('errorEmail')
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
    {
        ocultarError(errorEmail)
    }
    else{
        mostrarError(errorEmail, 'Ingrese un email válido')
    }
    const edad= document.getElementById('edad');
    const errorEdad= document.getElementById('errorEdad');
    if(edad.value<18){
        mostrarError(errorEdad, 'debes ser mayor de 18 para registrarte')
        validacionCorrecta=false;
    }
    else{
        ocultarError(errorEdad)
    }

    //validamos actividad
    const actividad=document.getElementById('actividad')
    const errorActividad=document.getElementById('errorActividad')
    if(actividad.value ==''){
        mostrarError(errorActividad, 'Seleccione actividad')
        validacionCorrecta=false;
    }    else{
        ocultarError(errorActividad)
    }
    //validamos nivel de estudio
    const estudio=document.getElementById('nivelEstudio')
    const errorNivelEstudio=document.getElementById('errorNivelEstudio')
    if(estudio.value ==''){
        mostrarError(errorNivelEstudio, 'Seleccione nivel de estudio')
        validacionCorrecta=false;
    }    else{
        ocultarError(errorNivelEstudio)
    }

    //chequeamos que acepte lso términos
    const acpetoTerminos=document.getElementById('aceptoTerminos')
    const errorAceptoTerminos=document.getElementById('errorAceptoTerminos')
    if(acpetoTerminos.value ==''){
        mostrarError(errorAceptoTerminos, 'debes aceptar los terminos y condiciones')
        validacionCorrecta=false;
    }    else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta //esto dirá si el formualrio completo está completo o no
}
const mostrarError=(elemento, mensaje) =>{
    elemento.textContent =mensaje;
    elemento.style.display ="block";
}
const ocultarError=(elemento) =>{
    elemento.textContent ='';
    elemento.style.display ="none";
}
