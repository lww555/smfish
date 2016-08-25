var loginTpl = require('../tpls/login.string');
SPA.defineView("login",{
	html:loginTpl,
		plugins: [
	    'delegated', {
	      name: 'avalon',
	      options: function (vm) {
	        vm.detail = {};
	      }
	    }
	  ],
	  bindActions: {
	    'back': function () {
	      this.hide();
	    },
	    "login":function(){
	    	var that=this
	    	$.ajax({
		        url: '/api/login.php',
		        type: 'get',
		        data: {
		          type: 'more',
		          pageNo: 1
		        },
		        success:function(res){
		        	var onOff=true;
		        	for(var i=0;i<res.data.length;i++){
		        		if(res.data[i].name==$(".user").val()&&res.data[i].password==$(".password").val()){
		        			localStorage.name=$(".user").val();
		        			
		        			that.hide();
		        			onOff=!onOff;
		        		}
		        	}
		        	if(onOff){
		        		console.log("密码活账号错误")
		        	}
		        }
			});
			 if(localStorage.name=$(".user").val()){
		        				$(".h_mine2").show();
		        				$(".h_mine1").hide();
		        				
		        			}
			
	    }
	  }
	 
//		if(localStorage.name=$(".user").val()){
//				var $div=$(".h-log")
//				var $img=$("<img action-type="goto.login" ms-attr-data-id="el.id" src="./images/h_1.jpg"/>") ;
//				var $dl=$("<dl></dl>");
//				var $dt=$("<dt action-type="goto.login" ms-attr-data-id="el.id">暂无信息，请登录！</dt>");
//				var $dd=$("<dd>1234567</dd>");
//				var $i=$("<i class="iconfont">&#xe606;</i>");
//				 $img.appendTo($div);
//				 $dl.appendTo($div);
//				 $i.appendTo($div);
//				 $dt.appendTo($dl);
//				 $dd.appendTo($dl);
//		
//			}else{
//				var $div=$(".h-log")
//				var $img=$("<img action-type="goto.login" ms-attr-data-id="el.id" src="./images/h_1.jpg"/>");
//				var $dl=$("<dl></dl>");
//				var $dt=$("<dt action-type="goto.login" ms-attr-data-id="el.id">暂无信息，请登录！</dt>");
//				var $dd=$("<dd>1234567</dd>");
//				var $i=$("<i class="iconfont">&#xe606;</i>");
//				 $img.appendTo($div);
//				 $dl.appendTo($div);
//				 $i.appendTo($div);
//				 $dt.appendTo($dl);
//				 $dd.appendTo($dl);
//			}
//		
	
//	var $dt=$("<dt action-type="goto.login" ms-attr-data-id="el.id">暂无信息，请登录！</dt>");
//	 $dt.appendTo($(".h-log"));
	
})
