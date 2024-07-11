var header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (this.scrollY > 100) {
        header.classList.add("scrolled")
    }
    else {
        header.classList.remove("scrolled")
    }
})


$(document).ready(function () {
    $('.tour-destination-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
    });
  });

  $(function() {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});