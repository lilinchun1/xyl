/**
 * Created by 闫继鹏 on 2014/12/1.
 */
$(function(){
    countDown("2014/12/12 00:00:00","#colockbox1");
});
function countDown(time,id){
    var day_elem = $(id).find('.day');
    var hour_elem = $(id).find('.hour');
    var minute_elem = $(id).find('.minute');
    var second_elem = $(id).find('.second');
    var end_time = new Date(time).getTime(),//月份是实际月份-
        sys_second = (end_time-new Date().getTime())/1000;1
    var timer = setInterval(function(){
        if (sys_second > 1) {
            sys_second -= 1;
            var day = Math.floor((sys_second / 3600) / 24);
            var hour = Math.floor((sys_second / 3600) % 24);
            var minute = Math.floor((sys_second / 60) % 60);
            var second = Math.floor(sys_second % 60);
            day_elem && $(day_elem).text(day<10?"0"+day:day);//计算天
            $(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
            $(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
            $(second_elem).text(second<10?"0"+second:second);//计算秒杀
        } else {
            alert("到点了");
            clearInterval(timer);
        }
    }, 1000);
}
