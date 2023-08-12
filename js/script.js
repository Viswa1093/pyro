/*let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
} 

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
} 

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
} */

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    //shoppingCart.classList.remove('active');
    //searchForm.classList.remove('active');
    //loginForm.classList.remove('active');
} 

window.onscroll = () =>{
    //shoppingCart.classList.remove('active');
    //searchForm.classList.remove('active');
    //loginForm.classList.remove('active');
    navbar.classList.remove('active');
} 

document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () =>{
        document.querySelector('.popup-video').style.display='block';
        document.querySelector('.popup-video video').src=vid.getAttribute('src');
    }
    
});

document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display='none';
}

var swiper = new Swiper(".product-slider", {
    /*slidesPerView: 1,*/
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    /*pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },*/
    breakpoints: {
      0: {
        slidesPerView: 1,
        //spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        //spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        //spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    /*slidesPerView: 1,*/
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    /*pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },*/
    breakpoints: {
      0: {
        slidesPerView: 1,
        //spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        //spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        //spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".blog-slider", {
    /*slidesPerView: 1,*/
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    /*pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },*/
    breakpoints: {
      0: {
        slidesPerView: 1,
        //spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        //spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        //spaceBetween: 50,
      },
    },
  });
