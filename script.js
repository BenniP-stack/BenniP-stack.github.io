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
        duration: 1500,
        triggerElement: intro,
        triggerHook: 0
    })
    //.addIndicators({ name: 'VideoScroll', colorEnd: '#000000' })
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


//parallax timeline animation
// let timeline = new TimelineMax();

// timeline.to(".rock", 5, { y: -300 })
//     .to(".girl1", 5, { y: -200 }, "-=5")
//     .fromTo(".bg1", { y: -65 }, { y: 0, duration: 5 }, "-=5")
//     .to(".content", 5, { top: "0%" }, "-=5")
//     .to(".bg1", { height: "100vh" })
//     .to(".girl1", { height: "100vh" })
//     .to(".rock", { height: "100vh" })
//     .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
//     .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 })


// // let scene = new ScrollMagic.Scene({
// //         triggerElement: "section",
// //         duration: "250%",
// //         triggerHook: 0,
// //     })
// //     // .addIndicators({ name: "ParaScroll", colorEnd: "#000000" })
// //     .setTween(timeline)
// //     .setPin("section")
// //     .addTo(controller);