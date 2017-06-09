$(document).ready(function($) {
    var oldPlace;
        setInterval(function(){
            oldPlace=$(document).scrollTop()
        },400)
//滚动条事件
    $(document).scroll(function(){
            var scrTop=$(this).scrollTop()
        if(scrTop>=50){
            $(".top3").addClass('block')
            $(".top").addClass('top2')

        }else if(scrTop<=2){
            $(".top").removeClass('top2').css({"top":"-50px"})
            $(".top3").removeClass('block')

        }

        if(scrTop>300&&scrTop<oldPlace&&$(".top2").css("top")=="-50px"){
            $(".top2").animate({"top":"0"},200);
        }else if((scrTop)>oldPlace&&$(".top2").css("top")=="0px"){
                $(".top2").animate({"top":"-50px"},200);
        }
        var trueF=false;
        if(oldPlace>700){trueF=true}else{trueF=false}
        if(trueF){
            $(".gotop").animate({"right":"25px"},10);
        }else{
            $(".gotop").animate({"right":"-45px"},10);
        }

    })
    $(".gotop").click(function(){
        $("body").animate({"scrollTop":"0"},300)
    })
    // 禁止跳转
    $("a").click(function(event){
        event.preventDefault()
    })
    //下拉菜单
    $(".menu1").hover(function() {
        setTimeout(function(){
            $(".proMenu").stop().slideDown('20')},5)

    }, function() {
        $(".proMenu").stop().slideUp('50');
    });
    $(".proMenu").hover(function() {
        $(this).stop().slideDown('50');
    }, function() {
        $(this).stop().slideUp('50');
    });
    $(".proMenu>p").click(function(){
        $(".proMenu").stop().slideUp('50');
    })
    //2
    $(".menu2").hover(function() {
        setTimeout(function(){
             $(".servici").stop().slideDown('20')},5)

    }, function() {
        $(".servici").stop().slideUp('50');
    });
    $(".servici").hover(function() {
        $(this).stop().slideDown('50');
    }, function() {
        $(this).stop().slideUp('50');
    });
    $(".servici>p").click(function(){
        $(".servici").stop().slideUp('50');
    })
    //3
    $(".menu3").hover(function() {
        setTimeout(function(){
             $(".desarro").stop().slideDown('20')},5)
    }, function() {
        $(".desarro").stop().slideUp('50');
    });
    $(".desarro").hover(function() {
        $(this).stop().slideDown('50');
    }, function() {
        $(this).stop().slideUp('50');
    });
    //4
    $(".user").hover(function() {
        setTimeout(function(){
             $(".user_menu").stop().slideDown('20')},5)
    }, function() {
        $(".user_menu").stop().slideUp('50');
    });
    $(".user_menu").hover(function() {
        $(this).stop().slideDown('50');
    }, function() {
        $(this).stop().slideUp('50');
    });
    //下拉菜单选项卡1
    $(".proMenuall>li").hover(function(){
        $(".proAll>div").eq($(this).index()).removeClass('none').siblings().addClass('none')
    })
    //下拉菜单选项卡2
    $(".servici_left_ul>li").hover(function(){
        $(".proMenu_rightAll>div").eq($(this).index()).removeClass('none').siblings().addClass('none')
    })
    //搜索框外边线
    var searchFocus=true
    $(".search>input").focus(function(){
        searchFocus=false
    })
    $(".search>input").blur(function(){
        searchFocus=true
        $(".search").removeClass('searchShadow')
    })
    $(".search>input").mouseenter(function(){

        $(".search").addClass('searchShadow')
    })
    $(".search>input").mouseleave(function(){
        if(searchFocus==true){
            $(".search").removeClass('searchShadow')
        }
    })
    //轮播图
    var x=0;
     $(".main3_but>ul>li").click(function(){
        event.preventDefault();
            x=$(this).index()
        var nun="-" + (x+1)  + "00%";
        $(this).siblings().removeClass('bianHei')
         $(this).addClass('bianHei')
        $('.main3_boxall').animate({
        "margin-left": nun,
      }, 300);
    })

        var a=function (){
        x = x - 1;
        if(x==-1){
            var zuo=  (x + 1) * -100
            $('.main3_boxall').stop().animate({
                "margin-left": zuo+"%",
            }, 300)
            x=2
            $(".main3_but>ul>li:eq("+ x +")").addClass("bianHei").siblings().removeClass('bianHei');
        }else{
            var zuo=  (x + 1) * -100
            if(x==1){$(".main3_boxall").css("margin-left","-300%");}
            $('.main3_boxall').stop().animate({
            "margin-left": zuo+"%"
            }, 300)
            $(".main3_but>ul>li:eq("+ x +")").addClass("bianHei").siblings().removeClass('bianHei');

        }
    }
        var b=function (){
        x = x + 1;
        var zuo;
        if (x==3){
            zuo= (x + 1) * -100;
            $('.main3_boxall').stop().animate({
                "margin-left": zuo+"%",
            },300)
            x=0
            $(".main3_but>ul>li:eq("+ x +")").addClass("bianHei").siblings().removeClass('bianHei');
        }else{
            if(x==1){$('.main3_boxall').css("margin-left","-100%");}

            $(".main3_but>ul>li:eq("+ x +")").addClass("bianHei").siblings().removeClass('bianHei');
            zuo= (x + 1) * -100
            $('.main3_boxall').stop().animate({
                "margin-left": zuo+"%",
            }, 300)
        }
        }
        var t=setInterval(b,2000);
        $(".main3_boxall").hover(function() {
            clearInterval(t)
        }, function() {
            t=setInterval(b,2000)
        });

        $(".main3_but>ul>li").hover(function(){
            clearInterval(t)
        },function(){
            t=setInterval(b,2000)
        })
        $(".main3_but>ul>li").click(function(){
            event.preventDefault();
            x=$(this).index()
            var nun="-" + (x+1)  + "00%";

            $(this).siblings().removeClass('bianHei')
             $(this).addClass('bianHei')
            $('.main3_boxall').animate({
            "margin-left": nun,
            }, 300);
        })
        $("#leftBut").hover(function(){
            clearInterval(t)
        },function(){
          t=setInterval(b,2000)
        })
        $("#rightBut").hover(function(){
            clearInterval(t)
        },function(){
          t=setInterval(b,2000)
        })
        $("#leftBut").click(a)
        $("#rightBut").click(b)
        // 轮播图结束
        // 右下角的下拉选项
        $(".footerup2_input").mouseenter(function(event) {
            $(this).addClass('footerup2_input_hover')
        });
        $(".footerup2_input").mouseleave(function(event) {
            $(this).removeClass('footerup2_input_hover')
        });
        $(".footerup2_input").click(function(){
            $(".duoXuan").toggleClass('none')
            $(".footerup2_input").addClass('footerup2_input_Focus')
            $(".duoXuan>input").focus()
            return false;
        })
        $(".duoXuan_input").click(function(){
            return false;
        })
        $(".footerup2_input_ul>li").click(function(){
            $(".footerup2_input_span1").text($(this).text())
            $(".duoXuan").addClass('none');
            console.log(89999)
            $(".footerup2_input").removeClass('footerup2_input_Focus');
            return false;
        })
          $("body").click(function(){
            $(".duoXuan").addClass('none')
            $(".footerup2_input").removeClass('footerup2_input_Focus')
        })
          // 搜索框
          document.getElementById("duoXuan_input").oninput = function(){
                var ul = document.getElementsByClassName('footerup2_input_ul')[0]
                var liArr=ul.getElementsByTagName("li")
                var inputVal=document.getElementById("duoXuan_input").value

                for(var i=0;i<liArr.length;i++){
                    if(!inputVal){
                        $(".footerup2_input_ul>li").eq(i).removeClass('none')
                    }else{
                        $(".footerup2_input_ul>li").eq(i).addClass('none')
                        if(liArr[i].innerHTML.indexOf(inputVal)!=-1){
                            $(".footerup2_input_ul>li").eq(i).removeClass('none')
                        }
                    }
                }
            }

        //titleimg
        $(".titleimg").parent().addClass('positionrelative');
         $(".titleimg").addClass('none')
        $(".titleimg").parent().mouseenter(function(){
            $(this).children(".titleimg").fadeIn(0)

        })
        $(".titleimg").parent().mouseleave(function(){
            $(this).children(".titleimg").fadeOut(0)
        })

        $(".titleimg").mouseenter(function() {
            return false
        });
});
