var carrito = []
var changuito = ""
let items = document.getElementById("items")
let grilladeitems = document.getElementById("grilladeitems")
let itemscarrito = document.getElementById("itemscarrito")
let checkout = document.getElementById("checkout")
let totales = document.getElementById("totales")

function cargoItems(grilla) {
    let filas = "<tr><td>No hay items para mostrar. Por favor, intente de nuevo más tarde.</td></tr>"
        if (ITEMS.length > 0) {
            filas = ""
            for (let i in ITEMS) {
                            filas += "<tr>" +
                            "<td>" + ITEMS[i].nombre + "</td>" +
                            "<td>" + ITEMS[i].descripcion + "</td>" + 
                            "<td>$" + ITEMS[i].precio + "</td>" +                           
                            "<td><button class='btn btn-outline-success' onclick='agregarItem(" + ITEMS[i].itemid + ")'>AGREGAR AL CARRITO</button></td>"
                            "</tr>"
                        }
                                
                }
        grilla.innerHTML = filas
        itemsEnCarrito()
    }

document.body.onload = cargoItems(grilladeitems)

function itemsEnCarrito() {
    let leyendacarrito = "TOTAL DE ITEMS EN SU CARRITO: "
        document.getElementById("itemscarrito").innerText = leyendacarrito + carrito.length
}

function agregarItem(itemid) {
    let existe = false
        for (let i in carrito) { //el item ya fue agregado
            if (carrito[i] == itemid) {
                alert("No puede agregar más de una vez el mismo producto.")
                existe = true
                break
            }
        }
        if (existe == false) { //lo puedo agregar
            carrito.push(itemid)
            alert("Gracias por comprar nuestro producto.")
        }
        itemsEnCarrito()
}