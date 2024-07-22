var menu = document.querySelector('#first-image');
var nav = document.querySelector('nav');
var onlist = document.querySelector('.onlist');

menu.onclick = function(){
    nav.classList.toggle("navlist");
    onlist.classList.toggle("on")
}


var main=document.querySelector(".main");
var display = 0;
function hide(){
if(display == 1){
onlist.style.display="none";
display=0;
}
if(display=0){
    menu.style.display="block"
    display=0;
}
else{
    main.style.display="block";
    display=1;
}
};
//image next and preve
var slider_Image= document.querySelector("slider");
var image =["bargur.png","burger.jpg","nagets.jpg","shawarma.jpg","zinger.jpg"]
var i = 0;

function preve(){
    if(i <= 0) i = image.length;
    i--
    return setImage()
}


function next (){}


function setImage(){
    return slider_Image.setAttribute("sre" ,'image',+ image[i])
}


// var slides = document.querySelectorAll(".burger");
// var left =document.querySelector(".icon");
// var right =document.querySelector(".right-icon")

// i = 0;

// function activeSlide(n){
//     for(slides of slides)
//     slides.classList.remove=("active")    
//     slides[n].classList.add=("active")    
// }

// //on click icon btn 
// left.addEventListener("click",function(){
//     if(i == slides.length - 1){
//         i=0;
//         activeSlide(i)
//     }
//     else{
//         i++
//     }
// })

