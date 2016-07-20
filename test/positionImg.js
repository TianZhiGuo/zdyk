// 图片在一个固定长宽的relative容器中 撑满容器 多余的超出隐藏
// html格式
// <div width=200 height=200>
//   
$.positionImg = function(){
    $(".pos_img").each(function(){
        var th = $(this);
        // 直接父元素
        var pth = $(this).parent();
        var ph = pth.height();
        var pw = pth.width();
        var _h = th.height();
        var _w = th.width();
        // 长宽比例 的大小比较
        if(_w/_h>pw/ph){
            th.css({
                "height": ph,
                "margin-left": (pw - ph * (_w / _h)) / 2,
                "visibility":"visible"
            })  
        }else{
            th.css({
                "width": pw,
                "margin-top": (ph - pw * (_h / _w)) / 2,
                "visibility":"visible"
            })              
        }
    })
};