/**
 * Created by 闫继鹏 on 2014/12/5.
 */
$(function(){
    var discount_avg=$(".discount_avg").val();
    var discount    =parseInt($(".discount").val())+1;

    var hybrid_1=0;//原价
    var hybrid_2=0.20;//9
    var hybrid_3=0.35;//8
    var hybrid_4=0.49;//7
    var hybrid_5=0.63;//6
    var hybrid_6=0.77;//5
    var hybrid_7=1;//极限价
    switch (discount) {
        case 10://原价
            $(".level li").eq(0).addClass("active-icon");
            var formula_add=hybrid_2*discount_avg*100+"%";
            $(".progress li").css("width",formula_add);
            break;
        case 9://9折
            $(".level li").eq(1).addClass("active-icon");
            var formula_add=(hybrid_2+(hybrid_3-hybrid_2)*discount_avg)*100+"%";
            $(".progress li").css("width",formula_add);
            break;
        case 8://8折
            $(".level li").eq(1).addClass("active-icon");
            $(".level li").eq(2).addClass("active-icon");
            var formula_add=(hybrid_3+(hybrid_4-hybrid_3)*discount_avg)*100+"%";
            $(".progress li").css("width",formula_add);
            break;
        case 7://7折
            $(".level li").eq(1).addClass("active-icon");
            $(".level li").eq(2).addClass("active-icon");
            $(".level li").eq(3).addClass("active-icon");
            var formula_add=(hybrid_4+(hybrid_5-hybrid_4)*discount_avg)*100+"%";
            $(".progress li").css("width",formula_add);
            break;
        case 6://6折
            $(".level li").eq(1).addClass("active-icon");
            $(".level li").eq(2).addClass("active-icon");
            $(".level li").eq(3).addClass("active-icon");
            $(".level li").eq(4).addClass("active-icon");
            var formula_add=(hybrid_5+(hybrid_6-hybrid_5)*discount_avg)*100+"%";
            $(".progress li").css("width",formula_add);
            break;
        case 5://5折
            $(".level li").eq(1).addClass("active-icon");
            $(".level li").eq(2).addClass("active-icon");
            $(".level li").eq(3).addClass("active-icon");
            $(".level li").eq(4).addClass("active-icon");
            $(".level li").eq(5).addClass("active-icon");
            var formula_add=(hybrid_6+(hybrid_7-hybrid_6)*discount_avg)*100+"%";
            $(".progress li").css("width",formula_add);
            break;
        case 4://极限价
            $(".level li").eq(1).addClass("active-icon");
            $(".level li").eq(2).addClass("active-icon");
            $(".level li").eq(3).addClass("active-icon");
            $(".level li").eq(4).addClass("active-icon");
            $(".level li").eq(5).addClass("active-icon");
            $(".level li").eq(6).addClass("active-icon");
            $(".progress li").css("width","100%");
            $(".level-info .last").html("团购成团成功");
            break;
    }
});