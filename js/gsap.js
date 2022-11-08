addEventListener('DOMContentLoaded', (event) => {loadAnimation();});

function loadAnimation(){
    TweenMax.to(".stripe", 2, {
        delay: 0,
        width: "100%",
        ease: Expo.easeInOut
    })

    TweenMax.from(".galaxyPhone", 1, {
        delay: 1.0,
        opacity: 0,
        y: -1000,
        ease: Circ.easeInOut
    })

    TweenMax.from(".text-h1", 1, {
        delay: 2,
        opacity: 0,
        x: 100,
        ease: Circ.easeInOut
    })
}

function phoneAnimation1(){
    TweenMax.to("#phoneCard1", 0.5, {
        delay: 0,
        opacity: 0,
        y: 700,
        ease: Power0.easeNone
    })

    TweenMax.to("#phoneCard1", 0, {
        delay: 0.5,
        y: 700,
        opacity: 1,
    })

    TweenMax.to("#phoneCard1", 1.2, {
        delay: 0.5,
        y: 0,
        ease: Back.easeOut.config(1.15)
    })
}

function phoneAnimation2(){

    TweenMax.to("#phoneCard2", 0.5, {
        delay: 0,
        opacity: 0,
        y: 700,
        ease: Power0.easeNone
    })

    TweenMax.to("#phoneCard2", 0, {
        delay: 0.5,
        y: 700,
        opacity: 1,
    })

    TweenMax.to("#phoneCard2", 1.2, {
        delay: 0.5,
        y: 0,
        ease: Back.easeOut.config(1.15)
    })
}