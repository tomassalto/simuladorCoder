let carritoCompras = [];

const contenedorPlacas = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');

const selecTipo = document.getElementById('selecTipo')

mostrarProductos(placasStock);

function mostrarProductos(array){

    for (const producto of array) {
        let div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML +=  `<div class = "card">
                                <div class = "card-image">
                                    <img src=${producto.img}>
                                    <span class="card-title">${producto.name}</span>
                                    <a id="botonAgregar${producto.id}" class = "btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                                </div>
                                <div class = "card-content">
                                    <p>Ram: ${producto.ram}</p>
                                    <p>Marca: ${producto.marca}</p>
                                    <p>$ ${producto.precio}</p>
                                </div>
                            </div>`

        contenedorPlacas.appendChild(div);

            let btnAgregar = document.getElementById(`botonAgregar${producto.id}`);

            btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(producto.id);
            });
     }
}

function agregarAlCarrito(id){

    let repetido = carritoCompras.find(buscar => buscar.id == id)
    if(repetido){
        repetido.cantidad = repetido.cantidad + 1;
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id="cantidad${repetido.id}">Cantidad: ${repetido.cantidad}</p>`
        actualizarCarrito();
    }else{

        let productoAgregar = placasStock.find(elemento => elemento.id == id);
        console.log(productoAgregar);
        carritoCompras.push(productoAgregar);
        actualizarCarrito();
        
        let div = document.createElement('div');
        div.className = 'productoEnCarrito';
        div.innerHTML =     `<p>${productoAgregar.name}</p>
                            <p>Precio: $${productoAgregar.precio}</p>
                            <p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>
                            <button id="btnEliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                            </div>`
    
        contenedorCarrito.appendChild(div);
    
        let btnEliminar = document.getElementById(`btnEliminar${productoAgregar.id}`)

        btnEliminar.addEventListener('click', ()=>{
            if(productoAgregar.cantidad == 1){
                btnEliminar.parentElement.remove();    
                carritoCompras = carritoCompras.filter(item => item.id != productoAgregar.id);
                actualizarCarrito();
            }else{
                productoAgregar.cantidad = productoAgregar.cantidad - 1;
                document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>`
                actualizarCarrito();
            }
            
        })
    }

        localStorage.setItem('carrito', JSON.stringify(carritoCompras))
   
}


function actualizarCarrito(){
    contadorCarrito.innerText = carritoCompras.reduce((acc,el)=> acc + el.cantidad, 0);
    precioTotal.innerText = carritoCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0);
}

function recuperar(){
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'));
    console.log(recuperarLS);

    if(recuperarLS){
        recuperarLS.forEach(element =>{
            agregarAlCarrito(element.id);
        });
       
    }
}

recuperar();