gsap.from("nav",{
    y:-20,
    delay:1,
    opacity:0,
    duration:1,
    stagger:1
})
gsap.from(".queen_img",{
    x:20,
    delay:1,
    opacity:0,
    duration:1,
    stagger:1
})
gsap.from(".king_img",{
    y:-20,
    delay:0.5,
    opacity:0,
    duration:1,
    stagger:1
})

gsap.from(".herotext, .counter",{
    x:-40,
    delay:1,
    opacity:0,
    duration:1,
    stagger:1
})

gsap.from(".team",{
    // opacity:0,
    duration:1,
    y:-100,
    stagger:1,
    scrollTrigger:{
        trigger:".team",
        scroller:"body",
        // markers:true
    }
})