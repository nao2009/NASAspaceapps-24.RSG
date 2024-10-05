// Setting up GSAP and targeting elements for animation
const content = document.querySelector(".content");
const arrowEl = document.querySelector(".arrow-animated");

// Timeline for scrolling animation
gsap.timeline({
    scrollTrigger: {
        trigger: ".page", // Targeting the page
        scrub: true, // Syncs animations with the scroll
        start: "0% 0%", // Start animation when scroll reaches the top
        end: "150% 100%", // End when the scroll reaches the bottom
    },
})


    // Fade out the arrow as you scroll
    .to(arrowEl, {
        duration: .05,
        opacity: 0
    }, 0)

    // Horizontal movement of content as you scroll
    .fromTo(content, {
        xPercent: 0
    }, {
        xPercent: -79.5,
        easy: "none"
    }, 0);
    //ball animation--------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".page",
        scrub: true,
        start: "0% 0%",
        end: "100% 100%",
      },
    })
    .to(".ball", {
      x: "+=1000", // move the ball 1000px to the right
      rotation: 720, // rotate the ball 360 degrees
      ease: "none",
      duration: 1,
    });

        
// Trigger for adjusting GSAP timelines on window resize
window.addEventListener("resize", () => {
    ScrollTrigger.refresh(); // Refreshes scroll positions on resize
});
gsap.timeline({
    scrollTrigger: {
        trigger: ".page",  // The scrollable area
        scrub: true,       // Links animation to the scroll
        start: "0% 0%",    // When the scroll starts
        end: "100% 100%",  // When the scroll ends
    },
})

window.addEventListener('scroll', function() {
    const icon = document.querySelector('.scroll-icon');
    if (window.scrollY > 100) {
      icon.style.opacity = 1; // Show icon
    } else {
      icon.style.opacity = 0.5; // Fade icon
    }
  });
  
