const urso = document.getElementById('ursinho-andar');
let movingUp = false;
var imagemUrsinho = document.querySelector('#ursinho-andar')
let contarPassosUrso = 1;
let contarImagens = 0;

console.log( urso.style)
const listaImagens = [
    'assets/urso-1.png',
    'assets/urso-2.png',
    'assets/urso-3.png'
];




function moveRight(){
    if (contarPassosUrso >= 94){
        console.log('Limite da direita Atingido!!');
        contarImagens = 0
        urso.style.backgroundImage = "url(" + listaImagens[contarImagens] + ")";
    } else{
        contarImagens++;
        if (contarImagens > 2){
            contarImagens = 0
        }
        urso.style.backgroundImage = "url(" + listaImagens[contarImagens] + ")";
        urso.style.transform = 'scaleX(1)'
        contarPassosUrso += 1;
        urso.style.left = contarPassosUrso + '%';
    }
    
}

function moveLeft(){
    if (contarPassosUrso <= 0){
        contarImagens = 0
        urso.style.backgroundImage = "url(" + listaImagens[contarImagens] + ")";
        console.log('Limite da esquerda Atingido!!');
    } else{
        contarImagens++;
        if (contarImagens > 2) {
        contarImagens = 0;
        }
        contarPassosUrso -= 1;
        urso.style.left = contarPassosUrso + '%';
        urso.style.backgroundImage = "url(" + listaImagens[contarImagens] + ")";
        urso.style.transform = 'scaleX(-1)';
    
    }
    
}


function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function moveUp() {
    if (movingUp) return;

    movingUp = true;

    urso.style.top = 62 + '%';
    console.log(urso.style.top)
    await esperar(100);
    urso.style.top = 61 + '%';
    console.log(urso.style.top)
    await esperar(100); 
    urso.style.top = 60 + '%';
    await esperar(500);
    urso.style.top = 61 + '%';
    console.log(urso.style.top)
    await esperar(100);
    urso.style.top = 62 + '%';
    console.log(urso.style.top)
    await esperar(100); 
    urso.style.top = 63 + '%';

    movingUp = false;
}

function ursoAndar(event){
    if(event.key == 'd'){
        moveRight();
    } else if(event.key == 'a'){
        moveLeft();
    } else if(event.key == 'w'){
        moveUp();
    }else if(event.key == 'w' && 'd'){
        moveUp();
    }
}

window.addEventListener('keydown', ursoAndar)