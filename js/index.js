$(document).ready(function(){
const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElemOnScroll);


// scroll reveal effect

const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = function () {
  for (let i = 0; i < revealElements.length; i++) {

    // add revealed class on element, when visible in window
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
        revealElements[i].classList.add("revealed");

      // remove long transition from button, after 1 second
      if (revealElements[i].classList.contains("j-btn")) {
        setTimeout(function () {
          revealElements[i].style.transition = "0.25s ease";
        }, 1000);
      }
    }

  }
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


 
//   slider here
$("#hero-fish").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    navText: ['<', '>'],
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    duration: 3000,
    responsive: {
      0: {
        nav: false,  
        dots: true
        },
      768: {
        nav: true,
        dots: false
      }
    }
  }); 


//   slider here
$("#blog").owlCarousel({
  loop: true,
  margin: 43,
  items: 3,
  nav: false,
  navText: ['<', '>'],
  dots: false,
  smartSpeed: 1000,
  autoplay: true,
  duration: 3000,
  responsive: {
    0: {
      nav: false,  
      dots: false,
      items: 1
    },
    568: {
      nav: true,
      dots: false,
      items: 2
    }
  }
}); 


 $navBar = $(".header");
  window.addEventListener("scroll", function(){
    $navBar.toggleClass('active', window.scrollY > 20);
  })



//  //Scroll Reveal
//  const Sr = new ScrollReveal({
//   reset: true,
//   distance: '50px',
//   delay: 100
// });

// // reveal target elements && change class elements

// Sr.reveal('#bnai',{delay: 200, origin: 'top'});
// Sr.reveal('#bnaii, #bna-btn',{delay: 200, origin: 'left'});
// Sr.reveal('#bnaiii, #bnbiii',{delay: 100, origin: 'bottom'});


//   });

 
// $modal = $('.modal');
// const naviBtn = document.querySelector("#login-btn");
// const closeBtn = document.querySelector(".close");

// naviBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);

// function openModal() {
//   modal.style.display = 'block'
// };

// function closeModal() {
//   modal.style.display = 'none'
// };

// function outsideClick(e) {
//   if (e.target == modal) {
//     closeModal()
//   };
// };
});