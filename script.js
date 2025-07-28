function clamp(min, max, value) {
    return Math.max(min, Math.min(max, value));
}


window.addEventListener("load", () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    console.log("Locomotive is working ✅");
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: `-10`,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2
        })
        .from("#herofather", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}
// define defalt scale value

let timeout ;

    function circleChaptaKaro() {
        let xscale = 1;
        let yscale = 1;


        let xprev = 0;
        let yprev = 0;

        window.addEventListener("mousemove", function (dets) {
            clearTimeout(timeout);
            const diffX = Math.abs(dets.clientX - xprev);
            const diffY = Math.abs(dets.clientY - yprev);
            //  xscale= gsap.util.clamp(0.8,1.2, dets.clientX - xprev);
            //  yscale= gsap.util.clamp(0.8,1.2,  dets.clientY - yprev); 

            xscale = clamp(0.8, 1.2, diffX / 20);
            yscale = clamp(0.8, 1.2, diffY / 20);


            xprev = dets.clientX;
            yprev = dets.clientY;


            circleMouseFollower(xscale, yscale);

            timeout = setTimeout(function () {
                document.querySelector
                ("#minicircle")
                .style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

            }, 100);

        });
    }


        function circleMouseFollower(xscale, yscale) {
            window.addEventListener("mousemove", function (dets) {
                document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

            });

        }

    
       

circleChaptaKaro();
circleMouseFollower();
firstPageAnim();
// this is for the circle to follow the mouse


        //teeno element select - mouse move- find out mouse kaha hai - means x and y position needed
        // now with the help of x-y position view image then rotate and change the speed of image wrt to mouse
document.querySelectorAll(".elem").forEach((elem) => {
var rotate = 0;
var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
     gsap.to(elem.querySelector("img"), {
      opacity: 0,       
        ease: Power3,
        duration: 0.5,
    } );
});
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;

      gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      
      top: `${diff}px`,
      left: `${dets.clientX}px`,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });

});
  