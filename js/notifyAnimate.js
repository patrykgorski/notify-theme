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
function slideText(){
	this.slideStart = this.slideStart || 0,
	this.slideAnimationTime = this.slideAnimationTime || 500,
	this.slideTime = this.slideTime || 4000,
	this.slideTypeAnimations = '',
	this.slideLength = 0,
	this.slideStartFun = function(s){
		var obj = this;
		$(s).eq(this.slideStart).fadeIn(300, function(){
			setTimeout(function(){
				obj.slide(s, obj);
			}, obj.slideTime);
		});

	},
	this.slide = function(s, o){
		this.slideLength = $(s).length;
		$(s).eq(o.slideStart).fadeOut(o.slideAnimationTime, function(){
			if(o.slideLength-1<=o.slideStart){
				o.slideStart=0;	
			}else{
				o.slideStart++;
			}
			$(s).eq(o.slideStart).fadeIn(o.slideAnimationTime, function(){
				setTimeout(function(){
					o.slide(s, o);
				}, o.slideTime);
			});
		});
	}
}

/*
$('.slide-text p').eq(headerSlide.slideStart).fadeIn(300, function(){
	setTimeout(function(){
		headerSlide.slide(".slide-text p", headerSlide);
	}, headerSlide.slideTime);
});

$('.op-text p').eq(opinionSlide.slideStart).fadeIn(300, function(){
	setTimeout(function(){
 		opinionSlide.slide(".op-text p", opinionSlide);
 	}, opinionSlide.slideTime);
 });

/* END SLIDE */

/*
var slideText = {
	slideStart:this.slideStart || 0,
	slideAnimationTime:this.slideAnimationTime || 500,
	slideTime:this.slideTime || 4000,
	slideTypeAnimations:'',
	slideLength:0,
	slide:function(s){
		this.slideLength = $(s).length;
		$(s).eq(slideText.slideStart).fadeOut(slideText.slideAnimationTime, function(){
			if(slideText.slideLength-1<=slideText.slideStart){
				slideText.slideStart=0;	
			}else{
				slideText.slideStart++;
			}

			$(s).eq(slideText.slideStart).fadeIn(slideText.slideAnimationTime, function(){
				setTimeout(function(){
					slideText.slide(".slide-text p");
				}, slideText.slideTime);
			});
		});
	}
}

$('.slide-text p').eq(slideText.slideStart).fadeIn(300, function(){
	setTimeout(function(){
		slideText.slide(".slide-text p");
	}, 2000);
});
*/

