$(document).ready(function(){
	
		setInterval(function(){
			$('#call').toggleClass('blink');
			},800)


setInterval(function(){
			$('#op').toggleClass('blink1');
			},1200)




	// Its add target="_blank" Attribute to All a.hr-pdf-button class
       $("a.hr-pdf-button").attr('target','_blank');
	
	   
	   //Disable right click
	/* $(this).bind("contextmenu", function(e) {
                e.preventDefault();
				//alert('Right click not allowed !!!');
            }); */
	
	
	// For deactivete right click on image
	document.addEventListener("contextmenu", function(e){
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
		//alert('Right Click Not Allowed !!!');
    }
		}, false);
		

		
		
	// Added Inner wrap for video
	//$( ".sc-video" ).wrapInner( "<div class='overlap'></div>");
	
	$('.sc-video').append("<div class='overlap'></div>");
	
	// Add some activity using URL for perticular page
	var allergy = "<?php echo $path; ?>article/127/178/allergy.html";
	
	if(window.location.pathname==allergy)
	{
		$('.about-us').addClass('allergy-page');
	}

	
	
/*Animated Hover for social network icon*/	
	$('.social-networ-wrapper a').mouseenter(function(){
		$(this).animate({right:"0"},700)
		});
		
	$('.social-networ-wrapper a').mouseout(function(){
		$(this).animate({right:"-83"},500)
		});
		
// home page slide 
jQuery('.bxslider').bxSlider({
   adaptiveHeight: true,
   auto: true,
   speed: 1000,
   mode: 'fade'
}); 
   
   
// add  Unique class for All pages
var loc = window.location.href;
var output  = loc.split('/').pop().split('.').shift()
$("body").addClass("page" + output)
 
 
 //Tab js 
$('.investor-list li').click(function() {
if(!$(this).hasClass('investor-selected')) {
$('.investor-list li').removeClass('investor-selected');
$(this).addClass('investor-selected');
}

var selectionId = $(this).attr('id');
$('.investor-page').css('display', 'none');
$('.investor-page#'+selectionId).css('display', 'block');
});   	

 //Home pape tab js 
$('.abt-hm-list li').click(function() {
if(!$(this).hasClass('abt-hm-selected')) {
$('.abt-hm-list li').removeClass('abt-hm-selected');
$(this).addClass('abt-hm-selected');
}

var selectionId = $(this).attr('id');
$('.abt-hm-page').css('display', 'none');
$('.abt-hm-page#'+selectionId).css('display', 'block');
}); 

// add class
jQuery('.our-service-row ul li .service-row-img img,.service-row-01 .sprite,.service-row-img img,.care-with-convenience ul li img,.services-bottom-section ul li img, .services-bottom-section ul li .sprite,.hd-top-rit i,.service-row-01 i').addClass('transition');


// notice board 
jQuery('.notice-board').bxSlider({
  //adaptiveHeight: true,
  auto: true,
  mode: 'fade'
}); 

// flexslider

    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth:368,
      auto:true,
	  slideshow:true,
      itemMargin:22     
    });



  $('.flexslider-main').flexslider({
    animation: "fade"
  });

  
      // Slideshow 1
$("#slider1").responsiveSlides({
	auto: true,
	pager: false,
	nav: true,
	//maxwidth: 800,
	speed: 2000,	
	namespace: "centered-btns"
});





// accordion 
jQuery(".accordion_example1").smk_Accordion();
			jQuery(".accordion_example2").smk_Accordion({
				closeAble: true, //boolean
			});

			jQuery(".accordion_example3").smk_Accordion({
				showIcon: false, //boolean
			});

			jQuery(".accordion_example4").smk_Accordion({
				closeAble: true, //boolean
				closeOther: false, //boolean
			});

			jQuery(".accordion_example5").smk_Accordion({closeAble: true});

			jQuery(".accordion_example6").smk_Accordion();
			
			jQuery(".accordion_example7").smk_Accordion({
				activeIndex: 2 //second section open
			});
			jQuery(".accordion_example8, .accordion_example9").smk_Accordion();


// custome light 
jQuery('.lightbox_trigger').click(function(e) {	
//alert();	
		//prevent default action (hyperlink)
		var id = jQuery(this).attr('id');
		//alert(id);
		e.preventDefault();		
		if (jQuery('.offer-lightbox').length > 0) { // #lightbox exists		   	
			//show lightbox window - you could use .show('fast') for a transition
			jQuery("#" + id).show();
			//jQuery('.offer-lightbox').show();
		}			
	});	
	//Click anywhere on the page to get rid of lightbox window
	jQuery('.closed-icon').click('click', function() {   //must use live, as the lightbox element is inserted into the DOM
		jQuery('.offer-lightbox').hide();
});


jQuery('.lightbox_trigger').click(function(e) {	
//alert();	
		//prevent default action (hyperlink)
		e.preventDefault();		
		if (jQuery('.offer-lightbox').length > 0) { // #lightbox exists		   	
			//show lightbox window - you could use .show('fast') for a transition
			jQuery(this).next('.offer-lightbox').show();			
		}			
	});	
	//Click anywhere on the page to get rid of lightbox window
	jQuery('.closed-icon').click('click', function() {   //must use live, as the lightbox element is inserted into the DOM
		jQuery('.offer-lightbox').hide();
});






jQuery('.lightbox_trigger-packages').click(function(e) {	
//alert();	
		//prevent default action (hyperlink)
		e.preventDefault();		
		if (jQuery('.offer-lightbox-packages').length > 0) { // #lightbox exists		   	
			//show lightbox window - you could use .show('fast') for a transition
			jQuery(this).next('.offer-lightbox-packages').show();			
		}			
	});	
	//Click anywhere on the page to get rid of lightbox window
	jQuery('.closed-icon').click('click', function() {   //must use live, as the lightbox element is inserted into the DOM
		jQuery('.offer-lightbox-packages').hide();
});


// light box js 
	jQuery('.mobile_trigger').click(function(e) {		
		//prevent default action (hyperlink)
		e.preventDefault();		
		if (jQuery('.mobile-data').length > 0) { // #lightbox exists		   	
			//show lightbox window - you could use .show('fast') for a transition
			jQuery(this).next('.mobile-data').show().addClass('top-row');
			
		}			
	});	
	//Click anywhere on the page to get rid of lightbox window
	jQuery('.closed-icon').click('click', function() {   //must use live, as the lightbox element is inserted into the DOM
		jQuery('.mobile-data').hide();
		
		
});
	
	
			
// certificate light box 			
$(".group1").colorbox({rel:'group1'});				
$('nav').easyPie();				
			


//Examples of how to assign the Colorbox event to elements
 $(".group1").colorbox({rel:'group1'});
				

//sticky head  
jQuery(window).scroll(function() {
	if(jQuery(window).width() > 1024){	
	   if(jQuery(this).scrollTop() > 250){
			jQuery('.hd-fixed').addClass('sticky');
		}
		else{
			jQuery('.hd-fixed').removeClass('sticky');
		}
	}	
}); 

			

}); // document end
 
