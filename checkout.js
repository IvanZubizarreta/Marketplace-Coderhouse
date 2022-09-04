function muestroCheckout() {
    if (carrito.length === 0) {
        alert("Todavía no realizó ninguna compra.")
    } else {
        changuito = new shoppingCart(carrito, ITEMS)
        changuito.verCompra(checkout)
        changuito.verTotales(totales)
        shoppingcart.classList.remove('d-none')    
        items.classList.add('d-none')    
    }
}

function volverAlListadoDeItems() {
    shoppingcart.classList.add('d-none')    
    items.classList.remove('d-none')    
}

function confirmarCompra() {
    document.body.style.cursor  = 'wait'
    setTimeout(() => {
        carrito = []
        alert("Su compra finalizó con éxito")
        volverAlListadoDeItems()
        itemsEnCarrito()
        document.body.style.cursor  = 'default'
    }, 2500);
}