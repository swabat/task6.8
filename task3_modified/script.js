const trafficLightEl_1 = document.querySelector('#trafficLight1');
const trafficLightEl_2 = document.querySelector('#trafficLight2');
const trafficLightEl_3 = document.querySelector('#trafficLight3');
backgroundBlack = (trafficLightEl) => (trafficLightEl).style.background = ('black');


function makeGreen() {
    trafficLightEl_1.style.background = ('green');
    backgroundBlack(trafficLightEl_2);
    backgroundBlack(trafficLightEl_3);
}

function makeYellow() {
    trafficLightEl_2.style.background = ('yellow');
    backgroundBlack(trafficLightEl_1);
    backgroundBlack(trafficLightEl_3);
}

function makeRed() {
    trafficLightEl_3.style.background = ('red');
    backgroundBlack(trafficLightEl_1);
    backgroundBlack(trafficLightEl_2);
}


trafficLightEl_1.addEventListener('click', makeGreen);
trafficLightEl_2.addEventListener('click', makeYellow);
trafficLightEl_3.addEventListener('click', makeRed);



