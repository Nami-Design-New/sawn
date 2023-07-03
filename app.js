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
window.onscroll = function() {
  if (this.scrollY >= document.querySelector(".about").offsetTop) {
    if (!started) {
      numbers.forEach(num => startCount(num));
    }
    started = true;
  }
};

