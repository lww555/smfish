/**
 * Created by Administrator on 2016/8/23.
 */
var detailTpl= require('../tpls/detail.string');
SPA.defineView('detail',{
    html:detailTpl,
    plugins: [{
            name: 'avalon',
            options: function (vm) {
                vm.lifecontainer = [];
                vm.tiezilist=[];
            }
        }
    ],
    bindEvents:{
        "show":function(){
            var vm=this.getVM();
            $.ajax({
                url:'/api/livelist.php',
                data:{
                    type:'detail',
                    pageNo:'1'
                },
                success:function(msg){
                   /* vm.navlist=msg.data.icons;
                    vm.lifecontainer=msg.data.life;*/
                    console.log(msg)
                    vm.lifecontainer=msg.data.thread.top;
                    vm.tiezilist=msg.data.list
                }
            })

            var onOff=true;
            $(".down").on('tap',function(){
                if(onOff){
                    $(".nav_list").addClass("actions");
                }else{
                    $(".nav_list").removeClass("actions");
                }
                onOff=!onOff;
            })
            var mySwipers = new Swiper('#detail_swiper',{
                onSlideChangeStart: function(swiper){
                   var index=swiper.activeIndex;
                    $(".subNav li").eq(index).addClass("active").siblings().removeClass("active")
                }
            })
            $(".subNav li").on('tap', function () {
                mySwipers.slideTo($(this).index());
            });
            var myScroll = this.widgets.myScroll
            myScroll.on("scroll",function(){
                var aa = Math.abs(this.y)
                if(aa>44){
                    $(".detail_top").addClass("downl")
                }
                if(aa<44){
                    $(".detail_top").removeClass("downl")
                }
            })

        }
    }
})