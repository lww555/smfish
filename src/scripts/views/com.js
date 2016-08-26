var comTpl = require('../tpls/com.string');
//var scroll = require('../utils/scroll.js');
SPA.defineView("com",{
	html:comTpl,
	
	plugins: [
    'delegated', {
      name: 'avalon',
      options: function (vm) {
        vm.livelist = [];
      }
    }
  ],
	
	bindActions: {
    'goto.more': function () {
    	//alert(1)
      SPA.open('more');
    }
  },
	

  bindEvents: {
    'show': function () {
    	
    	var mySwiper = new Swiper("#com-swiper", {
          loop: false,
          onSlideChangeStart: function(swiper){
          	//alert(1)
            var index = swiper.activeIndex;
           $('#com-nav li').eq(index).addClass('active').siblings().removeClass('active');
          }
        });
      $('#com-nav li').on('tap', function () {
        mySwiper.slideTo($(this).index());
      });
    	
    	
    	
    }
  }
  // 绑定视图事件
    	
});