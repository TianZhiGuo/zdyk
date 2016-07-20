// 倒计时固定格式 
// html结构示例 <span class="timecount" data-timer="8123" data-ms="true" data-fn="myfn"><t>00</t>:<t>00</t>:<t>00</t>:<t>0</t></span>
// 包含时分秒的外壳样式<t>需要自己写
// timecount  为标志标明需要倒计时  data-timer剩余毫秒数  data-ms显示毫秒 data-fn回调函数名称注意不要加"()";
// 执行方法手动（自动识别带相关标签的元素  $.go_time();
;(function() {
    var changeTimeStamp = function(distancetime, mst, fn) {
        if (distancetime > 0) {
            var ms = parseInt(Math.floor(distancetime % 1000) / 100);
            var sec = Math.floor(distancetime / 1000 % 60);
            var min = Math.floor(distancetime / 1000 / 60 % 60);
            var hour = Math.floor(distancetime / 1000 / 60 / 60);
            sec = sec < 10 ? "0" + sec : sec;
            min = min < 10 ? "0" + min : min;
            hour = hour < 10 ? "0" + hour : hour;
            if (mst) {
                return "<t>" + hour + "</t>:<t>" + min + "</t>:<t>" + sec + "</t>:<t>" + ms + "</t>";
            } else {
                return "<t>" + hour + "</t>:<t>" + min + "</t>:<t>" + sec + "</t>";
            }
        } else {
            if (mst) {
                return "<t>00</t>:<t>00</t>:<t>00</t>:<t>0</t>";
            } else {
                return "<t>00</t>:<t>00</t>:<t>00</t>";
            }
        }
    };
    $.fn.time_go = function(i) {
        var _this = $(this);
        var a = _this.data("timer");
        if(a<=0){
            return false;
        }
        var ms = _this.data("ms");
        var _jtime;
        if (ms) {
            _jtime = 100;
        } else {
            _jtime = 1000;
        }
        var list = [];
        i = new Date().getTime() + i;
        _this.html(changeTimeStamp(a, ms)).data("timer", a);
        a -= _jtime;
        list[i] = setInterval(function() {
            _this.html(changeTimeStamp(a, ms)).data("timer", a);
            if (a <= 0) {
                clearInterval(list[i]);
                var _thisfn;
                if (_this.data("fn")) {
                    try {
                        _thisfn = eval(_this.data("fn"));
                        _thisfn(_this);
                    } catch (e) {
                       // console.log("倒计时定义的回调函数不存在");
                    }
                } else {
                   // console.log("没有回调函数");
                }
            };
            a -= _jtime;
        }, _jtime);
    };
    $.go_time = function() {
        $(".timecount").each(function(i) {
            $(this).removeClass('timecount').time_go(i);
        });
    };
})($);