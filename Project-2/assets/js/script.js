var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset >670) {
    nav.classList.add('bg-dark', 'shadow','fixed-top');
  } else {
    nav.classList.remove('bg-dark', 'shadow','fixed-top');
  }
});

var splide = new Splide( '.splide', {
    perPage: 3,
    gap    : '2rem',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        height : '6rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
        height : '6rem',
      },
    },
  } );
  
  splide.mount();

  ScrollReveal(
    {
    distance :"50px",
    duration:2500,
    delay : 500,
  }
  )
  ScrollReveal().reveal('.container', { delay: 150,origin: 'top' });
  ScrollReveal().reveal('.home-heading', { delay: 150,origin: 'right' });
