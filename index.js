1000//SAME NAVIGATION FOR ALL PAGESS
"use-strict";
var hamBtn = document.querySelector(".ham");
var nav = document.querySelector(".nav");
var closeBtn = document.querySelector(".close");
var overlay = document.querySelector(".overlay");
var nava = document.querySelector(".nava");
var footer = document.querySelector(".footer");

window.addEventListener("load", function() {
      overlay.style.pointerEvents = "none";
      })

hamBtn.addEventListener('click', function () {
  nav.className += " open";
  overlay.className += " open";
  overlay.style.pointerEvents = "auto";
 
})
closeBtn.addEventListener('click', function (){
  nav.className = " nav";
  overlay.className = "overlay";
  
})

//When you press outside the ham
window.addEventListener('click', function(event){
  if(event.target === overlay) {
    nav.className = " nav";
    overlay.className = "overlay";
  }
})


//////////////////////////////////////////////////////

// //JQUERY
$(".slide-holder").hide();
$( ".seeAll" ).on( "click", function(e) {
  e.preventDefault();
  $(".slide-holder").slideToggle(1000);
});



//APPEND FOOTER//

//OUR STORY JS & JQUERY/
//Next Slider Buttons//
$(document).ready(function(){
  $("a[href^='#']").on("click", function(e){
      e.preventDefault();

/*What*/var target = this.hash;
        var $target = $(target);

//Scroll
      $("html, body").animate({'scrollTop': $target.offset().top}, 1000, 'swing');
  });
});
//Back to Top//
$(function () {
  $('.backtotop').click(function () {
  $('body,html').animate({scrollTop: 0}, 1000);
  return false;
  });
});
