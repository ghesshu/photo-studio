AOS.init({
  duration: 1000,
    delay: 200,
});

const prev = document.getElementById("prevClick");
const next = document.getElementById("nextClick");
const overflowXScroll = document.getElementById("overflowList");

prev.addEventListener("click", function() {
  overflowXScroll.scrollBy({
    left: -500, // 100 pixels to the left
    behavior: "smooth"
  });
});

next.addEventListener("click", function() {
  overflowXScroll.scrollBy({
    left: 500, // 100 pixels to the right
    behavior: "smooth"
  });
});



