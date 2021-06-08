history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  setTimeout(function () {
    $("html, body").css("overflow", "visible");
  }, 3700);
});

$(document).ready(function () {
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", navHighlighter);

  function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".navbar .navbar-nav a[href*=" + sectionId + "]")
          .parentElement.classList.add("current");
      } else {
        document
          .querySelector(".navbar .navbar-nav a[href*=" + sectionId + "]")
          .parentElement.classList.remove("current");
      }
    });
  }

  // Hamburger toggler
  $(".navbar-toggler").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });

  // Navbar Bg change on scroll
  $(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 56);
  });

  $(".navbar-toggler").click(function () {
    if (!$(".navbar-collapse").hasClass("show")) {
      $(".navbar").addClass("scrolled");
    } else if ($(window).scrollTop() < 56) {
      $(".navbar").removeClass("scrolled");
    } else {
    }
  });
});

// Form

let successModal = document.querySelector("#success.formSubmit-modal");
let errorModal = document.querySelector("#error.formSubmit-modal");
let successModalCloseBtn = document.querySelector(
  "#success.formSubmit-modal .card .btn"
);
let errorModalCloseBtn = document.querySelector(
  "#error.formSubmit-modal .card .btn"
);
$("#staticform").submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: "https://api.staticforms.xyz/submit", // url where to submit the request
    type: "POST", // type of action POST || GET
    dataType: "json", // data type
    data: $("#staticform").serialize(), // post data || get data
    success: function (result) {
      successModal.classList.add("modal-active");
    },
    error: function (xhr, resp, text) {
      errorModal.classList.add("modal-active");
    },
  });
});

successModalCloseBtn.addEventListener("click", () => {
  successModal.classList.remove("modal-active");
});
errorModalCloseBtn.addEventListener("click", () => {
  errorModal.classList.remove("modal-active");
});
