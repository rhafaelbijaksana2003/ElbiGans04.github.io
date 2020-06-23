  $('.page-scroll').on('click' , function(e){
    const tujuan = $(this).attr('href');
    const Elementtujuan = $(tujuan);


    $('html , body').animate({
      scrollTop: Elementtujuan.offset().top - 60
     });



    e.preventDefault();
  });
  

