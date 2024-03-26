let nightSky = document.getElementById('nightSky');
let starsContainer;
let ismoonthere;
let moon;

numberOfStars = 200;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStars() {
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.right = `${getRandomNumber(0, 100)}%`;
        star.style.top = `${getRandomNumber(0, 100)}%`;

        nightSky.appendChild(star);
    }
    setTimeout(recreateStars, 9999);
}

function recreateStars() {

    if(!ismoonthere){
        for (let i = 0; i < numberOfStars / 20; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.right = `${getRandomNumber(0, 100)}%`;
            star.style.top = `${getRandomNumber(0, 100)}%`;

            nightSky.appendChild(star);
        }
        setTimeout(destroyStars, 4999); 
    }
}

function destroyStars() {
    if(!ismoonthere){
        for (let i = 0; i < numberOfStars / 20; i++) {
            del = getRandomNumber(0, nightSky.childElementCount - 1);
            nightSky.removeChild(nightSky.childNodes[del]);
        }
        setTimeout(recreateStars, 9999); 
    }
}

window.onload = createStars;

function showpasswd(){
    let pass=document.getElementById('passwordIn')  
    let eye=document.getElementById('eye')
    let login=document.getElementById('login-box')
    if (pass.type === 'password'){
        nightSky.innerHTML='';
        moon=document.createElement('div');
        moon.className = 'moon';
        nightSky.appendChild(moon);
        nightSky.classList.add('paused');
        login.classList.add('paused');
        pass.type='text';
        ismoonthere=true;
    }
    else{
        ismoonthere=false;
        nightSky.removeChild(moon);
        nightSky.classList.remove('paused');
        login.classList.remove('paused');
        pass.type='password';
        createStars();
    }
    eye.src = (pass.type === 'password') ? 'eye1.png' : 'eye2.png';
}