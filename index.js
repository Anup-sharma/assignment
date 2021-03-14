$( document ).ready(function() {
    
    $(window).resize(function() {
        var viewportWidth = $(window).width();
        if(viewportWidth < 1200){
            $(".right_panel").hide();
            
        }else{
            $(".right_panel").show();
            
        }
    });
    
    
});

