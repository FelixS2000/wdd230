document.addEventListener("DOMContentLoaded", function() {
    const lazyLoadImages = document.querySelectorAll(".lazy");

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");

          if (src) {
            img.setAttribute("src", src);
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    });
    lazyLoadImages.forEach(function(img) {
        observer.observe(img);
      });
    });