// 基于jq或者zepto 的倒计时
// html 格式 
// <div class = "delay-box">
//      <img data-imgsrc="真正的src" src="默认图片的路径" class="delay-img">
// </div>
// 原理就是判断需要懒加载的容器是否出现在了屏幕视图中
$.delayLoad = function(){
    var sl = setInterval(function(){
        // 已经滚动的高度
        var d_scro = document.documentElement.scrollTop || document.body.scrollTop;
        // 屏幕高度+滚动的高度= 屏幕底部位置距离文档顶部的高度 （这个高度一下的元素是没加载的）
        var d_lip = $(window).height()+d_scro;
        // 获取第一个待加载的容器
        var d_box =   $(".delay-box")[0];
        // 如果这个容器存在并且 他距离文档顶部的距离 小于了 屏幕底部位置距离文档顶部的高度 则说明该元素已经出现在了可视区域里
        if(d_box && d_box.offsetTop<=d_lip){
            var _img = $(d_box).removeClass('delay-box').find(".delay-img"); 
            _img.each(function(){
                var _src = $(this).data("imgsrc");
                $(this).attr("src",_src);
                $(this).addClass('delay-open');
            })
        }else{
            // 如果还没出现在屏幕范围内就清除定时器
            clearInterval(sl);
            return false;
        }   
    },30)   
}