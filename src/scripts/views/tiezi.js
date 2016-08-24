var tieziTpl = require('../tpls/tiezi.string');
SPA.defineView("tiezi",{
	html:tieziTpl,
	init: {
	    // getItem: function (id, res) {
	    //   for (var i = 0; i < res.data.length; i++) {
	    //     if(res.data[i].id == id) {
	    //       return res.data[i];
	    //     }
	    //   }
	    // }
	},
	plugins: [
	    'delegated', {
	      name: 'avalon',
	      options: function (vm) {
	        vm.detail = {};
	      }
	    }
	],
	
	  bindEvents: {
	    'show': function () {
	      var that = this;
	      var vm = this.getVM();

//    $.ajax({
//      // url: '/api/livelist.php',
//      url: '/api/getDetail.php',
//      type: 'get',
//      // data: {
//      //   type: 'more',
//      //   pageNo: 1
//      // },
//      data: {
//        id: that.param.id
//      },
//      success: function (res) {
//        vm.detail = res.data;
//      }
//    })
    	}
 	 }
})
