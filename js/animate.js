
$(function () {
$('.home').animate({width:'100%'},100);
$('.home').animate({height:'100vh'},800,function(){
    $('.navbar').animate({height:'10vh'},function(){
       $('.nav-link').slideDown(600,function(){
           $('button').show(600,function(){
            $('.home-info h2').show(500,function(){
                $('.home-info h3').show(1000,function(){
                    $('home-info i').fadeIn(400); 
                    $('.connect').show(600 ,function(){
                        $('.clock').show(700);
                    });

                    });
                });
               });
           });
        });
    });
    $('.footer').animate({height:'6vh'},700);
    $('.connect').animate({top:'0'})


$(window).scroll(function(){
    let windowscroll = $(window).scrollTop();
    let aboutoffset = $('.about').offset().top
if(windowscroll > aboutoffset-250){
    $('#heading').slideDown(1000,function(){
        $('.about .row').slideDown(1000)
        $('.about .row').css('display','flex');
        $('.clock').hide(400);
        $('.Pfojectsslide').show(1000,function(){
           if(windowscroll > 1500){
               $('#projects').show(1000,function(){
                $('#projects .col-md-3').show(2000,function(){
                    $('#contact').slideDown(2000);
                   
                });
               })
           }
        });
    })
}
else if (windowscroll < aboutoffset-250)  {
    $('#heading').hide(200,function(){
        $('.about .row').hide(1000)
        $('.clock').show(400);
        $('.Pfojectsslide').hide(1000,function(){
        })
        $('#projects').hide(2000,function(){
            $('#projects .col-md-3').hide(2000);
        })
       

    })  
}
})
$("a[href^='#]").click(function(eventInfo){
    let aHref =eventInfo.target.getAttribute('href');
  let section = $(aHref).offset().top;
  $('body').animate({scrollTop:section},1000) 
  })
$(document).ready(function(){
    $('.home').slideDown(500);
})
});  
   

  


   
   