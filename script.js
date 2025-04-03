document.addEventListener('DOMContentLoaded', function () {
  // Select all navigation links
  const navLinks = document.querySelectorAll('nav a')

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      // Prevent the default link behavior (jumping to the anchor)
      event.preventDefault()

      // Get the target section's ID from the link's href attribute
      const targetId = this.getAttribute('href').substring(1) // Remove the '#'

      // Find the target section element
      const targetSection = document.getElementById(targetId)

      // If the target section exists, scroll to it smoothly
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
        })
      }
    })
  })
})
document.addEventListener('DOMContentLoaded', function () {
  const filterLinks = document.querySelectorAll('.filters a')
  const portfolioItems = document.querySelectorAll('.portfolio-item')

  filterLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault()

      filterLinks.forEach((link) => link.classList.remove('active'))
      this.classList.add('active')

      const filter = this.dataset.filter.substring(1) // Remove the leading dot

      portfolioItems.forEach((item) => {
        if (filter === 'new' || item.parentElement.classList.contains(filter)) {
          item.parentElement.style.display = 'block'
        } else {
          item.parentElement.style.display = 'none'
        }
      })
    })
  })

  // Image Popup functionality (Assuming you have a lightbox library or want to implement one)
  const imagePopups = document.querySelectorAll('.img-popup')

  imagePopups.forEach((popup) => {
    popup.addEventListener('click', function (event) {
      event.preventDefault()
      const imageUrl = this.getAttribute('href')
      // Implement your lightbox logic here, or use a library
      // Example (basic, replace with your lightbox):
      const lightbox = document.createElement('div')
      lightbox.style.position = 'fixed'
      lightbox.style.top = '0'
      lightbox.style.left = '0'
      lightbox.style.width = '100%'
      lightbox.style.height = '100%'
      lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)'
      lightbox.style.display = 'flex'
      lightbox.style.justifyContent = 'center'
      lightbox.style.alignItems = 'center'
      lightbox.innerHTML = `<img src="${imageUrl}" style="max-width: 90%; max-height: 90%;" />`
      document.body.appendChild(lightbox)
      lightbox.addEventListener('click', () =>
        document.body.removeChild(lightbox)
      )
    })
  })
})
document.addEventListener("DOMContentLoaded", function() {
  let links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
      link.addEventListener("click", function() {
          links.forEach(l => l.classList.remove("clicked"));
          this.classList.add("clicked");
      });
  });
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
  const swiperWrapper = document.querySelector('#testimonials .swiper-wrapper');
  const slides = document.querySelectorAll('#testimonials .swiper-slide');
  const slideCount = slides.length;
  let currentIndex = 0;
  const slideWidth = slides[0].offsetWidth; // Get width of one slide
  const slideInterval = 5000; // 5 seconds (adjust as needed)

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      const translateX = -currentIndex * slideWidth + 'px';
      swiperWrapper.style.transform = `translateX(${translateX})`;
  }

  setInterval(nextSlide, slideInterval);

  // Optional: Pause on hover
  swiperWrapper.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
  });

  swiperWrapper.addEventListener('mouseleave', () => {
      setInterval(nextSlide, slideInterval);
  });

  // Ensure initial setup after content load (for dynamic slideWidth)
  window.addEventListener('load', function() {
      const slideWidth = slides[0].offsetWidth; // Recalculate after images load
      swiperWrapper.style.width = (slideCount * slideWidth) + 'px'; // Set total width
  });
});