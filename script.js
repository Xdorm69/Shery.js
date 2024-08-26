
function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init();

//GSAP
gsap.from(".nlink" , {
    y: 50,
    stagger:.1,
    opacity:0,
    duration:.5,
}) 

gsap.from(".susimagewrapper" , {
    y: 50,
    opacity:0,
    duration:1,
})

gsap.from('.anim2' , {
    y:50,
    opacity:0,
    duration:1,
    ease: Expo,
    stagger:0.2,

})
//ScrollTrigger
gsap.from(".txtanim" , {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".txtanim",
        scroller:".main",
        start:"top 60%",
        end: "top 30%",
        scrub:2,
    }

})
gsap.from(".txtanim2" , {
    x:150,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".txtanim2",
        scroller:".main",
        start:"top 80%",
        end: "top 40%",
        scrub:2,
    }

})

gsap.from(".txtanim3" , {
    x:150,
    opacity:0,
    duration:1,
    stagger:.2,
    scrollTrigger:{
        trigger:".txtanim3",
        scroller:".main",
        start:"top 80%",
        end: "top 40%",
        scrub:2,
    }

})



//SheryJS
Shery.textAnimate(".headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

Shery.imageEffect(".imgntext img" , {
    style: 4,
    config: {"uColor":{"value":false},"uSpeed":{"value":1.48,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.76,"range":[0,5]},"uFrequency":{"value":4.81,"range":[0,10]},"geoVertex":{"range":[1,64],"value":5.33},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999627471003},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect(".imgeff img" , {
    style: 5,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.73,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666997803569},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},    
})

gsap.from(".imgntext img" , {
    y:70,
    opacity:0,
    duration:1,
    ease:Expo,
})

Shery.imageEffect(".bimg" , {
    style:5,
    config: {"a":{"value":0.46,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0268993926471213},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":44}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":19.08,"range":[0,100]}},
    gooey:true,
    
}) 

//future btns animate
var stat = 0;
futureBtn = document.querySelector(".future button");
bgVid = document.querySelector(".future video");
ftxt = document.querySelector(".ftext h1")
futureBtn.addEventListener("click" , ()=>{
    if(stat == 1)
    {
        bgVid.style.opacity= "1";
        ftxt.style.color = 'white';
        stat = 0;
    }
    else{
        bgVid.style.opacity = "0";
        ftxt.style.color = 'black';
        stat = 1;
    }
}) 
