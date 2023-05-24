function lazyLoad() {
    const images = document.querySelectorAll(".lazy");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    };

    const intersectionObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.getAttribute("data-src");
          const srcset = image.getAttribute("data-srcset");

          if (src) {
            image.src = src;
          }

          if (srcset) {
            image.srcset = srcset;
          }

          image.classList.add("loaded");
          intersectionObserver.unobserve(image);
        }
      });
    }, options);

    images.forEach(image => {
      intersectionObserver.observe(image);
    });
  }