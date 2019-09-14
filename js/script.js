(function($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader")
        .delay(200)
        .fadeOut(500);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-to-top");
      if (windowpos >= 1) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
    );

    //Dropdown Button
    $(".main-header li.dropdown .dropdown-btn").on("click", function() {
      $(this)
        .prev("ul")
        .slideToggle(500);
    });
  }

  //Add One Page nav
  if ($(".scroll-nav").length) {
    $(".scroll-nav ul.navigation").onePageNav({ changeHash: true });
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function() {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate(
            {
              countNum: n
            },
            {
              duration: r,
              easing: "linear",
              step: function() {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function() {
                $t.find(".count-text").text(this.countNum);
              }
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  //// Scroll to a Specific Section / Menu
  //	if($('.page-title').length !== 1){
  //		$(".scroll-nav .navigation > li > a").on('click', function(e) {
  //			e.preventDefault();
  //			var target = $(this).attr('href');
  //			$('.scroll-nav .navigation > li').removeClass('current');
  //			$(this).parent('li').addClass('current');
  //		   // animate
  //		   $('html, body').animate({
  //			   scrollTop: $(target).offset().top-81
  //			 }, 1000);
  //
  //		});
  //	}

  //Hide Bootstrap Menu On Click over Mobile View
  $(".scroll-nav ul.navigation > li > a").on("click", function() {
    var windowWidth = $(window).width();
    if (windowWidth <= 767) {
      $(".nav-outer .navbar-toggle").trigger("click");
    }
  });

  //Single Item Carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      nav: true,
      smartSpeed: 700,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ]
    });
  }

  //Inventory Tabs
  if ($(".inventory-tabs").length) {
    $(".inventory-tabs .tab-buttons .tab-btn").on("click", function(e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).hasClass("active-tab")) {
        return false;
      } else {
        target
          .parents(".inventory-tabs")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".inventory-tabs")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).addClass("active-tab");
      }
    });
  }

  //Default Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function(e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  //Sponsors Slider One
  if ($(".sponsors-slider-one").length) {
    $(".sponsors-slider-one").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 3
        },
        1024: {
          items: 4
        },
        1200: {
          items: 4
        }
      }
    });
  }

  //Clients Carousel
  if ($(".clients-carousel").length) {
    $(".clients-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 1
        },
        1024: {
          items: 2
        }
      }
    });
  }

  //Testimonials Carousel One
  if ($(".testimonials-carousel-one").length) {
    $(".testimonials-carousel-one").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      nav: true,
      smartSpeed: 700,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ]
    });
  }

  //Testimonials Style Two
  if ($(".testimonial-style-two").length) {
    $(".testimonial-style-two").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 2
        },
        1024: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {}
      }
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function() {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top
        },
        1000
      );
    });
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      }
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function() {
    headerStyle();
  });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  $(window).on("load", function() {
    handlePreloader();
  });
  $(document).ready(function() {
    $(".agenda-second-button").on("click", function() {
      $("#agenda-menu").click();
      return false;
    });
    var yourDateToGo = new Date("2019-09-18T21:00:00+02:00"); //new Date(); //here you're making new Date object
    //yourDateToGo.setDate(yourDateToGo.getDate() + 1); //your're setting date in this object 1 day more from now
    //you can change number of days to go by putting any number in place of 1
    var timing = setInterval(
      // you're making an interval - a thing, that is updating content after number of miliseconds, that you're writing after comma as second parameter
      function() {
        var currentDate = new Date().getTime(); //same thing as above
        var timeLeft = yourDateToGo - currentDate; //difference between time you set and now in miliseconds
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days
        if (days < 10) days = "0" + days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
        var hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ); //conversion miliseconds on hours
        if (hours < 10) hours = "0" + hours;
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); //conversion miliseconds on seconds
        if (seconds < 10) seconds = "0" + seconds;
        //console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s");
        document.getElementById("countdown").innerHTML =
          "za " + days + "d " + hours + "h " + minutes + "m " + seconds + "s"; // putting number of days, hours, minutes and seconds in div,
        //which id is countdown
        if (timeLeft <= 0) {
          clearInterval(timing);
          document.getElementById("countdown").innerHTML = "koniec"; //if there's no time left, programm in this 2 lines is clearing interval (nothing is counting now)
          //and you see "It's over" instead of time left
        }
      },
      1000
    );
  });
  $(document).ready(function() {
    var template = $("#faq-template").html();
    var faq = [
      {
        question:
          "Co muszę wiedzieć przed rozpoczęciem kursu? Czy muszę znać docker?",
        answer:
          "<p>Nie potrzebujesz znać żadnego konkretnego języka programowania, ani skryptowego. Wystarczy podstawowa znajomość konsoli i edytorów tekstowych. " +
          "Resztę pokażemy.<br/>Co do docker, to też nie musisz go znać. Pokażemy kilka dobrych praktyk i będziesz miał opanowanego docker na poziomie wystarczającym w 90% przypadków.</p>"
      },
      {
        question: "Od kiedy będzie dostępny kurs?",
        answer:
          "<p>Pierwszy moduł najpóźniej zostanie opublikowany w poniedziałek 4 listopada.</p>"
      },
      {
        question: "Czy dostanę cały kurs od razu?",
        answer:
          "<p>Nie. Dodajemy nowe materiały każdego tygodnia, aby Cię nie przytłoczyć i aby cała grupa przechodziła materiał w tym samym momencie.</p>"
	  },
	  {
        question: "Czy dostanę fakturę VAT?",
        answer:
          "<p>Tak, chwilę po zaksięgowaniu. VAT obowiązujący w tym wypadku to 23%." +
          "Uwaga: Słowo “chwila” jest nieprecyzyjne, przepraszamy. Ciężko jest jednak określić czas integracji 4 czy 5 systemów po drodze.</p>"
      },
      {
        question: "Jak długo będę miał dostęp do kursu?",
        answer:
          "<p>Otrzymasz dożywotni dostęp do tej edycji kursu wraz z aktualizacjami.</p>"
      },
      {
        question: "W jakiej formie jest ten kurs?",
        answer:
          "<p>Kurs jest głównie w formie wideo. Nagrania zamieszczone są na platformie. Po podaniu loginu i hasła masz dostęp do swojego konta.</p>"
      },
      {
        question: "Jaki sprzęt będzie wymagany do kursu?",
        answer:
          "<p>Jakikolwiek który ma min 8GB ram, Windows 10 z możliwością Hyper-V lub macOS lub Linux + dostęp do internetu.</p>" +
          "<p>8GB uważamy to za totalne minimum jeżeli chcemy pracować kursem u siebie lokalnie. Jeżeli korzystamy z chmury ram ten nie będzie aż tak kluczowy.</p>"
      },
      {
        question: "Czy jak mi się nie spodoba to dostanę zwrot pieniędzy?",
        answer:
          "<p>Jeżeli zrobisz to w ciągu 31 po opublikowaniu pierwszego modułu to wystarczy napisać do nas i bez pytań oddajemy Ci pieniądze plus wystawiamy korektę faktury.</p>"
      },
      {
        question: "Co potrzebuje do wykonywania ćwiczeń?",
        answer:
          "<p>Każdy moduł będzie miał zadania do wykonania samemu - lokalnie u siebie na komputerze (Docker CE lub minikube) lub jeśli chcesz u wybranego dostawcy chmury publicznej(*)</p>" +
          "<p>(*chmura nie jest dostarczona wraz z kursem)</p>"
      },
      {
        question:
          "Czy jeżeli kurs nie zostanie opublikowany dostanę zwrot pieniędzy?",
        answer: "<p>Tak, a także fakturę z korektą.</p>"
      },
      {
        question: "Czy mogę kupić na fakturę pro-forma?",
        answer: "<p>Napisz do nas na <a href=\"kontakt@poznajkubernets.pl\">kontakt@poznajkubernets.pl</a> - spróbujemy coś wymyślić.</p>"
      },
      {
        question: "Chyba zwariowaliście z pracą za 20k+ z Kubernetes?!!??!!",
        answer: "<p>Uwierz też się zdziwiliśmy, ale wejdź na <a href=\"https://justjoin.it/all/devops/all/20k\">https://justjoin.it/all/devops/all/20k</a> i sprawdź sam!</p>"
      },
      {
        question: "",
        answer: ""
      },
      {
        question: "",
        answer: ""
      }
    ];
    faq.forEach(function(item, index) {
      if (item.question == "") return;
      var content = template
        .replaceAll("XXX", index)
        .replaceAll("QUESTION", item.question)
        .replaceAll("ANSWER", item.answer);
      $("#accordionFAQ").append(content);
    });
  });
})(window.jQuery);

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};
