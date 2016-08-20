var lifeTpl = require('../tpls/life.string');
SPA.defineView("life",{
	html:lifeTpl,
	bindEvents:{
		"ready":function(){
			var mySwiper = new Swiper ('#life_swiper',{
				onSlideChangeStart: function(swiper){
					var index=swiper.activeIndex;
					$(".life_nav span").eq(index).addClass("active").siblings().removeClass("active")
				}
			})
			$(".life_nav span").on('tap', function () {
				mySwiper.slideTo($(this).index());
			});
		}
	}
})
