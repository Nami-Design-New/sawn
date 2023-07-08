//--------------------animate counting-----------------------//
let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 2500 / goal);
}
window.onscroll = function () {
  if (this.scrollY >= document.querySelector(".about").offsetTop) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};
//------------------------end animate--------------------------//

//------------------phone images slider------------------------//
var phoneImgs = new Swiper(".phoneImgs", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 60,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 5,
    stretch: 10,
    depth: 200,
    modifier: 1.2,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".appSliderNext",
    prevEl: ".appSliderPrev",
  },
});
//---------------nav-links-highlight---------------------//
let navLinks = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 110) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
//----------------------menue--------------------//
let menu = document.querySelector(".menu");
let links = document.querySelectorAll(".nav-link a");
menu.addEventListener("click", () => {
  if (menu.querySelector("i").classList.contains("fa-bars")) {
    menu.querySelector("i").classList.remove("fa-bars");
    menu.querySelector("i").classList.add("fa-times");
  } else {
    menu.querySelector("i").classList.remove("fa-times");
    menu.querySelector("i").classList.add("fa-bars");
  }
  document.querySelector("body").classList.toggle("noscroll");
  document.querySelector("nav").classList.toggle("opened");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector("nav").classList.remove("opened");
      menu.querySelector("i").classList.remove("fa-times");
      menu.querySelector("i").classList.add("fa-bars");
      document.querySelector("body").classList.remove("noscroll");
    });
  });
});
//-----------------popup-model--------------------//
let subscribe_btns = document.querySelectorAll(".sub");
let modelView = document.querySelector(".model-view");
let closeBtn = document.querySelector(".close");

subscribe_btns.forEach((sub) => {
  sub.addEventListener("click", () => {
    document.querySelector("body").classList.add("noscroll");
    modelView.classList.add("opened");
  });
});

closeBtn.addEventListener("click", () => {
  document.querySelector("body").classList.remove("noscroll");
  modelView.classList.remove("opened");
});

modelView.addEventListener("click", (e) => {
  if (e.target === modelView) {
    document.querySelector("body").classList.remove("noscroll");
    modelView.classList.remove("opened");
  }
});