var homeTpl = require('../tpls/home.string');
SPA.defineView("home",{
	html:homeTpl,
	// 绑定视图事件
	bindEvents:{
		'ready': function (){
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
	}
})