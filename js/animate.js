
$('.home').animate({width:'100%'},100);
$('.home').animate({height:'100vh'},800,function(){
    $('.navbar').animate({height:'10vh'},function(){
       $('.nav-link').slideDown(600,function(){
           $('button').show(600,function(){
            $('.home-info h2').show(500,function(){
                $('.home-info h3').show(1000,function(){
                    $('home-info i').fadeIn(400); 
                    $('.connect').show(600,function(){
                        $('.about').show(300,function(){
                            $('.projects').show(300)
                        })
                    })
                    });
                });
               });
           });
        });
    });
 



    $('.footer').animate({height:'6vh'},700);
    $('.connect').animate({top:'0'})
   