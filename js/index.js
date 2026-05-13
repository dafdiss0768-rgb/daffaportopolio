// =========================================
// SCROLL TO TOP
// =========================================

const scrollTopBtn = document.getElementById("scrollTop");

// section pertama
const firstSection = document.querySelector(".section1");

window.addEventListener("scroll", () => {

  // ambil tinggi section pertama
  const triggerPoint = firstSection.offsetHeight - 200;

  // kalau sudah lewat section pertama
  if(window.scrollY > triggerPoint){

    scrollTopBtn.classList.add("show");

  }else{

    scrollTopBtn.classList.remove("show");

  }

});

// klik tombol
scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});