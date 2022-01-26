function mostrarPrecios(menuOpciones){

   precio = "";

   if(menuOpciones == 1){

      precio = "El precio de GEFORCE NVIDIA 2060 es de: 145.000 ARS";

   }else if(menuOpciones == 2){

      precio = "El precio de GEFORCE NVIDIA 3060 es de: 150.000 ARS";

   }else if(menuOpciones == 3){

      precio = "El precio de GEFORCE NVIDIA 3060TI es de: 180.000 ARS";

   }else if(menuOpciones == 4){

      precio = "El precio de GEFORCE NVIDIA 3070 es de: 210.000 ARS";

   }else if(menuOpciones == 5){

      precio = "El precio de GEFORCE NVIDIA 3070TI es de: 260.000 ARS";
      
   }else if(menuOpciones == 6){

      precio = "El precio de GEFORCE NVIDIA 3080 es de: 315.000 ARS";

   }else if(menuOpciones == 7){

      precio = "El precio de GEFORCE NVIDIA 3080TI es de: 410.000 ARS";
   }
   
   return precio;
   
}

function mostrarMenu(numero){

   do{ 

      window.alert("MENU DE PLACAS DE VIDEO:"+"\n"+"\n"+
         "1. GEFORCE NVIDIA 2060"+"\n"+
         "2. GEFORCE NVIDIA 3060"+"\n"+
         "3. GEFORCE NVIDIA 3060TI"+"\n"+
         "4. GEFORCE NVIDIA 3070"+"\n"+
         "5. GEFORCE NVIDIA 3070TI"+"\n"+
         "6. GEFORCE NVIDIA 3080"+"\n"+
         "7. GEFORCE NVIDIA 3080TI");
      
      opcion = prompt("Desea ingresar una opcion?: (si/no), (*) para salir");

      if(opcion == "no"){

         break
      }   
      if(opcion == "si"){

         numero = prompt("Ingrese el numero correspondiente para ver su precio: ");  
         
         if(numero >= 1 && numero <= 7){
      
            console.log(mostrarPrecios(numero));
                     
         }
         if(numero >= 1 && numero <=7){

            opcion = prompt("Desea ver otra vez el menú? (si/no), (*) para salir");               
               if(opcion == "no" || opcion == "*"){
                  break
               }
         }else{

            window.alert("Ingrese una opcion correcta!");
            numero = prompt("Ingrese una opcion: ");
                              
         }                    
      }
         
      
   }while(opcion != "*");{
      window.alert ("Adios vuelva pronto!");
   }
}   

opcion = prompt("Desea ver el menu de compras?: (si/no)");

if(opcion == "si"){

   console.log(mostrarMenu(opcion));
   
         
}else{
   window.alert("Adios!");
   
}

