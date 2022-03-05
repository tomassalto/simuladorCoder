let carritoCompras = [];

const contenedorPlacas = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const lista = document.getElementById('lista');

const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');

const selecTipo = document.getElementById('selecTipo')

selecTipo.addEventListener('change', () =>{
  selecTipo.value == 'all' ?
    mostrarProductos(placasStock)

    :
  
    mostrarProductos(placasStock.filter(element => element.clave == selecTipo.value));
  

    
  
    
})



mostrarProductos(placasStock);

function mostrarProductos(){
    contenedorPlacas.innerHTML = "";
    //mostrar productos usando fetch 

const url = "./js/datos.json"

fetch(url)
.then(respuesta => respuesta.json())
.then(productos =>{

  productos.forEach(producto =>{
    let div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML +=  `<div class = "card">
                                <div class = "card-image">
                                    <img src=${producto.img}>
                                    <span class="card-title">${producto.name}</span>
                                    <a id="botonAgregar${producto.id}" class = "btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                                </div>
                                <div class = "card-content">
                                     ${producto.ram ? `<p id="problemas">Ram: ${producto.ram}</p>` : `<p id="problemas">Pulgada: ${producto.pulgada}</p>` || `<p id="problemas">Caracteristica: ${producto.caracteristica}</p>`}
                                    <p>Marca: ${producto.marca}</p>
                                    <p>$ ${producto.precio}</p>
                                </div>
                            </div>`
                            contenedorPlacas.appendChild(div);

    let btnAgregar = document.getElementById(`botonAgregar${producto.id}`);

    btnAgregar.addEventListener('click', () => {
            
        Toastify({
            text: "Agregaste exitosamente un articulo a tu carrito!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        
            agregarAlCarrito(producto.id);
    })       

  })
    // for (const producto of array) {
    //     let div = document.createElement('div');
    //     div.className = 'producto';
    //     div.innerHTML +=  `<div class = "card">
    //                             <div class = "card-image">
    //                                 <img src=${producto.img}>
    //                                 <span class="card-title">${producto.name}</span>
    //                                 <a id="botonAgregar${producto.id}" class = "btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
    //                             </div>
    //                             <div class = "card-content">
    //                                  ${producto.ram ? `<p id="problemas">Ram: ${producto.ram}</p>` : `<p id="problemas">Pulgada: ${producto.pulgada}</p>` || `<p id="problemas">Caracteristica: ${producto.caracteristica}</p>`}
    //                                 <p>Marca: ${producto.marca}</p>
    //                                 <p>$ ${producto.precio}</p>
    //                             </div>
    //                         </div>`
    //                         // ${producto.ram ? `<p id="problemas">Ram: ${producto.ram}</p>` : `<p id="problemas">Pulgada: ${producto.pulgada}</p>` || `<p id="problemas">Pulgada: ${producto.caracteristica}</p>`}
        
    //     contenedorPlacas.appendChild(div);

    //         let btnAgregar = document.getElementById(`botonAgregar${producto.id}`);

    //         btnAgregar.addEventListener('click', () => {
                   
    //             Toastify({
    //                 text: "Agregaste exitosamente un articulo a tu carrito!",
    //                 duration: 3000,
    //                 destination: "https://github.com/apvarun/toastify-js",
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "top", // `top` or `bottom`
    //                 position: "left", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #00b09b, #96c93d)",
    //                 },
    //                 onClick: function(){} // Callback after click
    //             }).showToast();
                
    //                 agregarAlCarrito(producto.id);
            
    //         });
    //  }
})
}

function agregarAlCarrito(id){
    
    let repetido = carritoCompras.find(buscar => buscar.id == id)
    if(repetido){
      //agregar cantidad si esta repetido
        repetido.cantidad = repetido.cantidad + 1;
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id="cantidad${repetido.id}">Cantidad: ${repetido.cantidad}</p>`
        actualizarCarrito();
    }else{
        document.getElementById('botoncito').removeAttribute('disabled');
        
        let productoAgregar = placasStock.find(elemento => elemento.id == id);
        carritoCompras.push(productoAgregar);
        // document.getElementById('carrito-contenedor').innerHTML = `<p>Tu carrito:</p>`      

        actualizarCarrito();
        mostrarCarrito(productoAgregar)
        
        
       
    }
        //local storage
        localStorage.setItem('carrito', JSON.stringify(carritoCompras))
   
}


function mostrarCarrito(productoAgregar){
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
       //libreria
      if(productoAgregar.cantidad == 1){
          Swal.fire({
              title: 'Estas seguro/a?',
              text: "Este articulo se removera de tu carrito!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'cancelar',
              confirmButtonText: 'Sí, remover!'
            }).then((result) => {
              if (result.isConfirmed) {
                 
                Swal.fire(
                  'Removido!',
                  'El articulo ha sido removido del articulo.',
                  'success'
                )
              }else(result.notConfirmed)
            })
          btnEliminar.parentElement.remove();    
          carritoCompras = carritoCompras.filter(item => item.id != productoAgregar.id);
          actualizarCarrito();
          localStorage.setItem('carrito', JSON.stringify(carritoCompras));
          //operador avanzado
          carritoCompras.length === 0 && document.getElementById('botoncito').setAttribute('disabled',true);              
          actualizarCarrito();
         
              
              
            
      }else{
          Swal.fire({
              title: 'Estas seguro/a?',
              text: "Este articulo se removera de tu carrito!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Sí, remover!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Removido!',
                  'El articulo ha sido removido del articulo.',
                  'success'
                )
              }else(result.notConfirmed)
            })
          productoAgregar.cantidad = productoAgregar.cantidad - 1;
          document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>`
          actualizarCarrito();
          localStorage.setItem('carrito', JSON.stringify(carritoCompras))
          //operador avanzado
          carritoCompras === 0 && document.getElementById('botoncito').setAttribute('disabled',true);

            actualizarCarrito();
            
            
            
          
      }
      
  })
}

//actualizar carrito
function actualizarCarrito(){
    contadorCarrito.innerText = carritoCompras.reduce((acc,el)=> acc + el.cantidad, 0);
    precioTotal.innerText = carritoCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0);
}
//recuperar datos del local storage
function recuperar(){
  //operador avanzado
    let recuperarLS = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(recuperarLS);

    
        recuperarLS.forEach(element =>{
           mostrarCarrito(element);
           carritoCompras.push(element)
           actualizarCarrito()
        });
       
    
}

recuperar();


// fetch('https://api.mercadolibre.com/sites/MLA/search?q=placadevideo&limit=3')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)

//      data.forEach(post => {
//       const li = document.createElement('li')
//       const {title,price} = post;

//          li.innerHTML= `<h3>${title} </h3>
//         <p>${price}</p>
//         <hr>`
    
//       lista.append(li);
//     });

//   });
// const url = "./js/datos.json"
// fetch(url)
// .then(respuesta => respuesta.json())
// .then(productos =>{

//   productos.forEach(producto =>{
//     let div = document.createElement('div');
//         div.className = 'producto';
//         div.innerHTML +=  `<div class = "card">
//                                 <div class = "card-image">
//                                     <img src=${producto.img}>
//                                     <span class="card-title">${producto.name}</span>
//                                     <a id="botonAgregar${producto.id}" class = "btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
//                                 </div>
//                                 <div class = "card-content">
//                                      ${producto.ram ? `<p id="problemas">Ram: ${producto.ram}</p>` : `<p id="problemas">Pulgada: ${producto.pulgada}</p>` || `<p id="problemas">Caracteristica: ${producto.caracteristica}</p>`}
//                                     <p>Marca: ${producto.marca}</p>
//                                     <p>$ ${producto.precio}</p>
//                                 </div>
//                             </div>`
//                             contenedorPlacas.appendChild(div);
//   })                          
// })