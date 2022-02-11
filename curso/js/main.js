const placasStock = [

    {id:1,
    name: "Nvidia Geforce 2060",
    img: '../imagenes/geforce-rtx-2060-super-ga.png'},

    {id:2,
    name: "Nvidia Geforce 3060",
    img: '../imagenes/3060.jpg' },

    {id:3,
    name: "Nvidia Geforce 3060TI",
    img: '../imagenes/3060TI.jpg' },
        
    {id:4,
    name: "Nvidia Geforce 3070",
    img: '../imagenes/3070.png' },
        
    {id:5,
    name: "Nvidia Geforce 3070TI",
    img: '../imagenes/3070TI.jpg' },

    {id:6,
    name: "Nvidia Geforce 3080",
    img: '../imagenes/3080.jpg' },

    {id:7,
    name: "Nvidia Geforce 3080TI",
    img: '../imagenes/3080TI.jpg' },

    {id:8,
    name: "Nvidia Geforce 3090",
    img: '../imagenes/3090.png' }
]

const contenedorPlacas = document.querySelector(".contenedor-placas");

mostrarPlacas();

function mostrarPlacas(){
    
    placasStock.forEach(function (placaStock) {
        console.log(placaStock);
        
        const divPlacas = document.createElement('div');
        divPlacas.classList.add('card');

        const imagenPlacas = document.createElement('img');
        imagenPlacas.classList.add('imagen-placas');
        imagenPlacas.src = placaStock.img

        const tituloPlacas = document.createElement('h3');
        tituloPlacas.textContent = placaStock.name;

        const botonCarrito = document.createElement('button');
        botonCarrito.classList.add('boton-carrito');
        botonCarrito.textContent = "Agregar al carrito";
        botonCarrito.onclick = agregarCarrito;

        divPlacas.appendChild(imagenPlacas);
        divPlacas.appendChild(tituloPlacas);
        divPlacas.appendChild(botonCarrito);

        contenedorPlacas.appendChild(divPlacas);
        
    });
}

function agregarCarrito(){
    console.log("Agregaste un producto al carrito!");
}