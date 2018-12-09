$(document).ready(main);


var contador = 1;

function main(){
    
    $('.boton-menu').click(function(){
        
         $(this).css({    
            'color': '#292828'
         }); 
        
         
        if(contador == 1){
            $('.menu').animate({
                left: '0'  
            });
            
            
            $('.boton-menu').click(function(){
                $(this).css({
                    'color': '#fff'
                });
            });
            
           
            contador = 0;
              
        }else{
            contador = 1;
            $('.menu').animate({
                left: '100%'  
            });
            
            $('.boton-menu').click(function(){
                $(this).css({
                    'color': '#292828'
                });
            });
            
            
            
        }
        
        
    });
    
    
}