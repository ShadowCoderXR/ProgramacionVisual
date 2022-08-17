var cont = 0;
miStorage = window.localStorage;
var conta = localStorage.getItem('prueba');

function monetizar(){
    cont++;
    document.getElementById("monedas").textContent="Numero de monedas: " + cont;

}

function guardar(){
    localStorage.setItem('prueba', cont);
    alert("Monedas insertadas: " + conta);
}

////////////////////////////////////////////////////////////////

function monetizar2(A){

    document.getElementById("monedas2").textContent="Monedas restantes: " + A;
}

function contador(){
    if (conta == 0){
        for(i=1;i<11;i++){
            var jiji = document.getElementById('button'+i);
            jiji.disabled = true; 
        } 

    }
}

function rock1(){
    document.getElementById('portada')
    .src="pictures/portadas/1-MyChemicalRomance.jpg"
    document.getElementById('audio')
    .src="audio/1-Helena.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock2(){
    document.getElementById('portada')
    .src="pictures/portadas/2-BohemianRhapsody.jpg";
    document.getElementById('audio')
    .src="audio/2-BohemianRhapsody.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock3(){
    document.getElementById('portada')
    .src="pictures/portadas/3-Nirvana.jpg"
    document.getElementById('audio')
    .src="audio/3-SmellsLikeSpirit.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock4(){
    document.getElementById('portada')
    .src="pictures/portadas/4-GreenDay.jpg";
    document.getElementById('audio')
    .src="audio/4-AmericanIdiot.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock5(){
    document.getElementById('portada')
    .src="pictures/portadas/5-Aerosmith.jpg"
    document.getElementById('audio')
    .src="audio/5-DreamOn.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock6(){
    document.getElementById('portada')
    .src="pictures/portadas/6-Oasis.jpg"
    document.getElementById('audio')
    .src="audio/6-Wonderwall.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock7(){
    document.getElementById('portada')
    .src="pictures/portadas/7-BonJovi.jpg"
    document.getElementById('audio')
    .src="audio/7-ItsMyLife.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock8(){
    document.getElementById('portada')
    .src="pictures/portadas/8-REM.jpg"
    document.getElementById('audio')
    .src="audio/8-LosingMyReligion.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock9(){
    document.getElementById('portada')
    .src="pictures/portadas/9-Audioslave.jpg"
    document.getElementById('audio')
    .src="audio/9-LikeAStone.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

function rock10(){
    document.getElementById('portada')
    .src="pictures/portadas/10-Muse.jpg"
    document.getElementById('audio')
    .src="audio/10-Uprising.mp3"
    conta--;
    contador()
    monetizar2(conta)
}

