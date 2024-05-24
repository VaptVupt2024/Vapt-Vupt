ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
  });

gsap.to(".esquerda_carro_sticky", {
    scrollTrigger:{
        trigger: ".dentro_carro",
        start: "0% top",
        end: "100% 0",
        pin: true,
        scrub: 1,
        markers: true,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});
