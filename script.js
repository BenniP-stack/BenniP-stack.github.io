const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
// const vid2Div = document.querySelector(".loop1");
// const vid2 = vid2Div.querySelector("video");


//END SEC
// const section = document.querySelector('section');
// const end = section.querySelector('h1');

//SCROLL
const controller = new ScrollMagic.Controller();

//---

let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0.01;

//Scenes
let heroVideo = new ScrollMagic.Scene({
        duration: 3500,
        triggerElement: intro,
        triggerHook: 0
    })
    //.addIndicators({ name: 'VideoScroll', colorEnd: '#000000' })
    .setPin(intro)
    .addTo(controller);

//Vid Animation
heroVideo.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;
    video.currentTime = delay;
}, 33.3); //Framerate "Fix"

//------

// let loopVid = new ScrollMagic.Scene({
//         duration: 2000,
//         triggerElement: vid2Div,
//         triggerHook: 0
//     })
//     .addIndicators({ name: 'VideoScroll', colorEnd: '#000000' })
//     .setPin(vid2Div)
//     .addTo(controller);


// loopVid.on('update', e => {
//     scrollpos = e.scrollPos / 1000;
// });

// setInterval(() => {
//     delay += (scrollpos - delay) * accelAmount;
//     vid2.currentTime = delay;
// }, 41.6); //runtime:fps

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