$().ready(() => {
  //Slick Carousel for Testimonial
  $('.testimonial-container').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    accessibility: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          accessibility: false,
          arrows: false,
        },
      },
    ],
  });
});
