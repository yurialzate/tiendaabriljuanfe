let empleados=Array(
    {
        id:1,
        nombre:"yuri alzate",
        cargo:"jefe",
        telefono:"3239784744",
        correo:"yurialzate@gmail.com",
        salario:5000000,
        contactoEmergencia:"3005524766",
        foto:"./img/empleado.1.webp|"
    },
    {
        id:2,
        nombre:"monica zapata",
        cargo:"contador",
        telefono:"323974766",
        correo:"monicazapata@gmail.com",
        salario:4000000,
        contactoEmergencia:"3005559326",
        foto:"./img/empleado.2.webp"
    },
    {
        id:3,
        nombre:"marcela reyes",
        cargo:"contador",
        telefono:"323971234",
        correo:"marcelarreyes@gmail.com",
        salario:4000000,
        contactoEmergencia:"30055558489",
        foto:"./img/empleado.3.jpg"
    },
    {
        id:4,
        nombre:"manuela sanchez",
        cargo:"cocina",
        telefono:"3239586412",
        correo:"manuelasanchez@gmail.com",
        salario:3000000,
        contactoEmergencia:"30055556845",
        foto:"./img/empleado.4.avif"
    },
    {
        id:5,
        nombre:"wendy garcia",
        cargo:"cocina",
        telefono:"323976589",
        correo:"wendygarcia@gmail.com",
        salario:3000000,
        contactoEmergencia:"30055553248",
        foto:"./img/empleado.5.avif"
    },
    {
        id:6,
        nombre:"mariany garcia",
        cargo:"mesera",
        telefono:"323976582",
        correo:"marianygarcia@gmail.com",
        salario:2000000,
        contactoEmergencia:"30055556324",
        foto:"./img/empleado.6.jpg"
    },
    {
        id:7,
        nombre:"paola sanchez",
        cargo:"mesera",
        telefono:"323978624",
        correo:"paolasanchez@gmail.com",
        salario:2000000,
        contactoEmergencia:"3005562489",
        foto:"./img/empleado.7.jpg"
    },
    {
        id:8,
        nombre:"maria moscoso",
        cargo:"encargada de pedidos",
        telefono:"323976524",
        correo:"mariamoscoso@gmail.com",
        salario:1500000,
        contactoEmergencia:"3005556247",
        foto:"./img/empleado.8.jpg"
    },
    {
        id:9,
        nombre:"angel uribe",
        cargo:"cocinera",
        telefono:"323976843",
        correo:"angeluribe@gmail.com",
        salario:3000000,
        contactoEmergencia:"30055556824",
        foto:"./img/empleado.9.jpg"
    },
    {
        id:10,
        nombre:"tatiana osorio",
        cargo:"encargada de pagina web",
        telefono:"3239765875",
        correo:"tatianaosorio@gmail.com",
        salario:4000000,
        contactoEmergencia:"30055553597",
        foto:"./img/empleado.10.jpg"
    },
    {
        id:11,
        nombre:"emiliano montolla",
        cargo:"diseñador web",
        telefono:"323976358",
        correo:"emilianomontolla@gmail.com",
        salario:5000000,
        contactoEmergencia:"30055556358",
        foto:"./img/empleado.11.webp"
    },
    {
        id:12,
        nombre:"cesar salazar",
        cargo:"chef",
        telefono:"3239765698",
        correo:"cesarsalazar@gmail.com",
        salario:3500000,
        contactoEmergencia:"30055556325",
        foto:"./img/empleado.12.webp"
    },
    {
        id:13,
        nombre:"ivan alzate",
        cargo:"steward",
        telefono:"323976495",
        correo:"ivanalzate@gmail.com",
        salario:1500000,
        contactoEmergencia:"30055556534",
        foto:"./img/empleado.13.webp"
    },
    {
        id:14,
        nombre:"daniel ruiz",
        cargo:"steward",
        telefono:"3239763254",
        correo:"danielruiz@gmail.com",
        salario:1500000,
        contactoEmergencia:"30055556258",
        foto:"./img/empleado.14.jpg"
    },
    {
        id:15,
        nombre:"juan otalvaro",
        cargo:"steward",
        telefono:"3239763288",
        correo:"juanotalvaro@gmail.com",
        salario:1500000,
        contactoEmergencia:"30055556842",
        foto:"./img/empleado.15.webp"
    },
    {
        id:16,
        nombre:"esteban montoya",
        cargo:"asistente de cocina",
        telefono:"323976248",
        correo:"estebanmontoya@gmail.com",
        salario:1500000,
        contactoEmergencia:"30055558542",
        foto:"./img/empleado.16.jpg"
    },
    {
        id:17,
        nombre:"chistian caro",
        cargo:"bodeguero",
        telefono:"323976259",
        correo:"chistiancaro@gmail.com",
        salario:3000000,
        contactoEmergencia:"30055556235",
        foto:"./img/empleado.17.jpg"
    },
    {
        id:18,
        nombre:"camilo flores",
        cargo:"bodeguero",
        telefono:"3239763258",
        correo:"camiloflorez@gmail.com",
        salario:3000000,
        contactoEmergencia:"30055556258",
        foto:"./img/empleado.18.jpg"
    },
    {
        id:19,
        nombre:"daniel restrepo",
        cargo:"vigilante",
        telefono:"3239765892",
        correo:"danielrestrepo@gmail.com",
        salario:300000,
        contactoEmergencia:"30055555236",
        foto:"./img/empleado.19.jpg"
    },
    {
        id:20,
        nombre:"sofia mosquera",
        cargo:"empacadora",
        telefono:"323973256",
        correo:"sofiamosquera@gmail.com",
        salario:1500000,
        contactoEmergencia:"30055553957",
        foto:"./img/empleado.20.jpg"
    },
)

//creando una referencia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos

//1. debo recorrer la base de datos del problema:
empleados.forEach(function(empleado){
    
    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")


    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto


    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo

    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono

    let correo=document.createElement("h3")
    correo.textContent=empleado.correo

    let salario=document.createElement("h3")
    salario.textContent=empleado.salario


    //se asocian las estructuras en orden logico
    
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(salario)   
})