var mineTpl = require('../tpls/mine.string');

SPA.defineView("mine",{
	html:mineTpl,
	plugins:[
	    'delegated', {
	      name: 'avalon',
	      options: function (vm) {
	        vm.livelist = [];
	        vm.isShowLoading = true;
	      }
	    }
	],
	//绑定事件，去登录页
	bindActions: {
    'goto.login': function (el, data) {
      SPA.open('login', {
        param: {
          id: data.id
        }
      });
    }
  }
})
