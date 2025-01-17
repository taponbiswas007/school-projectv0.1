$(document).ready(function () {
    // Set the date and time to count down to
    var targetDate = new Date('July 10, 2024 01:34:00');

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours < 10 ? '0' + hours : hours);
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);

        if (distance < 0) {
            clearInterval(x);
            $('#countdown').html("EXPIRED");
        }
    }

    updateCountdown();
    var x = setInterval(updateCountdown, 1000);

    // Add the .active-day class to the current day
    function setActiveDay() {
        var currentDayIndex = new Date().getDay() - 1; // JavaScript's getDay() returns 0 for Sunday, 1 for Monday, etc.
        // Adjust for your needs if Sunday should be considered the start of the week
        if (currentDayIndex < 0) {
            currentDayIndex = 6; // Saturday
        }
        $('.day-list-item').removeClass('active-day');
        $('.day-list-item').eq(currentDayIndex).addClass('active-day');
    }

    // Initially set the active day
    setActiveDay();

    // Handle button click event
    $('.coinrreceived-btn').click(function () {
        var parent = $(this).closest('.day-list-item');
        if (parent.hasClass('active-day')) {
            parent.removeClass('active-day').addClass('coin-received');
        }
    });

    $(".get-awerdnow").click(function () {
        $(".get-awerd-popup").toggle();
    });

    //general duty area
    $('.beginbtn').click(function () {
        var $this = $(this);
        var $parent = $this.closest('.begin-item');
        var $timer = $parent.find('#timer');
        var $contdownTimer = $parent.find('.contdowntimer');
        var $checkedbox = $parent.find('.checkedbox');

        $this.hide();
        $contdownTimer.show();

        var duration = 22 * 60 + 10; // 22:10 in seconds

        var interval = setInterval(function () {
            var minutes = Math.floor(duration / 60);
            var seconds = duration % 60;

            $timer.text(
                (minutes < 10 ? '0' : '') + minutes + ':' +
                (seconds < 10 ? '0' : '') + seconds
            );

            if (duration <= 0) {
                clearInterval(interval);
                $contdownTimer.hide();
                $checkedbox.show();
                $parent.css('border', '1px solid #4ABC96');
            }

            duration--;
        }, 1000);
    });


    $(".generaldtybar").click(function () {
        var $btn = $(".generaldtybtn");
        var currentRotation = $btn.data("rotation") || 0;
        var newRotation = currentRotation === 180 ? 0 : 180;

        $btn.css({
            "transform": "rotate(" + newRotation + "deg)"
        }).data("rotation", newRotation);

        $(".dutylist").slideToggle();
    });


    $(".dailymissionbar").click(function () {
        var $btn = $(".dailymissionbtn");
        var currentRotation = $btn.data("rotation") || 0;
        var newRotation = currentRotation === 180 ? 0 : 180;

        $btn.css({
            "transform": "rotate(" + newRotation + "deg)"
        }).data("rotation", newRotation);

        $(".dailymissionlist").slideToggle();
    });

    $(".idlequestbar").click(function () {
        var $btn = $(".idlequestbtn");
        var currentRotation = $btn.data("rotation") || 0;
        var newRotation = currentRotation === 180 ? 0 : 180;

        $btn.css({
            "transform": "rotate(" + newRotation + "deg)"
        }).data("rotation", newRotation);

        $(".idlequestlist").slideToggle();
    });

    $('.news-slide-main-area').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
             
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
     // Function to check if the screen width is <= 991px
     function isMobileView() {
      return $(window).width() <= 991;
  }

  // Toggle gallery list and icons
  $(".galleryitemopenbtn").click(function() {
      if (isMobileView()) {
          $(".newsgallerylist-area").toggle();
          $(".closethis, .openthis").toggle();
      }
  });

  // Hide gallery list and update icons when clicking outside the gallery area
  $(document).click(function(event) {
      if (isMobileView() && !$(event.target).closest('.newsgallerybar').length) {
          if ($(".newsgallerylist-area").is(":visible")) {
              $(".newsgallerylist-area").hide();
              $(".closethis").hide();
              $(".openthis").show();
          }
      }
  });

  // Update current item text and hide the gallery list when a link is clicked
  $(".newsgalleryitemlist li a").click(function() {
      if (isMobileView()) {
          var selectedText = $(this).text();
          $("#correntItem").text(selectedText);

          $(".newsgallerylist-area").hide();
          $(".closethis").hide();
          $(".openthis").show();
      }
  });

  // Handle window resize
  $(window).resize(function() {
      if (!isMobileView()) {
          $(".newsgallerylist-area").show();
          $(".closethis").hide();
          $(".openthis").hide();
      } else {
          $(".newsgallerylist-area").hide();
          $(".closethis").hide();
          $(".openthis").show();
      }
  }).resize(); // Trigger resize to ensure correct initial state





});

