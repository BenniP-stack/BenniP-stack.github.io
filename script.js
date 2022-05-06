const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//END SEC
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLL
const controller = new ScrollMagic.Controller();

//Scenes
let heroVideo = new ScrollMagic.Scene({
        duration: 3500,
        triggerElement: intro,
        triggerHook: 0
    })
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Vid Animation
let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

heroVideo.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;
    video.currentTime = delay;
}, 33.3); //Framerate "Fix"


//Text animation
const textAnim = gsap.fromTo(text, 2, { opacity: 1 }, { opacity: 0 });

let heroText = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(textAnim)
    .addTo(controller);

let test1 = new ScrollMagic.Scene({
        triggerElement: '#main'
    })
    .setClassToggle('.render', 'fade-in')
    .addTo(controller);