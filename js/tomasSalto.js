// function mostrarPrecios(menuOpciones){
     
//    switch(menuOpciones){

//       case 1:
//        console.log("El precio de GEFORCE NVIDIA 2060 es de: 145.000 ARS");
//        break;

//       case 2:
//        console.log("El precio de GEFORCE NVIDIA 3060 es de: 150.000 ARS");
//        break;
//       case 3:
//        console.log("El precio de GEFORCE NVIDIA 3060TI es de: 180.000 ARS");
//        break;

//       case 4:
//        console.log("El precio de GEFORCE NVIDIA 3070 es de: 210.000 ARS");
//        break;

//        case 5:
//        console.log("El precio de GEFORCE NVIDIA 3070TI es de: 260.000 ARS");
//        break;

//        case 6:
//        console.log("El precio de GEFORCE NVIDIA 3080 es de: 315.000 ARS");
//        break;

//        case 7:
//        console.log("El precio de GEFORCE NVIDIA 3080TI es de: 410.000 ARS");
//        break;
       
//        default:
//           console.log("Error!");
//           break; 
//    }
        
// }

function mostrarMenu(numero){

   do{ 
      
      opcion = prompt("Desea ingresar una opcion?: ('si'), ('no' o '*') para salir");

      if(opcion == "no"){

         break;
      }   
      if(opcion == "si"){

         numero = parseInt(prompt("Ingrese el numero correspondiente para ver las caracteristicas del producto: "+"\n"+"\n"+
         "MENU DE PLACAS DE VIDEO:"+"\n"+"\n"+
         "1. GEFORCE NVIDIA 2060"+"\n"+
         "2. GEFORCE NVIDIA 3060"+"\n"+
         "3. GEFORCE NVIDIA 3060TI"+"\n"+
         "4. GEFORCE NVIDIA 3070"+"\n"+
         "5. GEFORCE NVIDIA 3070TI"+"\n"+
         "6. GEFORCE NVIDIA 3080"+"\n"+
         "7. GEFORCE NVIDIA 3080TI"));  
         
         if(numero >= 1 && numero <= 7){
      
            mostrarDatos(numero);
                     
         } 
         else{

            window.alert("Ingrese una opcion correcta!");
            
                              
         }                    
      }
         
      
   }while(opcion != "*");{
      window.alert ("Adios vuelva pronto!");
   }
}   

//objetos

// const placaDeVideo1 = {

//    nombre : "Nvidia Geforce 2060",
//    ram : "8gb",
//    precio : "145.000 ars",

// }

// console.log (placaDeVideo1);
// console.log (placaDeVideo1.nombre);
// console.log (placaDeVideo1.ram);
// console.log (placaDeVideo1.precio);

// console.log (placaDeVideo1["nombre"]);
// console.log (placaDeVideo1["ram"]);
// console.log (placaDeVideo1["precio"]);

// placaDeVideo1.marca = "Zotac";
// console.log(placaDeVideo1.marca);

// function placaDeVideo(nombre, ram, precio){

//    this.nombre = nombre;
//    this.ram = ram;
//    this.precio = precio;
// }

// const placaDeVideo1 = new placaDeVideo("Nvidia Geforce 2060","8GB","145.000 ARS");
// console.log(placaDeVideo1);
// console.log(placaDeVideo1.nombre);
// console.log(placaDeVideo1.ram);
// console.log(placaDeVideo1.precio);

function mostrarDatos(menuOpciones){

   switch(menuOpciones){

      case 1:
       console.log(placaDeVideo1);
       break;

      case 2:
       console.log(placaDeVideo2);
       break;
      case 3:
       console.log(placaDeVideo3);
       break;

      case 4:
       console.log(placaDeVideo4);
       break;

       case 5:
       console.log(placaDeVideo5);
       break;

       case 6:
       console.log(placaDeVideo6);
       break;

       case 7:
       console.log(placaDeVideo7);
       break;
       
       default:
          console.log("Error!");
          break; 
   }
}

class placaDeVideo{

   constructor(nombre, ram, precio, marca){

      this.nombre = nombre;
      this.ram = ram;
      this.precio = precio;
      this.marca = marca;
   }
}

const placaDeVideo1 = new placaDeVideo ("Nvidia Geforce 2060","6GB","150.000 ars","Zotac" );

const placaDeVideo2 = new placaDeVideo ("Nvidia Geforce 3060","12GB","145.000 ars","Zotac");

const placaDeVideo3 = new placaDeVideo ("Nvidia Geforce 3060TI","8GB","180.000 ars","PNY");

const placaDeVideo4 = new placaDeVideo ("Nvidia Geforce 3070","8GB","210.000 ars","Zotac");

const placaDeVideo5 = new placaDeVideo ("Nvidia Geforce 3070TI","8GB","260.000 ars","Zotac");

const placaDeVideo6 = new placaDeVideo ("Nvidia Geforce 3080","10GB","347.000 ars","MSI");

const placaDeVideo7 = new placaDeVideo ("Nvidia Geforce 3080TI","12GB","410.000 ars","PYN");

opcion = prompt("Desea ver el menu de compras?: (si/no)");

if(opcion == "si"){
   
   window.alert("MENU DE PLACAS DE VIDEO:"+"\n"+"\n"+
   "1. GEFORCE NVIDIA 2060"+"\n"+
   "2. GEFORCE NVIDIA 3060"+"\n"+
   "3. GEFORCE NVIDIA 3060TI"+"\n"+
   "4. GEFORCE NVIDIA 3070"+"\n"+
   "5. GEFORCE NVIDIA 3070TI"+"\n"+
   "6. GEFORCE NVIDIA 3080"+"\n"+
   "7. GEFORCE NVIDIA 3080TI");

   mostrarMenu(opcion);
   
         
}else{
   window.alert("Adios!");
   
}

