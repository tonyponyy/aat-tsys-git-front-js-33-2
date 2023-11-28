moneda = prompt("A que quieres convertir los euros ? 1->libras 2->dolares 3--> yenes")
cantidad = prompt("Que cantidad ?")

let convertir =()=> {
    res = 0;
    switch (parseInt(moneda)) {
        case 1:
        res = cantidad / 0.86
        moneda = "libras"
        break;
        case 2:
            res = cantidad / 1.2861
            moneda = "dolares"
        break;
        case 3:
            res = cantidad / 129.852
            moneda = "yenes"
        break;
    default:
        res = 0
        break;
}
console.log(cantidad+"€ son "+res+" "+moneda)
}

convertir();