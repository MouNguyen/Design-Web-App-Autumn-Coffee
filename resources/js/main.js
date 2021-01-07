
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar-customize').addClass("sticky");
            // $('.navbar-customize .menu').addClass("sticky");

        }else{
            $('.navbar-customize').removeClass("sticky");
            // $('  .navbar-customize .menu').removeClass("sticky");

        }
    });
    //
    //toggle menu/nav script
    var nav = $('.navbar-customize .menu');
    var logo=$(' .navbar-customize .logo');
    var btn =$('.menu-btn');
    btn.click(function(){
        nav.toggleClass("active");
        logo.toggleClass("active");
        $('.navbar-customize').toggleClass("active");
        btn.toggleClass('close');
        $(' .menu-btn i ').toggleClass("close");
    });
    //search
    // $(".fa-search").click(function() {
    //     // var x = document.getElementsByClassName("search-box");

    //     // if (x.style.display === "none ") {
    //     //   $(".search-box").attr('style','display:block !important');
    //     // } else {
    //     //     $(".search-box").attr('style','display:none !important');
    //     // }
    //     $(".search-box").toggle();
    //     $("input[type='text']").focus();
    //   });
     $(".icon-search").click(function() {

         if($(".search-box").hasClass("search-property")==false)
         {

            $(".search-box").addClass("search-property");
            $("input[type='text']").focus();

         }
         else{
            $(".search-box").removeClass("search-property");
         }

      });
      //blog slider
      $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
    //search radio
    $("#button-search").click(function(){
        if(document.querySelector('input[name="radio-btn-search"]:checked').value == "0")
        {
            $('.button-white').attr('formAction', './resources/html/search-product.html');
            // document.getElementById("button-search").formAction="./resources/html/search-product.html";
        }
        else{
            document.getElementById("button-search").formAction="./resources/html/search-blog.html";
        }
    });

    $("#nav-search").click(function(){
        if(document.querySelector('input[name="radio-btn-search"]:checked').value == "0")
        {
            $('#nav-search').attr('formAction', './search-product.html');
            // document.getElementById("nav-search").formAction="./search-product.html";
        }
        else{
            $('#nav-search').attr('formAction', './search-blog.html');
            // document.getElementById("nav-search").formAction="./search-blog.html";
        }
    });
    //signin-signup
});

var counter = 1;

setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);



