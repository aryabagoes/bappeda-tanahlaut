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
    // toggle icon function
    function togglepauseicon(obj,button,playicon,pauseicon){
        // appending button menu-icon
        if (obj.isPaused()) {
            // add play icon on button
            button.html(playicon);
        }else{
            // add pause icon on button
            button.html(pauseicon);
        }
    }


    if ($('body#landing').length) {
    // alert("Ada ID landing");

    playicon = "<i class=\"fa fa-play\"></i> Play";
    pauseicon = "<i class=\"fa fa-pause\"></i> Pause";
    togglepause = $('button#togglepause');

    // suara
    var suara  = new buzz.sound("./sound/alam",{
        formats: ["ogg"]
    });

    // autoplay suara dengan efek fadein dan loop
    suara.play()
        .fadeIn()
        .loop()

    // callback function 
    togglepauseicon(suara,togglepause,playicon,pauseicon);

    // toggle suara yang jalan
    togglepause.click(function(){
        suara.togglePlay();
        togglepauseicon(suara,togglepause,playicon,pauseicon);
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
