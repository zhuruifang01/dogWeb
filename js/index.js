$(function(){
//登陆，注册
    $(".header .logo .user li:first-child div div:last-child").click(function(){
            $(".header .logo .user li .welcome").hide();
            $(".header .logo .user li .login").show();
        }
    );
//宠物品种：
    $(".pz .zhezhao").hide();
    function pinzhong(father){
        $(father+">.pz").mouseover(function(){
            var index=$(this).index();
            $(father+">.pz .zhezhao").eq(index).show();
        });
        $(father+">.pz").mouseleave(function(){
            var index=$(this).index();
            $(father+">.pz .zhezhao").eq(index).hide();
        });
    }
    pinzhong("#pz1");
    pinzhong("#pz2");
    pinzhong("#pz3");

});
