/*
DOC.animate
1, Preloaders
2. SliderText
3. SlideMobile
*/

/**DEBUG**/

function c(text){
	return console.log(text);
}

function a(text){
	return alert(text);
}


/**END_DEBUG**/

/* 0. Load start function */
$(window).load(function(){
	preloaders.preloaderMobileOff();
});

/* 1. PRELOADERS */

var preloaders = {
	preloaderMobileOff: function(){
		$('.mobile-preloader').velocity({ left:'-101%'  }, [ 0.94, 0, 0.1, 0.81], 1500, function(){
			$('.mobile-preloader').css('display', 'none');
		});
	},
	preloaderMobileOn: function(){
		$('.mobile-preloader').css('display', 'block');
		$('.mobile-preloader').velocity({ left:'0'  }, [ 0.94, 0, 0.1, 0.81], 1500, function(){
		});
	}
}

/* END PRELOADERS */

/* 2. Slide*/

var slideText = {
	slideStart:this.slideStart || 0,
	slideAnimationTime:this.slideAnimationTime || 500,
	slideTime:this.slideTime || 4000,
	slideTypeAnimations:'',
	slideLength:$('.slide-text p').length,
	slide:function(){
		$('.slide-text p').eq(slideText.slideStart).fadeOut(slideText.slideAnimationTime, function(){
			if(slideText.slideLength-1<=slideText.slideStart){
				slideText.slideStart=0;	
			}else{
				slideText.slideStart++;
			}

			$('.slide-text p').eq(slideText.slideStart).fadeIn(slideText.slideAnimationTime, function(){
				setTimeout(slideText.slide, slideText.slideTime);
			});
		});
	}
}

$('.slide-text p').eq(slideText.slideStart).fadeIn(300, function(){
	setTimeout(slideText.slide, 2000);
});