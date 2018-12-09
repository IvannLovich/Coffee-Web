$(document).ready(function(){
    
    $(window).scroll(function(){
        var anchoVentana = $(window).width();
        
        if (anchoVentana > 800){
            var scroll = $(window).scrollTop();
            
            
            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)' // Esto es igual a: translate(0px, 50px)
                
            });
        }
        
        
    });
    
});