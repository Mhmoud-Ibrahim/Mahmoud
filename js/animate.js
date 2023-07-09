
$('.home').animate({width:'100%'},100);
$('.home').animate({height:'100vh'},800,function(){
    $('.navbar').animate({height:'10vh'},function(){
       $('.nav-link').slideDown(600,function(){
           $('button').show(600,function(){
            $('.home-info h2').show(500,function(){
                $('.home-info h3').show(1000,function(){
                    $('home-info i').fadeIn(400,function(){
                        $('#typing').animate({width:'50%'},400);
                        $('#typing').animate({marginLeft:'50%'},400,function(){
                                   

                        });});
                    $('.footer').animate({height:'5vh'},function(){
                        $('.footer').show(500,function(){
                            $('.conect').show(600)
                        })
                    })
                })
            });
           });
       });
    });
});
