pulgada = "";
let placasStock = [
    {id:1, name: "Nvidia Geforce 2060", img: './imagenes/geforce-rtx-2060-super-ga.jpg', ram:"6gb", precio: 150000, marca: 'Zotac', cantidad: 1, clave: "p" },
    {id:2, name: "Nvidia Geforce 3060", img: './imagenes/3060.jpg', ram:"8gb",precio: 145000, marca: "Zotac", cantidad: 1, clave: "p" },
    {id:3, name: "Nvidia Geforce 3060TI", img: './imagenes/3060TI.jpg', ram:"8gb", precio: 167000, marca: 'PNY', cantidad: 1, clave: "p" },
    {id:4, name: "Nvidia Geforce 3070", img: './imagenes/3070.jpg', ram:"8gb", precio: 210000, marca: 'Zotac', cantidad: 1, clave: "p" },
    {id:5, name: "Nvidia Geforce 3070TI", img: './imagenes/3070TI.jpg', ram:"8gb", precio: 260000, marca: 'Zotac', cantidad: 1, clave: "p" },
	{id:6, name: "Nvidia Geforce 3080", img: './imagenes/3080.jpg', ram:"8gb", precio: 347000, marca: 'MSI', cantidad: 1, clave: "p" },
    {id:7, name: "Nvidia Geforce 3080TI", img: './imagenes/3080TI.jpg', ram:"8gb", precio: 410000, marca: 'PNY', cantidad: 1, clave: "p" },
    {id:8, name: "Nvidia Geforce 3090", img: './imagenes/3090.jpg', ram:"8gb", precio: 582000, marca: 'Zotac', cantidad: 1, clave: "p" },

	{id:9,
	name: "Monitor 144hz",
	img: './imagenes/monitorjpg.jpg',
	precio: 53000,
	marca:'BenQ',
	cantidad: 1,
	pulgada: 26,
	clave: "m",  },

	{id:10, name: "Monitor 20MNK400H", img: './imagenes/lg20.jpg', pulgada: "20", precio: 24000, marca:'LG', cantidad: 1, clave: "m"  },
	{id:11, name: "Monitor T350H FHD", img: './imagenes/monitor2275.jpg', pulgada: 22, precio: 26000, marca:'Samsung', cantidad: 1, clave: "m"  },
	{id:12, name: "Monitor 22MN430H-B", img: './imagenes/samsung24curvo.jpg', pulgada: 24, precio: 27160, marca:'Samsung', cantidad: 1, clave: "m"  },
	{id:13, name: "Monitor FULL HD 144hz", img: './imagenes/lg27144.jpg', pulgada: 27, precio: 62590, marca:'LG', cantidad: 1, clave: "m"  },
	{id:14, name: "Monitor XG2405", img: './imagenes/viewsonic27.jpg', pulgada: 27, precio: 67200, marca:'ViewSonic', cantidad: 1, clave: "m"  },
	{id:15, name: "Monitor 32GN500", img: './imagenes/ultragear.jpg', pulgada: 32, precio: 75830, marca:'UltraGear', cantidad: 1, clave: "m"  },
	{id:16, name: "Monitor 4K XG3220", img: './imagenes/4kviewsonic.jpg', pulgada: 32, precio: 122000, marca:'ViewSonic', cantidad: 1, clave: "m"}

];


datosPersonales = [];

const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  numero = document.querySelector('#numerito'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
      btnSubmit = document.querySelector('#btnExito'),
	  nombre = document.querySelector('#nombres'),
	  nombrecito = document.querySelector('#inputNombre'),
	
	  formularioNumero = document.querySelector('#inputNumero'),
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
	}else{
		// numeroTarjeta.classList.toggle(arr[0]);
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
	datosPersonales.push(formulario.inputCCV.value)
});


btnSubmit.addEventListener('click', ()=>{

	guardarDatos();

    Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        text: 'Tu compra se completado correctamente!',
        
      })
})

function guardarDatos(){

	var arrayInput = new Array();
	var inputsValue = document.getElementsByClassName('dataInput');
	nameValue = [].map.call(inputsValue,function(dataInput){
		arrayInput.push(dataInput.value);
		console.log(arrayInput)
	});

	localStorage.setItem('datos', JSON.stringify(arrayInput));
}
 
function recuperarDatos(){
	//operador avanzado
	let recuperarInfo = JSON.parse(localStorage.getItem('datos')) || [];
	console.log(recuperarInfo);
	if(sessionStorage.getItem("autosave")){
		recuperarInfo.value = sessionStorage.getItem("autosave");
	}

	// recuperarInfo.forEach(element => {
	// 	document.getElementById('inputNumero').value = `${element}`
	// });
	for (const i of recuperarInfo) {
		console.log(i);
		numeroTarjeta.textContent = document.getElementById('inputNumero').value = `${recuperarInfo[0]}`
		nombreTarjeta.textContent = document.getElementById('inputNombre').value = `${recuperarInfo[1]}`
		firma.textContent = nombreTarjeta.textContent;
		mesExpiracion.textContent = document.getElementById('selectMes').value = `${recuperarInfo[2]}`
		yearExpiracion.textContent = document.getElementById('selectYear').value = `${recuperarInfo[3]}`
		ccv.textContent = document.getElementById('inputCCV').value = `${recuperarInfo[4]}`
	}
		// console.log(element);
		// document.getElementById('inputNumero').value = `${element[3]}` 
	};
	
	


	// if(recuperarInfo){
		
	// 	rellenarDatos(recuperarInfo);
		
	// }

recuperarDatos();

function rellenarDatos(arr){
    
	
	document.getElementById('numerito').innerHTML = `<input type="text" value="${arr[0]}" id="inputNumero" class="dataInput" maxlength="19" autocomplete="off"> `
	document.getElementById('nombres').innerHTML = `<input type="text" value="${arr[1]}" id="inputNombre" class="dataInput" maxlength="19" autocomplete="off"> `
	
	
	


	
}