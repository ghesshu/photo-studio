import 'tw-elements';


// const track = document.querySelector('.slider-track');
// const prevButton = document.querySelector('.btn-prev');
// const nextButton = document.querySelector('.btn-next');

// prevButton.addEventListener('click', () => {
//   track.scrollLeft -= track.offsetWidth;
// });

// nextButton.addEventListener('click', () => {
//   track.scrollLeft += track.offsetWidth;
// });



// const prev = document.getElementById("prevClick")
// const next = document.getElementById("nextClick")
// const oList = document.getElementById("overflowList")



// prev.addEventListener("click", function(){
//     oList.scrollLeft -= 50;
// });

// next.addEventListener("click", function(){
//     oList.scrollLeft += 50;
// })

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



