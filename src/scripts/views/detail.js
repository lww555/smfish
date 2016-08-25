/**
 * Created by Administrator on 2016/8/23.
 */
var detailTpl= require('../tpls/detail.string');
SPA.defineView('detail',{
    html:detailTpl,
    bindEvents:{
        "show":function(){
            var onOff=true;
            $(".down").on('tap',function(){
                if(onOff){
                    $(".nav_list").addClass("actions");
                }else{
                    $(".nav_list").removeClass("actions");
                }
                onOff=!onOff;
            })
        }
    }
})