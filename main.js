function revealFunction(){

  window.sr= ScrollReveal({duration:1200, distance:'200px',easing:'ease-out'});


  sr.reveal('.reveal-left',{origin:'left', reset:false});
  sr.reveal('.reveal-top',{origin:'top', reset:false});
  sr.reveal('.reveal-bottom',{origin:'bottom', reset:false});
  sr.reveal('.reveal-right',{origin:'right', reset:false});

  // sr.reveal('.reveal-reset-true',{origin:'bottom', reset:true});
  // sr.reveal('.reveal-rotate',{origin:'bottom', rotate{x:1000, z:1000},reset:true});

}

window.addEventListener('load',()=>{
  revealFunction();
})
