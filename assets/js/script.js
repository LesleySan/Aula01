
let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');

let jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

let loop = setInterval(
    () => {

    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <60){
        pipe.style.animation = `none`;
        pipe.style.left = `${marioPosition}px`;

        mario.style.animation = `none`;
        mario.style.bottom = `${marioPosition}px`

        mario.src="/assets/img/3a66481b-e161-40ce-8e3c-8bb0f42145b4.png" ;
mario.style.width = '200px'
mario.style.marginLeft = '2px'

clearInterval(loop);
    }
},10
);

document.addEventListener('keydown', jump);


