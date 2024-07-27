history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  setTimeout(function () {
    document.documentElement.style.overflow = "visible";
    document.body.style.overflow = "visible";
  }, 3700);
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar .navbar-nav a");

  window.addEventListener("scroll", navHighlighter);

  function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.navbar .navbar-nav a[href*="${sectionId}"]`).parentElement.classList.add("current");
      } else {
        document.querySelector(`.navbar .navbar-nav a[href*="${sectionId}"]`).parentElement.classList.remove("current");
      }
    });
  }

  // Hamburger toggler
  document.querySelector(".navbar-toggler").addEventListener("click", function () {
    document.querySelector(".animated-icon1").classList.toggle("open");
  });

  // Navbar Bg change on scroll
  window.addEventListener("scroll", function () {
    document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 56);
  });

  document.querySelector(".navbar-toggler").addEventListener("click", function () {
    if (!document.querySelector(".navbar-collapse").classList.contains("show")) {
      document.querySelector(".navbar").classList.add("scrolled");
    } else if (window.scrollY < 56) {
      document.querySelector(".navbar").classList.remove("scrolled");
    }
  });
});


// Form

const successModal = document.querySelector("#success.formSubmit-modal");
const errorModal = document.querySelector("#error.formSubmit-modal");
const successModalCloseBtn = document.querySelector("#success.formSubmit-modal .card .btn");
const errorModalCloseBtn = document.querySelector("#error.formSubmit-modal .card .btn");
const form = document.getElementById('web3form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let jsonResponse = await response.json();
        if (response.status === 200) {
            console.log("Success:", jsonResponse);
            successModal.classList.add("modal-active");
        } else {
            console.log("Error response:", response.status, jsonResponse);
            errorModal.classList.add("modal-active");
        }
    })
    .catch(error => {
        console.log("Fetch error:", error);
        errorModal.classList.add("modal-active");
    })
    .then(function() {
        form.reset();
    });
});

successModalCloseBtn.addEventListener("click", () => {
    successModal.classList.remove("modal-active");
});

errorModalCloseBtn.addEventListener("click", () => {
    errorModal.classList.remove("modal-active");
});



