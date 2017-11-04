$('.page-scroll').on('click', function(e){

  var tujuan = $(this).attr('href');

  var elemenTujuan =$(tujuan);
  var headerHeight = $('header').outerHeight();
  $('body').animate ({
    scrollTop: elemenTujuan.offset().top - 50
  }, 1250, 'easeInOutExpo');

  e.preventDefault();

});

(function($){
  $(document).ready(function(){
    $('.navscroll').hide();

    $(function(){
      $(window).scroll(function(){

        if($(this).scrollTop() > 600){
          $('.navscroll').fadeIn();
        } else {
          $('.navscroll').fadeOut();
        }
      });
    });

});
  }(jQuery));
