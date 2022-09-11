let opcion=0;

while (opcion <= 2) {
    // Menu //
    console.log("Menu");
    console.log("----");
    console.log("1. Ingresar Producto");
    console.log("2. Mostrar productos");
    opcion = parseInt(prompt("Ingrese Opción: "));

    if (opcion == 1){
        main()
      }

    if (opcion == 2){
      mostrar();
    }
    
    if (opcion == 3){
        alert("Adios");
       break
     }
 
     if (opcion < 1 && opcion > 3){
       alert("Ingrese opción correcta (1..2)...")

}