function saludarUsuario(nombre) {
    alert("Bienvenido a nuestra tienda online " + nombre + ".");
}

function mostrarInformacionProducto(tipoProducto) {
    let precio;
if (tipoProducto === "remera") {
        precio = 3000;
    } else if (tipoProducto === "pantalones") {
        precio = 6000;
    }

    let confirmacionCompra = confirm("Usted eligió " + tipoProducto + ". Su precio es de $" + precio + ". ¿Desea comprar este artículo?");
    return confirmacionCompra;
}

function pedirDireccionEnvio() {
    let direccionEnvio;
    while (!(direccionEnvio = prompt("Paso 1: Ingrese su dirección para poder realizar el envío del pedido"))) {
        alert("Por favor, ingrese una dirección válida.");
    }
    return direccionEnvio;
}

function mostrarInformacionEnvio(direccionEnvio) {
    alert("Su artículo será enviado a: " + direccionEnvio);
}

function agradecerPorCompra() {
    alert("Muchas gracias por su compra.");
}

// Preguntando el nombre al usuario
let nombreUsuario = prompt("Por favor, ingrese su nombre:");

// Saludando al usuario
saludarUsuario(nombreUsuario);

// Preguntando la categoría del producto a elegir
let categoriaElegida = prompt("¿Qué desea comprar? Elija la opción 1 si son remeras u opción 2 si son pantalones.");

// Validar la categoría elegida
if (categoriaElegida === "1") {
    // Mostrar información sobre la remera
    let confirmacionCompraRemera = mostrarInformacionProducto("remera");
    
if (confirmacionCompraRemera) {
        // Pedir la dirección para el envío
        let direccionEnvioRemera = pedirDireccionEnvio();
        
        // Mostrar información sobre el envío
        mostrarInformacionEnvio(direccionEnvioRemera);
        
        // Agradecer por la compra
        agradecerPorCompra();
    } else {
        // El usuario canceló la compra
        alert("Muchas gracias por su visita");
    }
} else if (categoriaElegida === "2") {
    // Mostrar información sobre los pantalones
    let confirmacionCompraPantalones = mostrarInformacionProducto("pantalones");
    
if (confirmacionCompraPantalones) {
        // Pedir la dirección para el envío
        let direccionEnvioPantalones = pedirDireccionEnvio();
        
        // Mostrar información sobre el envío
        mostrarInformacionEnvio(direccionEnvioPantalones);
        
        // Agradecer por la compra
        agradecerPorCompra();
    } else {
        // El usuario canceló la compra
        alert("Muchas gracias por su visita");
    }
} else {
    // Opción no válida
    alert("Opción no válida. Muchas gracias por su visita");
}