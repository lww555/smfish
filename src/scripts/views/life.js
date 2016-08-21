var lifeTpl = require('../tpls/life.string');
SPA.defineView("life",{
	html:lifeTpl,
	plugins: [{
		name: 'avalon',
		options:function(vm){
			vm.navlist=[];
			vm.lifecontainer=[];
			vm.car_navlist=[];
			vm.car_container=[];
		}
	}],
	bindEvents:{
		"show":function(){
			var vm = this.getVM();
			$.ajax({
				url:"/smfish/mock/life_json/eat.json",
				success:function(msg){
					vm.navlist=msg.data.icons;
					vm.lifecontainer=msg.data.life;
				}
			})
			$.ajax({
				url:"/smfish/mock/life_json/car.json",
				success:function(msg){
					vm.car_navlist=msg.data.icons;
					vm.car_container=msg.data.life;
				}
			})
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
