// Get all the lazy-loaded images
const lazyImages = document.querySelectorAll('.lazy');

// Intersection Observer options
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// Intersection Observer callback function
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove('lazy');
      observer.unobserve(lazyImage);
    }
  });
}

// Create Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observe each lazy-loaded image
lazyImages.forEach(image => {
  observer.observe(image);
});
