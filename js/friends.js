// =========================
// SLIDER
// =========================

const showcaseSlider = document.getElementById("showcaseSlider");

const nextSlide = document.getElementById("nextSlide");

const prevSlide = document.getElementById("prevSlide");

let currentSlide = 0;

nextSlide.addEventListener("click", () => {

  currentSlide++;

  if(currentSlide > 1){
    currentSlide = 0;
  }

  showcaseSlider.style.transform =
  `translateX(-${currentSlide * 50}%)`;

});

prevSlide.addEventListener("click", () => {

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = 1;
  }

  showcaseSlider.style.transform =
  `translateX(-${currentSlide * 50}%)`;

});

// =========================
// SECRET
// =========================

const openSecret = document.getElementById("openSecret");

const secretPopup = document.getElementById("secretPopup");

const secretBtn = document.getElementById("secretBtn");

const secretPassword = document.getElementById("secretPassword");

const secretGallery = document.getElementById("secretGallery");

const secretError = document.getElementById("secretError");

const closeGallery = document.getElementById("closeGallery");

// PASSWORD
const password = "dreamscapejungkies";

// OPEN POPUP
openSecret.addEventListener("click", () => {

  secretPopup.classList.add("show");

  secretPassword.value = "";

  secretError.style.opacity = "0";

});

// LOGIN
secretBtn.addEventListener("click", () => {

  if(secretPassword.value === password){

    secretPopup.classList.remove("show");

    secretGallery.classList.add("show");

  }else{

    secretError.style.opacity = "1";

  }

});

// ENTER
secretPassword.addEventListener("keypress", (e) => {

  if(e.key === "Enter"){
    secretBtn.click();
  }

});

// CLOSE POPUP
secretPopup.addEventListener("click", (e) => {

  if(e.target === secretPopup){

    secretPopup.classList.remove("show");

  }

});

// CLOSE GALLERY
closeGallery.addEventListener("click", () => {

  secretGallery.classList.remove("show");

});

// =========================================
// CLOSE SECRET GALLERY
// =========================================

closeGallery.addEventListener("click", () => {

  // tutup gallery
  secretGallery.classList.remove("show");

  // balik ke atas
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});