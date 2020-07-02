$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 56)
})

$(".navbar-toggler").click(function () {
  if (!$(".navbar-collapse").hasClass("show")) {
    $(".navbar").addClass('scrolled');
  } else if ($(window).scrollTop() < 56) {
    $(".navbar").removeClass("scrolled");
  } else {
  }
})

$('.first-button').on('click', function () {

  $('.animated-icon1').toggleClass('open');
})

// find elements
$("#staticform").submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://api.staticforms.xyz/submit', // url where to submit the request
    type: "POST", // type of action POST || GET
    dataType: 'json', // data type
    data: $("#staticform").serialize(), // post data || get data
    success: function(result) {
      // you can see the result from the console
      // tab of the developer tools
      alert("Your message was successfully sent...");
    },
    error: function(xhr, resp, text) {
      alert(xhr, resp, text);
    }
  })
});