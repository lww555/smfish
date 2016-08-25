var homeTpl = require('../tpls/home.string');
var scroll = require('../utils/scroll.js');
SPA.defineView("home",{
	html:homeTpl,

	  	plugins: ['delegated', {
		    name: 'avalon',
		    options: function (vm) {
		      vm.home = [];
		      vm.nav=[];
		      vm.list=[];
		    }
		}],
		bindActions: {
		    'goto.tiezi': function (el, data) {
		      SPA.open('tiezi', {
		        param: {
		          id: data.id
		        }
		      });
		    }
		},
	// 绑定视图事件
	bindEvents:{
		'show': function (){
			var vm = this.getVM();
		    $.ajax({
		        url: '/api/home.php',
		        type: 'get',
		        data: {
		          type: 'more',
		          pageNo: 1
		        },
		        success: function (res) {
		          vm.home = res.data.tui;
		          vm.nav = res.data.icons;
		          vm.list = res.data.list;

//				//轮播
				 	var mySwiper = new Swiper ('.swiper-container', {
					    direction:'horizontal',
					    loop: true,
					    autoplay: 3000,
					    // 如果需要分页器
					    pagination:'.swiper-pagination',
					    paginationClickable: true,
					    autoplayDisableOnInteraction :false
					}); 
		        }
	      });
	      //上啦加载，下拉刷新
	      scroll({
	        scroll: this.widgets.myScroll,
	        vm: vm
	      })
		}
		
	}
})