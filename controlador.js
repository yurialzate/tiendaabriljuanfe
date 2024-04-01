let cajaUsuario=document.getElementById("usuario")
let cajaCorreo=document.getElementById("email")
let cajaContraseña=document.getElementById("contraseña")

//validando el formulario
let boton=document.getElementById("boton")

boton.addEventListener("click",function(evento){
    evento.preventDefault()

    if (cajaUsuario.value=="" && cajaContraseña.value=="" && cajaCorreo.value==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "tienes campos sin llenar",
          });
     }else{
        Swal.fire({
            title: "buen trabajo",
            text: "Bienvenido, espera un mmomento",
            icon: "success"
          });
        setTimeout(function(){
           window.location.href="./home.html"
        },5000)

     }
})