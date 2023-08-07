$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
      }
  
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
      } else {
        $('.scroll-up-btn').removeClass("show");
      }
    });
  
    $('.scroll-up-btn').click(function () {
      $('html').animate({ scrollTop: 0 });
      $('html').css("scrollBehavior", "auto");
    });
  
    $('.navbar .menu li a').click(function () {
      $('html').css("scrollBehavior", "smooth");
    });
  
    $('.menu-btn').click(function () {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
  
    var typed = new Typed(".typing", {
      strings: ["Creator", "Freelancer", "Developer", "Artist", "Youtuber", "Manager"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Creator", "Freelancer", "Developer", "Artist", "Youtuber", "Manager"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
    function submitForm(event) {
        event.preventDefault();
        var formData = new FormData(event.target);
        var data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });
        fetch('https://script.google.com/macros/s/AKfycbxMoTEm6pi9h3xb2KKO9tRMCs1f-tuIDffK1jpT07kMlVY2YOkc7hQXMMZEMDOLDq9x/exec', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(function (response) {
            console.log('Form data sent successfully.');
        })
        .catch(function (error) {
            console.error('Error sending form data:', error);
        });
    }
    $('form[name="submit-to-google-sheet"]').submit(submitForm);
  });
  