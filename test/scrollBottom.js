// 本函数基于zepto 或者 jquery  
// 监听某个元素的滚动事件 (一般是body);
// 判断页面是否滚动到了底部
$.fn.scrollBottom = function(callback) {
    // 是否可以触发回调函数的开关
    var can = true;    
    $(this).scroll(function() {
        //滑动块距离顶部的高度 ，前面是兼容火狐(即已经滚动了的高度))
        var a = document.documentElement.scrollTop || document.body.scrollTop; 
        //可滑动区域的总体高度 （即整个文档高度）
        var b = document.body.scrollHeight; 
        //可视区域的高度 这个是固定的 （即手机屏幕的高度）
        var c = document.documentElement.clientHeight; 
        // 已经滚动高度 + 手机屏幕高度 >= 文档高度 则滚动到了文档最底部
        if (a + c >= b-1 && can) {              
            can = false;
            // 执行回调函数
            if ($.isFunction(callback)) {
                callback();
            };
            // 防止反复滚动频繁 导致回调函数反复调用
            setTimeout(function(){
                can = true;
            },1500);
        }
    })
};