AOS.init({
    duration: 1000,
      delay: 300,
  });


// ABOUT HARMBURGER MENU
const mbtn = document.getElementById('menu-btn');
const mlist = document.getElementById('menu-list');
const mopen = document.getElementById('m-open');
const mclose = document.getElementById('m-close');

mbtn.addEventListener('click', (e)=>{
    mlist.classList.toggle("hidden");
    mclose.classList.toggle("hidden")
    mopen.classList.toggle("hidden")
})

