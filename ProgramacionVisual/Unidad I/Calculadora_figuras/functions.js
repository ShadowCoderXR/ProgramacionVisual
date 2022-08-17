function cuadrado (n1, n2) {
    let area = n1 * n2;
    return area;
}

function rectangulo (n1, n2) {
    let area = n1 * n2;
    return area;
}

function triangulo (n1, n2) {
    let area = (n1 * n2)/2;
    return area;
}

function figuraCalcular(opc, n1, n2) {
    opc = parseInt(opc);
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    if(opc==1) {
        return cuadrado(n1, n2);
    } else {
        if(opc==2) {
            return rectangulo(n1, n2);
        } else {
            return triangulo(n1, n2);
        }
    }
}