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

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.prev-slider'
      });

      $('.prev-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
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
var sidenav = document.getElementById("sidenav")

const showSidenav=()=>{
    sidenav.classList.add("show")

}
const hideSidenav=()=>{
    sidenav.classList.remove("show")
}