var crsr = document.querySelector("#cursor");

var crsrblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+30+"px"
    crsr.style.top =dets.y+"px"
    crsrblur.style.left=dets.x -200+"px"
    crsrblur.style.top =dets.y - 200+"px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale= 3
        crsr.style.backgroundColor="transparent"
        crsr.style.border= "1px solid #fff"
        
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale= 1
        crsr.style.backgroundColor="#95c11e"
        crsr.style.border= "0px solid #95c11e"

    })
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    hright:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10px",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,

    }
})

gsap.from("#about,#about-in",{
    y:50,
    opacity:50,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about ",
        scroler:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }

})

// gsap.from(".card",{
//     scale:0.8,
    
//     opacity:0,
//     duration:1,
//     // stagger:0.4,
//     scrollTrigger:{
//         trigger:".card",
//         scroler:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 60%",
//         scrub:2
//     }

// })

gsap.from("#colon1",{
    y:-70,
    x:-20,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        satrt:"top 55%",
        end:"top 45%",
        scrub:2
    }

})
gsap.from("#colon2",{
    y:70,
    x:20,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        satrt:"top 55%",
        end:"top 45%",
        scrub:2
    }

})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        satrt:"top 75%",
        end:"top 70%",
        scrub:3
    }

})