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

// HOME HARMBURGER MENU
const mbtn = document.getElementById('menu-btn');
const mlist = document.getElementById('menu-list');
const mopen = document.getElementById('m-open');
const mclose = document.getElementById('m-close');

mbtn.addEventListener('click', (e)=>{
    mlist.classList.toggle("hidden");
    mclose.classList.toggle("hidden")
    mopen.classList.toggle("hidden")
})



