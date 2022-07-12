let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');


window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchBar.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

searchBtn.addEventListener('click', () =>{
   searchBtn.classList.toggle('fa-times');
   searchBar.classList.toggle('active');
});

menuBtn.onclick = () =>{
   searchBtn.classList.remove('fa-times');
   searchBar.classList.remove('active');
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};



var swiper = new Swiper(".blogs-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoHeight:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});