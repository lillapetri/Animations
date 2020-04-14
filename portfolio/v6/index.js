

//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Navbar gets a background when page is scrolled 
$(function() {
	$(document).scroll(function(){
		var $nav = $(".navbar");
		$nav.toggleClass(".scrolled", $(this).scrollTop() > $nav.height());
	});
});


// show sections on scroll



$(window).scroll(function() {
  if ($(this).scrollTop()>300 && $(this).scrollTop()<800)
   {
      $('#about').css({
        opacity: 1});
   } else {
      $("#about").css("opacity", "0");
   }
  if ($(this).scrollTop()>700 && $(this).scrollTop()<1500)
   {
    $('#projects').css("opacity", "1");
   } else {
      $("#projects").css("opacity", "0");
   }
  if ($(this).scrollTop()>1700 && $(this).scrollTop()<2200)
   { 
    $('#skills').css("opacity", "1");
   } else {
      $("#skills").css("opacity", "0");
   }
   if ($(this).scrollTop()>2000)
   {
    $('#hobbies').css("opacity", "1");
   } else {
      $("#hobbies").css("opacity", "0");
   }
});


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 $('#toggler').on('click', function(e) {
      $('.navbar').toggleClass("responsive"); //you can list several class names 
      e.preventDefault();
  });


 // Day counter

 var then = new Date(2020, 01, 05), // month is zero based
    now  = new Date;               // no arguments -> current date

// 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
var days = Math.round((now - then) / (1000 * 60 * 60 * 24)); // round the amount of days
// result: 712

window.onload = function(){
  document.getElementById('days').innerHTML = days;
};