var tl=gsap.timeline();
tl.from("#page1 hr",{
    opacity:0,
    duration:1
})
tl.from("#page1 #nav",{
    opacity:0,
    duration:1,
    stagger:2,
    y:20
})
tl.from("#page1 #content .left h4",{
    opacity:0,
    x:-90
})
tl.from("#page1 #content .left .shahzaib",{
    opacity:0,
    x:-90
})
tl.from("#page1 #content .left p",{
    opacity:0,
    x:-30,
    stagger:0.7
})
tl.from("#page1 #content .left div",{
    opacity:0,
    stagger:0.3
})
tl.from("#page1 #content .right",{
    opacity:0,
    rotate:90,
    scale:2
})
    tl.from("#page1 i",{
        opacity:0,
        y:-28,
        repeat:-1,
        yoyo:true
    })
window.onload = function() {
    gsap.utils.toArray(".page2 .top h2, .page2 .top p").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            x: -100,
            stagger: 1,
            scrollTrigger: {
                trigger: section,
                start: "top center",
                toggleActions: "play none none none",
            },
        });
    });
}
window.onload = function() {
    gsap.utils.toArray(".page2 .top h2, .page2 .top p,.page3 .bottom-code .top-div h3,.page3 .bottom-code .top-div hr,.page3 .bottom-code .top-div p").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            x: -100,
            stagger: 1,
            scrollTrigger: {
                trigger: section,
                start: "top center",
                toggleActions: "play none none none", 
            },
        });
    });
}
