let placasStock = [

    {id:1,
    name: "Nvidia Geforce 2060",
    img: '../imagenes/geforce-rtx-2060-super-ga.jpg',
    ram:"6gb",    
    precio: 150000,
    marca: 'Zotac',
    cantidad: 1},

    {id:2,
    name: "Nvidia Geforce 3060",
    img: '../imagenes/3060.jpg',
    ram:"8gb",  
    precio: 145000,
    marca: "Zotac",
    cantidad: 1},

    {id:3,
    name: "Nvidia Geforce 3060TI",
    img: '../imagenes/3060TI.jpg',
    ram:"8gb",  
    precio: 180000,
    marca: 'PNY',
    cantidad: 1},
        
    {id:4,
    name: "Nvidia Geforce 3070",
    img: '../imagenes/3070.jpg',
    ram:"8gb",      
    precio: 210000,
    marca: 'Zotac',
    cantidad: 1},
        
    {id:5,
    name: "Nvidia Geforce 3070TI",
    img: '../imagenes/3070TI.jpg',
    ram:"8gb",  
    precio: 260000,
    marca: 'Zotac',
    cantidad: 1} ,

    {id:6,
    name: "Nvidia Geforce 3080",
    img: '../imagenes/3080.jpg',
    ram:"8gb",      
    precio: 347000,
    marca: 'MSI',
    cantidad: 1},

    {id:7,
    name: "Nvidia Geforce 3080TI",
    img: '../imagenes/3080TI.jpg',
    ram:"8gb",  
    precio: 410000,
    marca: 'PNY',
    cantidad: 1},

    {id:8,
    name: "Nvidia Geforce 3090",
    img: '../imagenes/3090.jpg',
    ram:"8gb",  
    precio: 582000,
    marca: 'Zotac',
    cantidad: 1}
];

const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
      btnSubmit = document.querySelector('#btnExito'),
	  yearExpiracion = document.querySelector('#tarjeta .year');
	  ccv = document.querySelector('#tarjeta .ccv');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'imagenes/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'imagenes/mastercard.png';
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});


btnSubmit.addEventListener('click', ()=>{

    Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        text: 'Tu compra se completado correctamente!',
        
      })
})