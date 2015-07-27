// console.log("walhh");
$(window).load(function(){
    $('.flexslider').flexslider({
        animation:"fade",
        slideshowSpeed: 3500,
        ControlsContainer:".flex-container"
    });
});


$(document).ready(function(){
 
    lebar = $(window).width();
    mainmenu = $("#main-menu");
    $("#resp-menu").click(function(){ 
         mainmenu.slideToggle(500);
    });

    $(window).resize(function(){
        if(lebar < 768){
            mainmenu.hide();
        }
        if(lebar > 768){
            mainmenu.show();
        }
    })

});

// SLIDER
$(window).load(function(){
    $('.flexslider').flexslider({
        animation:"fade",
        slideshowSpeed: 3500,
        ControlsContainer:".flex-container"
    });
});

// NAVIGASI FIX 
// $(document).ready(function(){
    
//     var stickyNavTop = $('nav').offset().top;
//     var stickyNav = function()

//     	{
//         	var scrollTop = $(window).scrollTop();

// 	        if (scrollTop > stickyNavTop) {
// 	            $('nav').addClass('fixed');
// 	        } 
// 	        else {		           
// 	            $('nav').removeClass('fixed');
// 	        }	         				
//     	};

//     // stickyNav();
//     $(window).scroll(function() {
//         stickyNav();
//     });     
// });

// $(window).resize(function() {
// var descTop = $(window).width()
// 	if (descTop > 768){ 
// 	// window.location.reload();
// 	// document.getElementById("main-menu").style.display = "none";
// 	}	
// });

$(document).ready(function()
{
	$('body .awan-latar')
		.parallax({
			mouseport: $('body'),
			xparallax:'100%',
			yparallax:0

		})
})
