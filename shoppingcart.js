class shoppingCart {
    constructor(carrito, items){
        var subtotal = 0
        this.carrito = carrito
        this.items = items
        this.verCompra = function(grillacheckout) {
            let grilla = ""
               for (let i in this.carrito) {
                   for (let j in this.items) {
                      if (this.items[j].itemid == carrito[i]) {
                        grilla += "<tr>" +
                                  "<td>" + items[j].nombre + "</td>" +
                                  "<td>" + items[j].descripcion + "</td>" + 
                                  "<td>" + items[j].precio + "</td>" +
                                  "<td>" +
                                  "</tr>"
                        subtotal += items[j].precio                               
                      }                                      
                   }
               }
               grillacheckout.innerHTML = grilla
        }
        this.verTotales = function(grillaTotales) {
            let grilla = "<tr><td>SUBTOTAL</td><td class='right'>$ " + this.subtotal() + "</td></tr>" + 
                         "<tr><td>DESCUENTO</td><td class='right'>$ " + this.aplicoDescuento() + "</td></tr>" +
                         "<tr><td>TOTAL</td><td class='right'>$ " + this.total() + "</td></tr>" 
                         grillaTotales.innerHTML = grilla
        }
        this.subtotal = function() {
            return subtotal
        }
        this.aplicoDescuento = function() {
            switch(this.carrito.lenght) {
                case 1:
                    return (subtotal - (subtotal * 0.95))
                    break
                case 2:
                    return (subtotal - (subtotal * 0.80))
                    break 
                case 3:
                    return (subtotal - (subtotal * 0.70))
                    break 
                case 4:
                    return (subtotal - (subtotal * 0.60))
                    break
                case 5:
                    return (subtotal - (subtotal * 0.50))
                    break
                case 6:
                    return (subtotal - (subtotal * 0.40))
                    break                                                    
            }
        }
        this.total = function() {
            return (subtotal - this.aplicoDescuento())
        }
    }
}