const imageWrapper = document.querySelector(".about-image-wrapper");

imageWrapper.addEventListener("mouseenter", () => {
  imageWrapper.classList.add("active");
});

imageWrapper.addEventListener("mouseleave", () => {
  imageWrapper.classList.remove("active");
});

/* MOBILE TOUCH */
imageWrapper.addEventListener("click", () => {
  imageWrapper.classList.toggle("active");
});

const aboutWrapper = document.querySelector(".about-image-wrapper");

aboutWrapper.addEventListener("click", () => {
  aboutWrapper.classList.toggle("active");
});