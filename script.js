gsap.registerPlugin(ScrollTrigger);

gsap.from(".head-logo",{
        scale:1.5,
    delay:0.5,
    duration:2,
    y:-60,
    opacity:0,
});

gsap.from("body",{
    opacity:0,
    duration:1.5,
})

gsap.from("header",{

    duration:1.5,
    y:-60,
    opacity:0,
    delay:0.5
});

gsap.from(".heading",{
    duration:1.5,
    x:-60,
    opacity:0,
    delay:0.5
});

gsap.from(".para",{
    duration:1.5,
    x:60,
    opacity:0,
    delay:0.5
});

gsap.from(".btns",{
    

    duration:1.5,
    x:60,
    opacity:0,
    delay:0.5
});

gsap.from(".imgdiv",{
    delay:5,


    duration:1.5,
    y:60,

    opacity:0,
    delay:0.5
});

gsap.from(".program-heading", {
        delay:0.5,

        scale: 1.2,
  y: -50,

  opacity: 0,
  duration: 1.3,


  scrollTrigger: {
    trigger: ".program-heading",
    start: "top 70%",
    end: "80%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",

   
  }
});

gsap.from(".heading-description", {
        delay:0.5,

        scale: 1.2,
  y: -50,

  opacity: 0,
  duration: 1.3,


  scrollTrigger: {
    trigger: ".program-heading",
    start: "top 70%",
    end: "80%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",

   
  }
});


gsap.from("#program1", {
        delay:0.5,

  y: 50,
  x:-100,
  opacity: 0,
  duration: 1.3,
    rotate:-20,

  scrollTrigger: {
    trigger: "#program1",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
    markers:false,
   
  }
});

gsap.from("#program2", {
  y: -50,
    delay:0.5,

  opacity: 0,
  duration: 1.3,
  scale:1.1,


  scrollTrigger: {
    trigger: "#program1",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
   
  }
});

gsap.from("#program3", {
    delay:0.5,
  y: 50,
  x:100,
  opacity: 0,
  duration: 1.3,
    rotate:20,

  scrollTrigger: {
    trigger: "#program3",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
   
  }
});

gsap.from("#program4", {
    delay:0.5,
  y: 100,
  // rotationX:50,
  rotationY:-50,
  x:-100,
  opacity: 0,
  duration: 1.3,
    

  scrollTrigger: {
    trigger: "#program4",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
    
   
   
  }
});

gsap.from("#program5", {
  y: 50,
    delay:0.5,

  opacity: 0,
  duration: 1.3,
  scale:1.1,


  scrollTrigger: {
    trigger: "#program4",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
   
  }
});


gsap.from("#program6", {
    delay:0.5,
  y: 100,
  // rotationX:50,
  rotationY:50,
  x:100,
  opacity: 0,
  duration: 1.3,
    

  scrollTrigger: {
    trigger: "#program6",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
   
   
  }
});

// gsap.from(".comp-card", {
//     delay:0.5,
//   x:-100,

//   stagger: 0.3,
//   opacity: 0,
//   duration: 1.3,
//   scale:.9,
//   rotationY:30,
//     ease: "sine.out", 
    

//   scrollTrigger: {
//     trigger: ".comp-card",
//     start: "top 60%",
//     end: "100%",  // when the top of .card hits 80% from top of viewport
//     toggleActions: "play none none reverse",
//     markers: true,
   
   
//   }
// });


gsap.from("#comp-card1", {
    delay:0.5,
  y: 100,
  // rotationX:50,
  rotationZ:-20,
  x:-100,
  scale:0.9,
  opacity: 0,
  duration: 1.3,
    

  scrollTrigger: {
    trigger: "#comp-card1",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
  
   
   
  }
});

gsap.from("#comp-card2", {
      delay:0.5,
  y: 100,
  // rotationX:50,
  rotationZ:-20,
  x:-100,
  scale:0.9,
  opacity: 0,
  duration: 1.3,
    

  scrollTrigger: {
    trigger: "#comp-card2",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
  
   
   
  }
});

gsap.from("#comp-card3", {
    delay:0.5,
  y: 100,
  // rotationX:50,
  rotationZ:20,
  x:100,
  scale:0.9,
  opacity: 0,
  duration: 1.3,
    

  scrollTrigger: {
    trigger: "#comp-card3",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
  
   
   
  }
});

gsap.from("#comp-card4", {
    delay:0.5,
  y: 100,
  // rotationX:50,
  rotationZ:20,
  x:100,
  scale:0.9,
  opacity: 0,
  duration: 1.3,
    

  scrollTrigger: {
    trigger: "#comp-card3",
    start: "top 70%",
    end: "100%",  // when the top of .card hits 80% from top of viewport
    toggleActions: "play none none reverse",
  
   
   
  }
});