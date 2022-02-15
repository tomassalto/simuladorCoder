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
];

const infoPlacas = [
    {id:1,
    ram:"6gb",    
    precio: "150.000 ars",
    marca: 'Zotac'},

    {id:2,
    ram:"8gb",  
    precio: "145.000 ars",
    marca: "Zotac" },

    {id:3,
    ram:"8gb",  
    precio: "180.000 ars",
    marca: 'PNY' },
        
    {id:4,
    ram:"8gb",      
    precio: "210.000 ars",
    marca: 'Zotac' },
        
    {id:5,
    ram:"8gb",  
    precio: "260.000 ars",
    marca: 'Zotac' },

    {id:6,
    ram:"8gb",      
    precio: "347.000 ars",
    marca: 'MSI' },

    {id:7,
    ram:"8gb",  
    precio: "410.000 ars",
    marca: 'PNY' },

    {id:8,
    ram:"8gb",  
    precio: "582.000 ars",
    marca: 'Zotac' }
]

const contenedorPlacas = document.querySelector(".contenedor-placas");
const carritoPlacas = document.querySelector(".carrito-placas");
const rotar = document.querySelector("#tarjeta");
arrayCarritos = [];
arrayEliminar = [];

mostrarPlacas();

function mostrarPlacas(){
    
    placasStock.forEach(function (placaStock) {
        console.log(placaStock);
        
        const divPlacas = document.createElement('div');
        divPlacas.classList.add('card');

        const imagenPlacas = document.createElement('img');
        imagenPlacas.classList.add('imagen-placas');
        imagenPlacas.src = placaStock.img
        imagenPlacas.addEventListener('mouseenter', () => {
         
        imagenPlacas.classList.toggle('flipCard')
      
        
       })
                        
        const tituloPlacas = document.createElement('h3');
        tituloPlacas.textContent = placaStock.name;

        const infosPlacas = document.createElement('p');
        infosPlacas.classList.add('card');
        infosPlacas.innerText = infoPlacas[1,2,3];
        

        const botonCarrito = document.createElement('button');
        botonCarrito.classList.add('boton-carrito');
        botonCarrito.textContent = "Agregar al carrito";
        botonCarrito.onclick = () =>{
            agregarCarrito(placaStock.id)
        };

      
        divPlacas.appendChild(imagenPlacas);
        divPlacas.appendChild(tituloPlacas);
        divPlacas.appendChild(infosPlacas);
        divPlacas.appendChild(botonCarrito);
        
        
        
                
               

        contenedorPlacas.appendChild(divPlacas);
        
    });
}

function agregarCarrito(id){
    const placasAgregadas = placasStock.find(placaStock => placaStock.id === id);
    arrayCarritos.push(placasAgregadas);

    mostrarElCarrito(arrayCarritos);
    
}

function eliminarCarrito(id){
    const carritoEliminado = placasStock.find(placaStock => placaStock.id === id);
    arrayCarritos.pop(carritoEliminado);

    mostrarElCarrito(arrayCarritos);

}

function mostrarInformacion(id){

    const informacionMostrada = infoPlacas.find(infosStock => infosStock.id === id);
    
}
function mostrarElCarrito(carritos){

    carritoPlacas.innerHTML = "";
    carritos.forEach(function (carrito) {
                
        const divPlacas = document.createElement('div');
        divPlacas.classList.add('card');

        const imagenPlacas = document.createElement('img');
        imagenPlacas.classList.add('imagen-placas');
        imagenPlacas.src = carrito.img;

        const tituloPlacas = document.createElement('h3');
        tituloPlacas.textContent = carrito.name;

        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('boton-carrito');
        botonEliminar.textContent = "Eliminar del carrito";
        botonEliminar.onclick = () =>{
            eliminarCarrito(carrito.id)
        };

        divPlacas.appendChild(imagenPlacas);
        divPlacas.appendChild(tituloPlacas);
        divPlacas.appendChild(botonEliminar);
       
        carritoPlacas.appendChild(divPlacas);

     
    })
}


