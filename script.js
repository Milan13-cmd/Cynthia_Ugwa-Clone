// smooth scrolling
//gsap
//scrolltrigger
//el mean top level elmemet

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: -10,
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut,
    })

    .to(".boundinglm",{
        y: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2
    })
    .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

var timeout;

function cirleChaptakaro(){
    // define default scale value

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets){
       clearTimeout(timeout);
        xscale  =  gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale =  gsap.utils.clamp(.8,1.2, dets.clientY - yprev);
    
        xprev = dets.clientX;
        yprev = dets.clientY;
        
        circleMouseFollower(xscale,yscale);
      timeout = setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100)
    });
}
cirleChaptakaro();


function circleMouseFollower(xscale,yscale){
   window.addEventListener("mousemove", function(dets){
     document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
   })
}
circleMouseFollower();
firstPageAnim();


// select three elem and add movemove and when mousemove define where is mouse x,y position.should image when it enter the elem

document.querySelectorAll(".elem").forEach(function(ele){
    var rotate = 0;
    var diffrot = 0;
    
    ele.addEventListener("mouseleave", function(dets){
        gsap.to(ele.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration: 0.5
            
      
        });
       
    });


    ele.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - ele.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(ele.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate :gsap.utils.clamp(-20, 20 ,diffrot * 0.8),
        });
        console.log(dets.clientX, dets.clientY);
    
    });
});
