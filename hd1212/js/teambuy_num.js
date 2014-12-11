/**
 * Created by 闫继鹏 on 2014/12/2.
 */
function teambuy_num_input(teambuy_num_input) {
	var c = $(teambuy_num_input);
	var teambuy_num = c.val();
	if (/[^\d]/.test(teambuy_num)) {// 替换非数字字符
		var temp_amount = c.val().replace(/[^\d]/g, '');
		$(teambuy_num_input).val(temp_amount);
	}
	check_stock(teambuy_num);// 检查库存方法
}

// 检查库存方法
function check_stock(teambuy_num) {
	var stock_num = parseInt($("#stock_num").text());// 获取静态库存数量
	if (teambuy_num > stock_num) {
		alert("超过库存");
		$("#teambuy_num_input").val(stock_num);
		return false;
	} else {
		return true;
	}
}

$(function() {
	var mouse_event = 'touchstart';// 事件变量：测试PC环境改为click MOBILE 环境:touchstart
	$('#teambuy_num_left').on(mouse_event, function() {
		var teambuy_num = $("#teambuy_num_input").val();// 获取团购数量
		teambuy_num--;
		check_stock(teambuy_num);// 检查库存方法
		if (teambuy_num == 0) {
			teambuy_num++;
		} else {
			$("#teambuy_num_input").val(teambuy_num);
		}
	});
	$('#teambuy_num_right').on(mouse_event, function() {
		var teambuy_num = $("#teambuy_num_input").val();// 获取团购数量
		teambuy_num++;
		var check = check_stock(teambuy_num);// 检查库存方法
		if (check == true) {
			$("#teambuy_num_input").val(teambuy_num);
		}
	});
    $("#J_openterm").on(mouse_event, function(e) {
        $("#D_mobile").hide();
        $("#D_term").show();
    });
    $("#J_closeterm").on(mouse_event, function(e) {
        $("#D_mobile").show();
        history.go(0);
    });
	// 立即购买
	$('.pay-btn').on(mouse_event,function() {
        var button_color = button_color_fun();
        // 再次做判断
        var time = $("#surplusTime").val();
        if (time == -1) {
            button_color = "time_false";
        }
        if(time == 0){
            button_color = "time_end";
        }
        if (button_color == "true") {
            /*
             * var buynum = $('.buy-num').val(); location.href =
             * WapSiteUrl+'/tmpl/order/buy_step1.html?goods_id='+goods_id+'&buynum='+buynum;
             */
            var key = getcookie('key');// 登录标记
            if (key == '') {
                window.location.href = WapSiteUrl
                        + '/tmpl/member/login.html';
            } else {
                var json = {};
                var buynum = $('.buy-num').val();
                json.key = key;
                json.cart_id = goods_id + '|' + buynum + ',';
                $
                        .ajax({
                            type : 'post',
                            url : ApiUrl + '/index.php?act=member_buy&op=buy_step1',
                            data : json,
                            dataType : 'json',
                            success : function(result) {
                            	
                                if (typeof (result.datas.error) == 'undefined') {
                                    location.href = WapSiteUrl
                                            + '/tmpl/order/buy_step1.html?goods_id='
                                            + goods_id
                                            + '&buynum='
                                            + buynum;
                                } else {
                                    $
                                            .sDialog({
                                                skin : "red",
                                                content : result.datas.error,
                                                okBtn : false,
                                                cancelBtn : false
                                            });
                                }
                            },
                            error          : function(XMLHttpRequest, textStatus, errorThrown){    //(默认: 自动判断 (xml 或 html)) 请求失败时将调用此方法。这个方法有三个参数：XMLHttpRequest 对象，错误信息，（可能）捕获的错误对象。
                                alert(errorThrown);return;
                            }
                        });
            }
        } else if (button_color == "clause_false") {
            floatNotify.simple("选择《团购条款》才能支付定金");
        } else if (button_color == "time_false") {
            floatNotify.simple("活动还没有开始");
        }else if(button_color=="time_end"){
            floatNotify.simple("活动已经结束");
        }
	});



})
