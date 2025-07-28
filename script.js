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
            Stagger: .2
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


        function circleMouseFollower(xscale, yscale) {
            window.addEventListener("mousemove", function (dets) {
                document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

            });

        }

    }
        // firstPageAnim()
        // circleChaptaKaro()
        // circleMouseFollower()




        //teeno element select - mouse move- find out mouse kaha hai - means x and y position needed
        // now with the help of x-y position view image then rotate and change the speed of image wrt to mouse

document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (details) {
        console.log(details);
        
    });

    elem.addEventListener("mouseleave", function () {
        elem.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

});