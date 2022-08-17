var num = 0;

miStorage = window.localStorage;

function reiniciar(){
    num = 0;
    localStorage.setItem('miGato', num);
    alert("num ahora vale: " + num);
}

function mifuncion(){
    num = 7;
    localStorage.setItem('miGato', num);
    alert("num ahora vale: " + num);
}

function prueba(){
    var cat = localStorage.getItem('miGato')
    alert(cat);
}
