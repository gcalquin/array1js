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
    console.log(nuevoProducto)
    agregarArray();
}

var Productos = [];

function agregarArray(){
    Productos.push(nuevoProducto)
    console.log(Productos)
}



main();
