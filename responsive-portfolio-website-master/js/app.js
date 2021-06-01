$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});
let textNode=document.querySelector(".text1");

textNode.innerHtml=textNode.innerText.split(" ").map((char)=>{
return '<span>${char==" "? "&nbsp;":char} </span>'
})
.join("");

anime.timeline({loop:true}).add({
target:".text span",
opacity:[0,1],
translateY:[100,0],
duration:1500,
easing:"easeOutExpo",
delay:(e,i)=>300+50+i
})
.add({
target:".text span",
opacity:[1,0],
translateY:[0,-100],
duration:1000,
easing:"easeInExpo",
delay:(e,i)=>200+50+i
})