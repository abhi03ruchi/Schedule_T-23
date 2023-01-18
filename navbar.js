const open = document.querySelector('.containerr');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});


    (function($) {
      $.fn.timeline = function() {
        var selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" +
            selectors.item
              .first()
              .find(selectors.img)
              .attr("src") +
            ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function() {
          var max, min;
          var pos = $(this).scrollTop();
          selectors.item.each(function(i) {
            min = $(this).offset().top;
            max = $(this).height() + $(this).offset().top;
            var that = $(this);
            if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
              selectors.item.removeClass(selectors.activeClass);
              selectors.id.css(
                "background-image",
                "url(" +
                  selectors.item
                    .last()
                    .find(selectors.img)
                    .attr("src") +
                  ")"
              );
              selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
              selectors.id.css(
                "background-image",
                "url(" +
                  $(this)
                    .find(selectors.img)
                    .attr("src") +
                  ")"
              );
              selectors.item.removeClass(selectors.activeClass);
              $(this).addClass(selectors.activeClass);
            }
          });
        });
      };
    })(jQuery);
    
    $("#timeline-1").timeline();
    