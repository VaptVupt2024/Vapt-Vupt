ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
  });

gsap.to(".tela_inicio_desk", {
    scrollTrigger:{
        trigger: ".tela_inicio_desk",
        start: "0% top",
        end: "100% 0",
        scrub: 1,
    },
    ease:"none",
    borderRadius: "7vh",
    transform: "scale(0.9)",
    smooth: true,
    duration: 0.3
});

gsap.to(".vantagens", {
    scrollTrigger:{
        trigger: ".vantagens",
        start: "0% top",
        end: "400% 0",
        pin: true,
        scrub: 1,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".direita_vantagens_img1", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "0% top",
        end: "25% 0",
        scrub: 1.5,
    },
    ease: "none",
    height:"0%",
    smooth: true,
    duration: 0.3
});
gsap.to(".direita_vantagens_img2", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "25% top",
        end: "50% 0",
        scrub: 1.5,
    },
    ease: "none",
    height:"0%",
    smooth: true,
    duration: 0.3
});
gsap.to(".direita_vantagens_img3", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "50% top",
        end: "68% 0",
        scrub: 1.5,
    },
    ease: "none",
    height:"0%",
    smooth: true,
    duration: 0.3
});

gsap.to(".svg_clip_path2", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "10% top",
        end: "25% 0",
        scrub: 1.5,
    },
    ease: "none",
    transform: "scale(1)",
    smooth: true,
    duration: 0.3
});
gsap.to(".svg_clip_path3", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "35% top",
        end: "50% 0",
        scrub: 1.5,
    },
    ease: "none",
    transform: "scale(1)",
    smooth: true,
    duration: 0.3
});
gsap.to(".svg_clip_path4", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "60% top",
        end: "68% 0",
        scrub: 1.5,
    },
    transform: "scale(1)",
    ease: "none",
    smooth: true,
    duration: 0.3
});
gsap.to(".esquerda_baixo_txt2", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "25% top",
        end: "25% top",
        toggleActions: "restart none none reverse",
    },
    opacity: 1,
    display: "block",
    ease: "power4.out",
    smooth: true,
    duration: 0.7
});
gsap.to(".esquerda_baixo_txt3", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "50% top",
        end: "50% top",
        toggleActions: "restart none none reverse",
    },
    opacity: 1,
    display: "block",
    ease: "power4.out",
    smooth: true,
    duration: 0.7
});

gsap.to(".esquerda_baixo_txt4", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "68% top",
        end: "68% top",
        toggleActions: "restart none none reverse",
    },
    opacity: 1,
    display: "block",
    ease: "power4.out",
    smooth: true,
    duration: 0.7
});


gsap.to("div[vw].enabled", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "0% top",
        end: "100% bottom",
        toggleActions: "restart reverse restart reverse",
    },
    paddingBottom: "12vh",
    ease: "power4.inOut",
    smooth: true,
    duration: 1
});



gsap.to(".direita_vantagens_linha_anda", {
    scrollTrigger:{
        trigger: ".sticky_vantagens",
        start: "0% top",
        end: "100% bottom",
        scrub: 2,
    },
    width: "100%",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});

gsap.to(".parte_escura", {
    scrollTrigger:{
        trigger: ".parte_escura_itens_posição",
        start: "0% 100%",
        end: "100% 100%",
        scrub: 1,
    },
    ease:"none",
    borderRadius: "0vh 0vh 0vh 0vh",
    transform: "scale(1)",
    smooth: true,
    duration: 0.3
});

gsap.to(".parte_escura_item", {
    scrollTrigger:{
        trigger: ".parte_escura_item",
        start: "top 70%",
        end: "top 70%",
        toggleActions: "restart none none reverse",
    },
    transform: "translateX(0) scaleY(1) scaleX(1)",
    transformOrigin: "50% 50%",
    opacity: 1,
    ease: "power4.out",
    smooth: true,
    duration: 0.7
});
gsap.to(".parte_escura_item2", {
    scrollTrigger:{
        trigger: ".parte_escura_item",
        start: "top 70%",
        end: "top 70%",
        toggleActions: "restart none none reverse",
    },
    transform: "translateX(0) scaleY(1) scaleX(1)",
    transformOrigin: "50% 50%",
    opacity: 1,
    ease: "power4.out",
    smooth: true,
    delay:0.1,
    duration: 0.7
});
gsap.to(".parte_escura_item3", {
    scrollTrigger:{
        trigger: ".parte_escura_item",
        start: "top 70%",
        end: "top 70%",
        toggleActions: "restart none none reverse",
    },
    transform: "translateX(0) scaleY(1) scaleX(1)",
    transformOrigin: "50% 50%",
    opacity: 1,
    ease: "power4.out",
    smooth: true,
    delay:0.2,
    duration: 0.7
});
gsap.to(".parte_escura_item4", {
    scrollTrigger:{
        trigger: ".parte_escura_item",
        start: "top 70%",
        end: "top 70%",
        toggleActions: "restart none none reverse",
    },
    transform: "translateX(0) scaleY(1) scaleX(1)",
    transformOrigin: "50% 50%",
    opacity: 1,
    ease: "power4.out",
    smooth: true,
    delay:0.3,
    duration: 0.7
});

gsap.to(".equipe", {
    scrollTrigger:{
        trigger: ".equipe",
        start: "0% 100%",
        end: "0% 50%",
        scrub: 1,
    },
    ease:"none",
    borderRadius: "15px",
    transform: "scale(1)",
    smooth: true,
    duration: 0.3
});
gsap.to(".borda_fundo", {
    scrollTrigger:{
        trigger: ".equipe",
        start: "0% 100%",
        end: "0% 50%",
        scrub: 1,
    },
    ease:"none",
    borderRadius: "15px",
    smooth: true,
    duration: 0.3
});
gsap.to(".equipe2", {
    scrollTrigger:{
        trigger: ".equipe2",
        start: "0% 100%",
        end: "0% 50%",
        scrub: 1,
    },
    ease:"none",
    borderRadius: "15px",
    transform: "scale(1)",
    smooth: true,
    duration: 0.3
});
gsap.to(".borda_fundo2", {
    scrollTrigger:{
        trigger: ".equipe2",
        start: "0% 100%",
        end: "0% 50%",
        scrub: 1,
    },
    ease:"none",
    borderRadius: "15px",
    smooth: true,
    duration: 0.3
});
gsap.to(".borda_fundo3", {
    scrollTrigger:{
        trigger: ".equipe2",
        start: "0% 100%",
        end: "0% 50%",
        scrub: 1,
    },
    ease:"none",
    borderRadius: "15px",
    smooth: true,
    duration: 0.3
});

gsap.to(".parte_escura2", {
    scrollTrigger:{
        trigger: ".cadastre",
        start: "0% 0%",
        end: "100% 0%",
        scrub: 1,
    },
    ease:"none",
    borderRadius: "0vh 0vh 7vh 7vh",
    transform: "scale(0.9)",
    smooth: true,
    duration: 0.3
});
gsap.to(".img_video", {
    scrollTrigger:{
        trigger: ".img_video",
        start: "0% 100%",
        end: "100% 0%",
        scrub: 1,
    },
    ease:"none",
    right:0,
    smooth: true,
    duration: 0.3
});
gsap.to(".img_video_mobile", {
    scrollTrigger:{
        trigger: ".img_video_mobile",
        start: "0% 100%",
        end: "100% 0%",
        scrub: 1,
    },
    ease:"none",
    right:0,
    smooth: true,
    duration: 0.3
});
gsap.to(".cadastre", {
    scrollTrigger:{
        trigger: ".cadastre",
        start: "0% top",
        end: "115% 0",
        pin: true,
        scrub: 1,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".cadastre_animacao", {
    scrollTrigger:{
        trigger: ".parte_escura2",
        start: "100% 20%",
        end: "100% 20%",
        toggleActions: "restart none none none",
    },
	animation: "slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
    ease: "none",
    smooth: true,
    delay:0,
    duration: 0.1
});
gsap.to(".cadastre_animacao1", {
    scrollTrigger:{
        trigger: ".parte_escura2",
        start: "100% 20%",
        end: "100% 20%",
        toggleActions: "restart none none none",
    },
	animation: "slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
    ease: "none",
    smooth: true,
    delay:0.1,
    duration: 0.1
});
gsap.to(".cadastre_animacao2", {
    scrollTrigger:{
        trigger: ".parte_escura2",
        start: "100% 20%",
        end: "100% 20%",
        toggleActions: "restart none none none",
    },
	animation: "slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
    ease: "none",
    smooth: true,
    delay:0.2,
    duration: 0.1
});
gsap.to(".cadastre_animacao3", {
    scrollTrigger:{
        trigger: ".parte_escura2",
        start: "100% 20%",
        end: "100% 20%",
        toggleActions: "restart none none none",
    },
	animation: "slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
    ease: "none",
    smooth: true,
    delay:0.3,
    duration: 0.1
});
gsap.to(".cadastre_animacao4", {
    scrollTrigger:{
        trigger: ".parte_escura2",
        start: "100% 20%",
        end: "100% 20%",
        toggleActions: "restart none none none",
    },
	animation: "slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
    ease: "none",
    smooth: true,
    delay:0.4,
    duration: 0.1
});
gsap.to(".cadastre_animacao5", {
    scrollTrigger:{
        trigger: ".parte_escura2",
        start: "100% 20%",
        end: "100% 20%",
        toggleActions: "restart none none none",
    },
	animation: "slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
    ease: "none",
    smooth: true,
    delay:0.5,
    duration: 0.1
});









gsap.to("nav", {
    scrollTrigger:{
        trigger: "footer",
        start: "0% 0.5%",
        end: "0% 0.5%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "530px",
    ease: "none",
    smooth: true,
    delay:0.5,
    duration: 0.1
});




gsap.to(".rodape_img", {
    scrollTrigger:{
        trigger: "footer",
        start: "0% 100%",
        end: "100% 100%",
        scrub: 2,
    },
    ease:"none",
    backgroundPosition: "50% 50%",
    smooth: true,
    duration: 1
});
