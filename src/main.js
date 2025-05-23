
gsap.registerPlugin(ScrollTrigger);

gsap.to("#nav1", {
  scrollTrigger: {
    trigger: "#nav1",
    start: "top top", 
    onEnter: () => gsap.set("#nav2", { display: "flex" }),  // Muestra #nav2
    onLeaveBack: () => gsap.set("#nav2", { display: "none" }) // Oculta #nav2 al subir 
  }
});

gsap.to(".banner-content", {
  x: "-100%",
  duration: 10,
  repeat: -1,
  ease: "none",
});

gsap.to("#div1", {
  scrollTrigger: {
    trigger: "#div4",
    start: "top top", 
    onEnter: () => {gsap.set("#div1", { display: "none" })},  
    onLeaveBack: () => {gsap.set("#div1", { display: "flex" })} 
  }
});


//cambio de fondo en el div5
gsap.to("#div5", {
  backgroundColor: "black", 
  color:"white",
  duration: 1.5, // Hace la transición más suave
  ease: "power2.out", // Suaviza la transición
  scrollTrigger: {
    trigger: "#divChangeColor", // El div que activa el cambio
    start: "top 60%", // Cuando el div llegue al centro de la pantalla
    end: "bottom 40%", // Opcional: hasta cuándo dura el efecto
    scrub: 1 // Hace el cambio más fluido
  }
});
gsap.from("#animatedText", {
  scrollTrigger: {
    trigger: "#animatedText",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    end: "top 30%",
    scrub: true
  },
  opacity: 0,
  y: 100,
  duration: 1
})
let mm = gsap.matchMedia();

mm.add("(min-width: 1000px)", () => {
  gsap.to("#cuervos", {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#cuervos",
      scroller: "[data-scroll-container]",
      start: "top 30%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    }
  });
});





/* GSAP  horizontal scroll */

//almacenamos todos los elementos con la clase panel en un array llamado sect
//si queremos escalar el contenido solo hay ue incluir la clase panel
let sects = gsap.utils.toArray(".panel")

gsap.to(sects, {
  xPercent : -103 * (sects.length -1),
ease: "none",
scrollTrigger: {
  trigger: "#horizontalScroll",
  start: "top 20%",
  pin:true,
  scrub: 1,
  snap:1 / (sects.length -1),
}})

gsap.to("#miHr", {
  width: "100%",  // Se expandirá a 100% de ancho
  scrollTrigger: {
    trigger: "#miHr",  
    start: "top 80%",   
    scrub: 1,           
    markers: false       
  },
  duration: 1,
  ease: "power2.out", 
});

gsap.to('#sobre', {
  opacity:"100%", 
  scrollTrigger: {
    trigger:"#div2",
    start: "top 30%", 
    end:"center center",
    scrub: 1,
  ease: "power2.out", 
  once: true,

  }
})



document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const counter = preloader.querySelector(".counter");

  let reloadCount = parseInt(localStorage.getItem("reloadCount")) || 0;
  reloadCount++;
  localStorage.setItem("reloadCount", reloadCount);

  const shouldShowPreloader = reloadCount % 3 === 0;

  if (shouldShowPreloader) {
    let count = 3;
    counter.textContent = count;

    const countdown = setInterval(() => {
      count--;
      if (count >= 0) counter.textContent = count;
      if (count === 0) {
        clearInterval(countdown);
        fadeOut(preloader);
      }
    }, 1000);
  } else {
    preloader.style.display = "none";
  }
});

function fadeOut(element) {
  let opacity = 1;

  function fade() {
    opacity -= 0.05;
    if (opacity <= 0) {
      element.style.display = "none";
    } else {
      element.style.opacity = opacity;
      requestAnimationFrame(fade);
    }
  }

  requestAnimationFrame(fade);
}












