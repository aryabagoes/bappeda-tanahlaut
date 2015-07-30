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

    // $('#main-menu li a').on('click', function(){
    //     $("#main-menu").hide();
    //     // $("#menu-icon").removeClass("active");
    // });

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
    if ($('body#landing').length) {
    // alert("Ada ID landing");


    // suara
    var suara  = new buzz.sound("./sound/alam",{
        formats: ["ogg"]
    });

    suara.play()
        .fadeIn()
        .loop()

    // appending button menu-icon
     if (suara.isPaused()) {
        // add play icon on button
     }else{
        // add pause icon on button
     }

    $('button#togglepause').click(function(){
        suara.togglePlay();
    })

    // 

    // awan
    $('body .awan-latar')
        .parallax({
            mouseport: $('body'),
            xparallax:'100%',
            yparallax:0

        })
    };
	
})
