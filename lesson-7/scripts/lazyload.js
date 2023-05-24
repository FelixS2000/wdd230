// lazyload-custom.js

(function() {
    function lazyLoad() {
      var lazyLoadInstance;
  
      function lazyLoadCallback(element) {
        element.classList.add("loaded");
        var img = element.querySelector("img");
        if (img && img.dataset.src) {
          img.src = img.dataset.src;
        }
      }
  
      lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
        thresholds: "200px",
        callback_enter: lazyLoadCallback
      });
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", lazyLoad);
    } else {
      lazyLoad();
    }
  })();
  