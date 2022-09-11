alert("inicio")


function main(){
    capturar();
}

function capturar(){
    function Producto(nombre, stock, precio){
        this.nombre=nombre;
        this.stock=stock;
        this.precio=precio;
    }

    let nombreCapturado = prompt("Ingrese nombre del Producto: ")
    let stockCapturado = parseInt(prompt("Ingrese stock de "+ nombreCapturado + ":"));
    let precioCapturado = parseFloat(prompt("Ingrese precio de "+ nombreCapturado + ":"));

    nuevoProducto = new Producto(nombreCapturado, stockCapturado, precioCapturado)
    //console.log(nuevoProducto)
    agregarArray();
}

var Productos = [];

function agregarArray(){
    Productos.push(nuevoProducto)
    //console.log(Productos)
}


function mostrar(){
    console.log("-Los productos ingresados son:")
    Productos.forEach(i => console.log(i))  
}


let opcion=0;

while (opcion <= 2) {
    // Menu //
    console.log("Menu");
    console.log("----");
    console.log("1. Ingresar Producto");
    console.log("2. Mostrar productos");
    console.log("3. Salir");
    opcion = parseInt(prompt("Ingrese Opción: "));

    if (opcion == 1){
        main();
      }

    if (opcion == 2){
      mostrar();
    }
    
    if (opcion == 3){
        alert("Adios");
       break
     }
 

}