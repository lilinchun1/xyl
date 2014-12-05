/**
 * Created by 闫继鹏 on 2014/12/2.
 */
function teambuy_num_input(teambuy_num_input){
    var c=$(teambuy_num_input);
    var teambuy_num= c.val();
    if(/[^\d]/.test(teambuy_num)){//替换非数字字符
        var temp_amount=c.val().replace(/[^\d]/g,'');
        $(teambuy_num_input).val(temp_amount);
    }
    check_stock(teambuy_num);//检查库存方法
}

//检查库存方法
function check_stock(teambuy_num){
    var stock_num=parseInt($("#stock_num").text());//获取静态库存数量
    if(teambuy_num>stock_num){
        alert("超过库存");
        $("#teambuy_num_input").val(stock_num);
        return false;
    }else{
        return true;
    }

}


$(function() {
    var mouse_event = 'touchstart';//事件变量：测试PC环境改为click   MOBILE 环境:touchstart
    $('#teambuy_num_left').on(mouse_event, function () {
        var teambuy_num = $("#teambuy_num_input").val();//获取团购数量
        teambuy_num--;
        check_stock(teambuy_num);//检查库存方法
        if (teambuy_num == 0) {
            alert("为空");
        } else {
            $("#teambuy_num_input").val(teambuy_num);
        }
    });
    $('#teambuy_num_right').on(mouse_event, function () {
        var teambuy_num = $("#teambuy_num_input").val();//获取团购数量
        teambuy_num++;
        var check = check_stock(teambuy_num);//检查库存方法
        if (check == true) {
            $("#teambuy_num_input").val(teambuy_num);
        }
    });
})