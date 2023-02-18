// Pre-entrega2
const carrito = []

const ordenarPrecios = () => {
    autos.sort((a, b) => a.precio - b.precio)
    mostrarPrecios()
};

const mostrarPrecios = () => {
    const listaAutos = autos.map(auto => {
        return '- ' + auto.auto + ' U$D ' + auto.precio
    })
    console.log(listaAutos)
    alert('lista de vehiculos: ' + '\n\n\n' + listaAutos.join('\n'))
    comprarVehiculo(listaAutos)
};

const comprarVehiculo = (listaAutos) => {
    let autoNombre = ''
    let autoCantidad = 0
    let otroAuto = false

    do {
        autoNombre = prompt('¿Que auto desea comprar?' + '\n\n' + listaAutos.join('\n'))
        autoCantidad = parseInt(prompt('¿cuantos desea comprar?'))

        const vehiculo = autos.find(auto => auto.auto.toLowerCase() === autoNombre.toLowerCase())
        if (vehiculo) {
            agregarCompra(vehiculo, vehiculo.id, autoCantidad)
        } else {
            alert('ese vehiculo no lo tenemos')
        }

        otroAuto = confirm('Desea seguir comprando?')
    } while (otroAuto)

};

const agregarCompra = (vehiculo, autoId, autoCantidad) => {
    const autoRepetido = carrito.find(vehiculo => vehiculo.id === autoId)

    if (autoRepetido) {
        autoRepetido.cantidad += autoCantidad
    } else {
        vehiculo.cantidad += autoCantidad
        carrito.push(vehiculo)
    }
    

};

const confirmarCompra = () => {
    const listaAutos = carrito.map(producto => {
        return 'vehiculos comprados: '+producto.cantidad
    });

    const confirmar = confirm(
            +'\n\n'+listaAutos.join('\n')
            
    )

    if (confirmar) {
        finalizarCompra(listaAutos)
    } else {
        alert('adios ,')
    }
};



ordenarPrecios()
confirmarCompra()
