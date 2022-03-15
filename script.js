const order1 = document.getElementsByClassName("order-1");
const order2 = document.getElementsByClassName("order-2");
const order3 = document.getElementsByClassName("order-3");

const orderHandler = (value) => {
  console.log(`Order Toyota ${value}`);
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
const plusSlide = (n) => {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  const slides = document.getElementsByClassName("user-testimoni");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const toggleButton = document.getElementById('toggle-Button');
const navilist = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
  navilist.classList.toggle('active');
})