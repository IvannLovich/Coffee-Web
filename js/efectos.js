 $(document).ready(function(){
    
    
    
    
    // EFECTO MENU
    
    
    
    $('.menu a').each(function(index, elemento){
        
        $(this).css({
            'top' : '-200px'
        });
        
        $(this).animate({
            top: '0'    
        }, 2000 + (index * 500));
        
        
    });
    
    
    
    // EFECTO HEADER
    
    
    
    
     if( $(window).width() > 800 ){
    $('header .textos').css({
        opacity: 0,
        marginTop: 0
               
    });
        
        
     $('header .textos').animate({
        opacity: 1,
        marginTop: '-80px'  
    }, 1500);
        
        
}
 
    
    
    //OCULTAR Y MOSTRAR BOTON IR ARRIBA
    
    
    
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });
    
    
    
    //INICIAMOS SMOOTH-SCROLL


    smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels

    });
    
    
    
     // SCROLL DEL MENU
    
    
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
    
    
    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            
            scrollTop: acercaDe     
        }, 1500);
    })
    
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            
            scrollTop: menu     
        }, 1500);
    })
    
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            
            scrollTop: galeria     
        }, 1500);
    })
    
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            
            scrollTop: ubicacion     
        }, 1500);
    })
    
    
    
    
    
    
     
});















