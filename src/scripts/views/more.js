var moreTpl = require('../tpls/more.string');
SPA.defineView("more",{
	html:moreTpl,
	
	plugins: [
    'delegated', {
      name: 'avalon',
      options: function (vm) {
        vm.more=[];
      }
    }
  ],
	
	bindActions: {
    'back': function () {
      this.hide();
    }
  },
	
	bindEvents: {
    'show': function () {
    	
    	/*var vm = this.getVM();
    	
    	$.ajax({
        url: '/api/more.php',
        type: 'get',
        data: {
          type: 'more',
          pageNo: 1
        },
        success: function (res) {
        	vm.more=res.data.serve;
            console.log(res.data.serve);
        }
      });*/
    	
    	var mySwiper = new Swiper("#more-swiper", {
          loop: false,
          effect : 'fade',
          onSlideChangeStart: function(swiper){
          	//alert(1)
            var index = swiper.activeIndex;
           $('#more-nav li').eq(index).addClass('activer').siblings().removeClass('activer');
          }
        });
      $('#more-nav li').on('tap', function () {
      	effect : 'fade',
        mySwiper.slideTo($(this).index());
      });
    	
    	
    	
    }
  }
})