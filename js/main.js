$(document).ready(function() {

  //베너자동슬라이드
  let mainswiper = new Swiper(".bannerStation",{
    loop:true,
    slidesPerView:1,
    navigation: {
     prevEl: ".mainbtnprev",
     nextEl: ".mainbtnnext",
   },
   autoplay:{
    delay:5000
  },
  pagination: {
    el: ".bannerDot",
  },
  effect: 'fade',
  fadeEffect: {
   crossFade: true
  },
  });


//탭버튼슬라이드
//신제품 슬라이드
  let count=0;
  let slides=$(".maintrain1>li").length
  let preview=3;
  $(".maintrain1").css("width",(100*slides)/preview+"%")
  $(".maintrain1>li").css("width",100/slides+"%")

  $(".btnNext1").click(function() {
    count++
    if(count>4){count=4}
    $(".maintrain1").css("transform","translateX("+-(100/slides)*count+"%)");
    $(".navibar1").css("width",(100/slides)*(count+1)+"%")
  })

  $(".btnPrev1").click(function() {
    count--
    if(count<0){count=0}
    $(".maintrain1").css("transform","translateX("+-(100/slides)*count+"%)");
    $(".navibar1").css("width",(100/slides)*(count+1)+"%")
  })

  //베스트 슬라이드
  let count2=0;
  let slides2=$(".maintrain2>li").length
  let preview2=3;
  $(".maintrain2").css("width",(100*slides2)/preview2+"%")
  $(".maintrain2>li").css("width",100/slides2+"%")

  $(".btnNext2").click(function() {
    count2++
    if(count2>4){count2=4}
    $(".maintrain2").css("transform","translateX("+-(100/slides2)*count2+"%)");
    $(".navibar2").css("width",(100/slides2)*(count2+1)+"%")
  })

  $(".btnPrev2").click(function() {
    count2--
    if(count2<0){count2=0}
    $(".maintrain2").css("transform","translateX("+-(100/slides2)*count2+"%)");
    $(".navibar2").css("width",(100/slides2)*(count2+1)+"%")
  })

//탭메뉴
  $("dl>dt").click(function(){
  $("dl>dt").removeClass("tabon")
  $(this).addClass("tabon")
  $("dl>dd").removeClass("tabon")
  $(this).next().addClass("tabon")
  })


//gototop
  // $(window).scroll(function() {
  //   if($(this).scrollTop()>40){
  //     $(".gototop").fadeIn()
  //   }else{
  //     $(".gototop").fadeOut()
  //   }
  // });

  // $(".gototop").click(function() {
  //   $("html,body").animate({scrollTop:0},800)
  // })
// 스크롤 이벤트 처리
window.addEventListener("scroll", function() {
  var scrollToTopButton = document.querySelector(".gototop");
  if (window.scrollY > 40) {
      scrollToTopButton.style.display = "block";
  } else {
      scrollToTopButton.style.display = "none";
  }
});

// 클릭 이벤트 처리
document.querySelector(".gototop").addEventListener("click", function() {
  // 스크롤을 맨 위로 부드럽게 이동
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//gotodowm
// 스크롤 이벤트 처리
window.addEventListener("scroll", function() {
  var scrollToBottomButton = document.querySelector(".gotodown");
  if (window.scrollY < 40) {
      scrollToBottomButton.style.display = "block";
  } 
  else {
      scrollToBottomButton.style.display = "none";
  }
});

// 클릭 이벤트 처리
document.querySelector(".gotodown").addEventListener("click", function() {
  // 스크롤을 아래로 부드럽게 이동
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});



 //서브페이지 헤드폰

//tabTrain1
//전체
 let move=0;
 let show=$(".tabTrain1>li").length
 let per=3
 $(".tabTrain1").css("width",(100*show)/per+"%")
 $(".tabTrain1>li").css("width",100/show+"%")
 $(".navibar3").css("width",100/show+"%")

 $(".subNext1").click(function() {
   move++
   if(move>show-1){move=show-1}
   $(".tabTrain1").css("transform","translateX("+-(100/show)*move+"%)")
   $(".navibar3").css("width",((100/show)*(move+1))+"%")
 })

 $(".subPrev1").click(function() {
   move--
   if(move<0){move=0}
   $(".tabTrain1").css("transform","translateX("+-(100/show)*move+"%)")
   $(".navibar3").css("width",((100/show)*(move+1))+"%")
 })

//tabTrain2
//노이즈캔슬링
 let move2=0;
 let show2=$(".tabTrain2>li").length
 let per2=3
 $(".tabTrain2").css("width",(100*show2)/per2+"%")
 $(".tabTrain2>li").css("width",100/show2+"%")
 $(".navibar4").css("width",100/show2+"%")

 $(".subNext2").click(function() {
   move2++
   if(move2>show2-1){move2=show2-1}
   $(".tabTrain2").css("transform","translateX("+-(100/show2)*move2+"%)")
   $(".navibar4").css("width",((100/show2)*(move2+1))+"%")
 })

 $(".subPrev2").click(function() {
   move2--
   if(move2<0){move2=0}
   $(".tabTrain2").css("transform","translateX("+-(100/show2)*move2+"%)")
   $(".navibar4").css("width",((100/show2)*(move2+1))+"%")
 })

//tabTrain3
//오디오 선글라스
let move3=0;
let show3=$(".tabTrain3>li").length
let per3=3
$(".tabTrain3").css("width",(100*show3)/per3+"%")
$(".tabTrain3>li").css("width",100/show3+"%")
$(".navibar5").css("width",100/show3+"%")

$(".subNext3").click(function() {
  move3++
  if(move3>show3-1){move3=show3-1}
  $(".tabTrain3").css("transform","translateX("+-(100/show3)*move3+"%)")
  $(".navibar5").css("width",((100/show3)*(move3+1))+"%")
})

$(".subPrev3").click(function() {
  move3--
  if(move3<0){move3=0}
  $(".tabTrain3").css("transform","translateX("+-(100/show3)*move3+"%)")
  $(".navibar5").css("width",((100/show3)*(move3+1))+"%")
})

//tabTrain4
//게이밍 헤드셋
let move4=0;
let show4=$(".tabTrain4>li").length
let per4=3
$(".tabTrain4").css("width",(100*show4)/per4+"%")
$(".tabTrain4>li").css("width",100/show4+"%")
$(".navibar6").css("width",100/show4+"%")

$(".subNext4").click(function() {
  move4++
  if(move4>show4-1){move4=show4-1}
  $(".tabTrain4").css("transform","translateX("+-(100/show4)*move4+"%)")
  $(".navibar6").css("width",((100/show4)*(move4+1))+"%")
})

$(".subPrev4").click(function() {
  move4--
  if(move4<0){move4=0}
  $(".tabTrain4").css("transform","translateX("+-(100/show4)*move4+"%)")
  $(".navibar6").css("width",((100/show4)*(move4+2))+"%")
})

//tabTrain5
//액세서리
let move5=0;
let show5=$(".tabTrain5>li").length
let per5=3
$(".tabTrain5").css("width",(100*show5)/per5+"%")
$(".tabTrain5>li").css("width",100/show5+"%")
$(".navibar7").css("width",100/show5+"%")

$(".subNext5").click(function() {
  move5++
  if(move5>show5-1){move5=show5-1}
  $(".tabTrain5").css("transform","translateX("+-(100/show5)*move5+"%)")
  $(".navibar7").css("width",((100/show5)*(move5+1))+"%")
})

$(".subPrev5").click(function() {
  move5--
  if(move5<0){move5=0}
  $(".tabTrain5").css("transform","translateX("+-(100/show5)*move5+"%)")
  $(".navibar7").css("width",((100/show5)*(move5+1))+"%")
})

//서브페이지2-이어버드

//tabTrain6
//전체
let move6=0;
let show6=$(".tabTrain6>li").length
let per6=2;
$(".tabTrain6").css("width",(100*show6)/per6+"%")
$(".tabTrain6>li").css("width",100/show6+"%")
$(".navibar8").css("width",100/show6+"%")

$(".subNext6").click(function() {
  move6++
  if(move6>show6-1){move6=show6-1}
  $(".tabTrain6").css("transform","translateX("+-(100/show6)*move6+"%)")
  $(".navibar8").css("width",((100/show6)*(move6+1))+"%")
})

$(".subPrev6").click(function() {
  move6--
  if(move6<0){move6=0}
  $(".tabTrain6").css("transform","translateX("+-(100/show6)*move6+"%)")
  $(".navibar8").css("width",((100/show6)*(move6+1))+"%")
})

//tabTrain7
//노이즈캔슬링
let move7=0;
let show7=$(".tabTrain7>li").length
let per7=3
$(".tabTrain7").css("width",(100*show7)/per7+"%")
$(".tabTrain7>li").css("width",100/show7+"%")
$(".navibar9").css("width",100/show7+"%")

$(".subNext7").click(function() {
  move7++
  if(move7>show7-1){move7=show7-1}
  $(".tabTrain7").css("transform","translateX("+-(100/show7)*move7+"%)")
  $(".navibar9").css("width",((100/show7)*(move7+1))+"%")
})

$(".subPrev7").click(function() {
  move7--
  if(move7<0){move7=0}
  $(".tabTrain7").css("transform","translateX("+-(100/show7)*move7+"%)")
  $(".navibar9").css("width",((100/show7)*(move7+1))+"%")
})

//tabTrain8
//사운드스포츠
let move8=0;
let show8=$(".tabTrain8>li").length
let per8=3
$(".tabTrain8").css("width",(100*show8)/per8+"%")
$(".tabTrain8>li").css("width",100/show8+"%")
$(".navibar10").css("width",100/show8+"%")

$(".subNext8").click(function() {
  move8++
  if(move8>show8-1){move8=show8-1}
  $(".tabTrain8").css("transform","translateX("+-(100/show8)*move8+"%)")
  $(".navibar10").css("width",((100/show8)*(move8+1))+"%")
})

$(".subPrev").click(function() {
  move8--
  if(move8<0){move8=0}
  $(".tabTrain8").css("transform","translateX("+-(100/show8)*move8+"%)")
  $(".navibar10").css("width",((100/show8)*(move8+1))+"%")
})

//tabTrain9
//슬립버드
let move9=0;
let show9=$(".tabTrain9>li").length
let per9=3
$(".tabTrain9").css("width",(100*show9)/per9+"%")
$(".tabTrain9>li").css("width",100/show9+"%")
$(".navibar11").css("width",100/show9+"%")

$(".subNext9").click(function() {
  move9++
  if(move9>show9-1){move9=show9-1}
  $(".tabTrain9").css("transform","translateX("+-(100/show9)*move9+"%)")
  $(".navibar11").css("width",((100/show9)*(move9+1))+"%")
})

$(".subPrev9").click(function() {
  move9--
  if(move9<0){move9=0}
  $(".tabTrain9").css("transform","translateX("+-(100/show9)*move9+"%)")
  $(".navibar11").css("width",((100/show9)*(move9+1))+"%")
})

//tabTrain10
//액세서리
let move10=0;
let show10=$(".tabTrain10>li").length
let per10=3
$(".tabTrain10").css("width",(100*show10)/per10+"%")
$(".tabTrain10>li").css("width",100/show10+"%")
$(".navibar12").css("width",100/show10+"%")

$(".subNext10").click(function() {
  move10++
  if(move10>show10-1){move10=show10-1}
  $(".tabTrain10").css("transform","translateX("+-(100/show10)*move10+"%)")
  $(".navibar12").css("width",((100/show10)*(move10+1))+"%")
})

$(".subPrev10").click(function() {
  move10--
  if(move10<0){move10=0}
  $(".tabTrain10").css("transform","translateX("+-(100/show10)*move10+"%)")
  $(".navibar12").css("width",((100/show10)*(move10+1))+"%")
})

//서브페이지3 - 스피커

//tabTrain11
//전체
let move11=0;
let show11=$(".tabTrain11>li").length
let per11=3
$(".tabTrain11").css("width",(100*show11)/per11+"%")
$(".tabTrain11>li").css("width",100/show11+"%")
$(".navibar13").css("width",100/show11+"%")

$(".subNext11").click(function() {
  move11++
  if(move11>show11-1){move11=show11-1}
  $(".tabTrain11").css("transform","translateX("+-(100/show11)*move11+"%)")
  $(".navibar13").css("width",((100/show11)*(move11+1))+"%")
})

$(".subPrev11").click(function() {
  move11--
  if(move11<0){move11=0}
  $(".tabTrain11").css("transform","translateX("+-(100/show11)*move11+"%)")
  $(".navibar13").css("width",((100/show11)*(move11+1))+"%")
})

//tabTrain12
//무선스피커
let move12=0;
let show12=$(".tabTrain12>li").length
let per12=3
$(".tabTrain12").css("width",(100*show12)/per12+"%")
$(".tabTrain12>li").css("width",100/show12+"%")
$(".navibar14").css("width",100/show12+"%")

$(".subNext12").click(function() {
  move12++
  if(move12>show12-1){move12=show12-1}
  $(".tabTrain12").css("transform","translateX("+-(100/show12)*move12+"%)")
  $(".navibar14").css("width",((100/show12)*(move12+1))+"%")
})

$(".subPrev12").click(function() {
  move12--
  if(move12<0){move12=0}
  $(".tabTrain12").css("transform","translateX("+-(100/show12)*move12+"%)")
  $(".navibar14").css("width",((100/show12)*(move12+1))+"%")
})

//tabTrain13
//홈스피커
let move13=0;
let show13=$(".tabTrain13>li").length
let per13=3
$(".tabTrain13").css("width",(100*show13)/per13+"%")
$(".tabTrain13>li").css("width",100/show13+"%")
$(".navibar15").css("width",100/show13+"%")

$(".subNext13").click(function() {
  move13++
  if(move13>show13-1){move13=show13-1}
  $(".tabTrain13").css("transform","translateX("+-(100/show13)*move13+"%)")
  $(".navibar15").css("width",((100/show13)*(move13+1))+"%")
})

$(".subPrev13").click(function() {
  move13--
  if(move13<0){move13=0}
  $(".tabTrain13").css("transform","translateX("+-(100/show13)*move13+"%)")
  $(".navibar15").css("width",((100/show13)*(move13+1))+"%")
})

//tabTrain14
//홈시어터
let move14=0;
let show14=$(".tabTrain14>li").length
let per14=3
$(".tabTrain14").css("width",(100*show14)/per14+"%")
$(".tabTrain14>li").css("width",100/show14+"%")
$(".navibar16").css("width",100/show14+"%")

$(".subNext14").click(function() {
  move14++
  if(move14>show14-1){move14=show14-1}
  $(".tabTrain14").css("transform","translateX("+-(100/show14)*move14+"%)")
  $(".navibar16").css("width",((100/show14)*(move14+1))+"%")
})

$(".subPrev14").click(function() {
  move14--
  if(move14<0){move14=0}
  $(".tabTrain14").css("transform","translateX("+-(100/show14)*move14+"%)")
  $(".navibar16").css("width",((100/show14)*(move14+1))+"%")
})

//tabTrain15
//사운드웨이브
let move15=0;
let show15=$(".tabTrain15>li").length
let per15=3
$(".tabTrain15").css("width",(100*show15)/per15+"%")
$(".tabTrain15>li").css("width",100/show15+"%")
$(".navibar17").css("width",100/show15+"%")

$(".subNext15").click(function() {
  move15++
  if(move15>show15-1){move15=show15-1}
  $(".tabTrain15").css("transform","translateX("+-(100/show15)*move15+"%)")
  $(".navibar17").css("width",((100/show15)*(move15+1))+"%")
})

$(".subPrev15").click(function() {
  move15--
  if(move15<0){move15=0}
  $(".tabTrain15").css("transform","translateX("+-(100/show15)*move15+"%)")
  $(".navibar17").css("width",((100/show15)*(move15+1))+"%")
})

//tabTrain16
//액세서리
let move16=0;
let show16=$(".tabTrain16>li").length
let per16=3
$(".tabTrain16").css("width",(100*show16)/per16+"%")
$(".tabTrain16>li").css("width",100/show16+"%")
$(".navibar18").css("width",100/show16+"%")

$(".subNext16").click(function() {
  move16++
  if(move16>show-1){move16=show16-1}
  $(".tabTrain16").css("transform","translateX("+-(100/show16)*move16+"%)")
  $(".navibar18").css("width",((100/show16)*(move16+1))+"%")
})

$(".subPrev16").click(function() {
  move16--
  if(move16<0){move16=0}
  $(".tabTrain16").css("transform","translateX("+-(100/show16)*move16+"%)")
  $(".navibar18").css("width",((100/show16)*(move16+1))+"%")
})






})
