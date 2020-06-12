$(document).ready(function(){
    
    
    
    /* 풀다운 메뉴 */
    
    $(".gnb > li> a").bind("mouseover focus",function(){
        
       /* $(".gnb_wrap").stop().slideDown(500,function(){
            $(".gnb_wrap").css("border-bottom","1px solid #693337");
            $(".gnb_wrap div").slideDown(300);
            $(".gnb li .gnbSub").slideDown(500); 
        });
        */
        
         
        $(".gnb_wrap").stop().animate({"height":"273px"},300,function(){
            $(".gnb_wrap").css("border-bottom","1px solid #693337");
            $(".gnb_wrap div").css("display","block");
            $(".gnb li .gnbSub").css("display","block"); 
        });
    });


    $(".menu_area").bind("mouseleave blur",function(){
        
        
        /* 
        $(".gnb_wrap").stop().slideUp(200);
        $(".gnb_wrap").css("border-bottom","none");
        $(".gnb_wrap div").slideUp(200);
        $(".gnb li .gnbSub").slideUp(200);
        */
        
        
        $(".gnb_wrap").stop().animate({"height":"0"},300);
        $(".gnb_wrap").css("border-bottom","none");
        $(".gnb_wrap div").css("display","none");
        $(".gnb li .gnbSub").css("display","none");
 
    });
    
    
    
    /* 메인 배너 화살표 */
    
    
    var currentIndex=0;
    
    $("a.next").click(function(e){
        e.preventDefault();
        
        if(currentIndex <4){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var banner_w = $(".banner li").width();
       
        $(".banner").stop().animate({"left":-banner_w * currentIndex},300,"linear",function(){
            
            $(".roll_ban ul li").removeClass("on");
            $(".roll_ban ul li").eq(currentIndex).addClass("on");
            
      
        });    
    });
    
    $("a.prev").click(function(e){
        e.preventDefault();
        
        if(currentIndex > 0){
            currentIndex--;
        } else {
            currentIndex = 0;
        }
        
        var banner_w = $(".banner li").width();
        
        $(".banner").stop().animate({"left":-banner_w * currentIndex},300,"linear",function(){
            
            $(".roll_ban ul li").removeClass("on");
            $(".roll_ban ul li").eq(currentIndex).addClass("on");
        });
    });
    
    
    
    /* 메인배너 점 클릭에 따라 움직이면서 색깔 변화 */
    
    var roll = $(".roll_ban ul li");

    roll.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var banner_w = $(".banner li").width();
        $(".banner").stop().animate({"left":-banner_w * index},300,"linear",function(){
            roll.removeClass("on");
            roll.eq(index).addClass("on");
        });
    });
        
            
    /* 오토 배너 */
    /*
    setInterval(function(){
        if(currentIndex <4){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var banner_w = $(".banner li").width();

        $(".banner").stop().animate({"left":-banner_w * currentIndex},300,"linear",function(){
            
            $(".roll_ban ul li").removeClass("on");
            $(".roll_ban ul li").eq(currentIndex).addClass("on");
        });    
        
    },3000);
    */
    
    
    /* 이벤트배너 점 클릭에 따라 움직이면서 색깔 변화 */
    
    var roll_event = $(".roll_event ul li");

    roll_event.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var event_w = $(".event_ban").width();
        $(".event").stop().animate({"left":-event_w * index},300,"linear",function(){
            roll_event.removeClass("on");
            roll_event.eq(index).addClass("on");
        });
    });
        
    
    /* 이벤트배너 오토배너 */
    
    /*
    setInterval(function(){
        if(currentIndex <2){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var event_w = $(".event_ban").width();

        $(".event").stop().animate({"left":-event_w * currentIndex},300,"linear",function(){
            
            $(".roll_event ul li").removeClass("on");
            $(".roll_event ul li").eq(currentIndex).addClass("on");
        });    
        
    },3000);
    */
    
    
    
    
    
    /*패밀리사이트 버튼*/
    $(".family button").click(function(e){
        e.preventDefault();
        $(".family").toggleClass("on");
    });
    

 
});    

