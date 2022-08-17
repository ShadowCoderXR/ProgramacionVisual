class ahorcado{
    constructor(){
        var p1 = ['c','a','b','a','l','l','o',7],
            p2 = ['l','a','g','a','r','t','o','7'],
            p3 = ['l','e','o','n','4'],
            p4 = ['a','r','m','a','d','i','l','l','o','9'],
            p5 = ['p','e','r','r','o','5'];
        this.palabras = [p1,p2,p3,p4,p5];
        console.log("funciona");
    }

    prueba(){
        var palabras1 = this.palabras[0];
        var pru1 = palabras1[0]; 
        var pru2 = palabras1[1]; 
        var pru3 = palabras1[2]; 
        var pru4 = palabras1[3]; 
        var pru5 = palabras1[4]; 
        var pru6 = palabras1[5]; 
        var pru7 = palabras1[6]; 
        alert("soy un " + pru1 + pru2 + pru3 + pru4 + pru5 + pru6 + pru7);
        console.log("funciona");
    }
}