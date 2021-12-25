/****************STICKY HEADER***************** */

window.addEventListener("scroll", function(){
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 10)
})

/****************STICKY HEADER***************** */

/******************HAM BURGER********************* */

$(document).ready(function(){
    $(".burger").click(function(){
        $("nav").toggleClass("active")
        $(".burger").toggleClass('toggle')
        $(".hr1").toggleClass('toggle')
    })
})

// $.each($('nav a'), function(index, value){
//     console.log(index + ":" + value)
// })

// $("nav a").each(function(){
//     console.log($(this).text())
// })

/******************HAM BURGER********************* */

/******************PROGRESS BAR*********************** */


$(document).ready(function(){
    $(window).scroll(function(){
        // console.clear()

        var scroll = $(window).scrollTop()
        // console.log('scroll- window.scrollTop = '+scroll)

        var dh = $(document).height()
        // console.log('dh- document.height = '+dh)

        var wh = $(window).height()
        // console.log('wh- window.height = '+wh)

        var scrollableHeight = dh - wh
        // console.log('dh- wh = ' + scrollableHeight)

        var value = (scroll/(dh-wh))*100
        // console.log('value = '+ value)

        $('#progress').css(`width`, `${value}%`)
    })
})


/******************PROGRESS BAR*********************** */

/****************CLIENT TESTIMONIAL****************** */

const ctslide = document.querySelector(".ct-slide")
const ctitems = document.querySelectorAll(".ct-items")
const prvbtn = document.querySelector(".prvbtn")
const nxtbtn = document.querySelector('.nxtbtn')
const interval = 3000

let counter = 1
var size = ctitems[counter].offsetWidth
var slideId

ctslide.style.transform = `translateX(${-size*counter}px)`

ctslide.addEventListener('transitionend', function(){
    size = ctitems[counter].offsetWidth
    if(ctitems[counter].id === 'first-clone'){
        ctslide.style.transition = '0s'
        counter = 1
        ctslide.style.transform = `translateX(${-size*counter}px)`
    }
    if(ctitems[counter].id === 'last-clone'){
        ctslide.style.transition = '0s'
        counter = ctitems.length - 2
        ctslide.style.transform = `translateX(${-size*counter}px)`
    }
})

const startSlide = ()=>{
    slideId = setInterval(()=>{
       nxtslide()
    },interval)
}

const nxtslide = ()=>{
    if (counter >= ctitems.length - 1) return;
    counter++
    size = ctitems[counter].offsetWidth
    ctslide.style.transition = '1s'
    ctslide.style.transform = `translateX(${-size*counter}px)`
}

const prvslide = ()=>{
    if(counter<= 0) return;
    ctslide.style.transition = '1s'
    counter--
    ctslide.style.transform = 'translateX('+(-size*counter)+'px)'
}

ctslide.addEventListener('mouseenter',()=>{clearInterval(slideId)})
prvbtn.addEventListener('mouseenter',()=>{clearInterval(slideId)})
nxtbtn.addEventListener('mouseenter',()=>{clearInterval(slideId)})

ctslide.addEventListener('mouseleave', startSlide)
prvbtn.addEventListener('mouseleave', startSlide)
nxtbtn.addEventListener('mouseleave', startSlide)

nxtbtn.addEventListener('click', nxtslide)
prvbtn.addEventListener('click', prvslide)
startSlide()



/****************CLIENT TESTIMONIAL****************** */

/**********************MARQUEE SLIDER************************** *

marqueeInit({
    uniqueid: "mycrawler",
    style: {
      padding: "5px",
      width: "95%",
      background: "white",
      border: "0",
    },
    inc: 5, //speed - pixel increment for each iteration of this marquee's movement
    mouse: "cursor driven", //mouseover behavior ('pause' 'cursor driven' or false)
    moveatleast: 2,
    neutral: 150,
    persist: true,
    savedirection: true,
  });

/**********************MARQUEE SLIDER************************** */

/*************FAQ SECTION**************** */

var question = document.querySelectorAll(".question")
var answer = document.querySelectorAll(".answer")
var faq = document.querySelectorAll(".faqs-items")

$(document).ready(function(){
    for (i=0; i<8; i++){

        $(faq[i]).on({
            "mouseenter": function(){
                $(this).addClass("faq-hover")
                $(this).find('img').css("transform", "translateY(-50%) rotate(0.5turn)")
                if($(this).hasClass('faq-hover')){
                    $(this).find(".question").css("box-shadow", "1px 1px 5px 2px rgb(156, 156, 156)")
                    $(this).find(".answer").slideDown(150)
                }
            },
            "mouseleave": function(){
                $(this).removeClass("faq-hover")
                if(!$(this).hasClass('faq-click')){
                    $(this).find('img').css("transform", "translateY(-50%) rotate(0deg)")
                    $(this).find(".answer").slideUp(150)
                }
            },
            "click": function(){
                $(this).toggleClass("faq-click")
                if ($(this).hasClass('faq-click')){
                    $(this).find('img').css("transform", "translateY(-50%) rotate(0.5turn)")
                    $(this).find(".answer").slideDown(150)
                }
                if(!$(this).hasClass('faq-click')){
                    $(this).find(".answer").slideUp(150)
                    $(this).find('img').css("transform", "translateY(-50%) rotate(0deg)")
                }
            }
        })
    } 
})


/*************FAQ SECTION**************** */

/**************JOIN US SVG MORPHING****************** */

const path1 = "M1440 0H0V1024H1440V0ZM1190 573.649C1190 298.694 1000.99 44 725.915 44C447.509 44 249 295.37 249 573.649C249 818.016 481.437 979 725.915 979C966.597 979 1190 814.223 1190 573.649Z"
const path2 = "M1440 0H0V1024H1440V0ZM1190 573.649C1190 298.694 881.579 94 606.5 94C328.094 94 149.33 362.357 249 573.649C389.5 871.5 481.437 979 725.915 979C966.597 979 1190 814.223 1190 573.649Z"
const path3 = "M1440 0H0V1024H1440V0ZM1190 573.649C1190 298.694 1151.08 61 876 61C597.594 61 477.5 96.5 249 573.649C106.76 870.673 481.437 979 725.915 979C966.597 979 1190 814.223 1190 573.649Z"
const path4 = "M1440 0H0V1024H1440V0ZM1190 573.649C1190 298.694 1151.08 61 876 61C597.594 61 216.5 113 249 573.649C272.177 902.158 481.437 979 725.915 979C966.597 979 1190 814.223 1190 573.649Z"
const path5 = "M1440 0H0V1024H1440V0ZM1406.5 613.5C1406.5 338.545 1151.08 61 876 61C597.594 61 216.5 113 249 573.649C272.177 902.158 481.437 979 725.915 979C966.597 979 1406.5 854.074 1406.5 613.5Z"
const path6 = "M1440 0H0V1024H1440V0ZM1406.5 613.5C1406.5 338.545 1151.08 61 876 61C597.594 61 -3.00031 152.851 29.4996 613.5C52.6767 942.009 481.437 979 725.915 979C966.597 979 1406.5 854.074 1406.5 613.5Z"
const path7 = "M1440 0H0V1024H1440V0ZM1406.5 613.5C1406.5 338.545 1167.5 198.5 876 61C624.201 -57.773 -3.00031 152.851 29.4996 613.5C52.6767 942.009 481.437 979 725.915 979C966.597 979 1406.5 854.074 1406.5 613.5Z"
const path8 = "M1440 0H0V1024H1440V0ZM1406.5 613.5C1406.5 338.545 1167.5 198.5 876 61C624.201 -57.773 2.49984 53.8507 34.9998 514.5C58.1769 843.009 481.437 979 725.915 979C966.597 979 1406.5 854.074 1406.5 613.5Z"
const path9 = "M1440 0H0V1024H1440V0ZM1190 573.649C1190 98.694 1851.08 61 876 61C7.594 61 47.5 96.5 29 573.649C106.76 1170.673 481.437 979 725.915 979C966.597 979 1190 814.223 1190 573.649Z"
const path10 = "M1440 0H0V1024H1440V0ZM1190 573.649C1190 298.694 1151.08 61 876 61C597.594 61 477.5 96.5 49 53.649C106.76 870.673 481.437 979 725.915 979C966.597 79 1190 814.223 1190 573.649Z"
const path11 = "M1440 0H0V1024H1440V0ZM1406.5 613.5C1406.5 38.545 1167.5 198.5 876 61C24.201 -57.773 -3.00031 152.851 29.4996 613.5C52.6767 942.009 41.437 979 725.915 579C966.597 979 1406.5 84.074 1406.5 613.5Z"

const mainsvg = document.querySelector(".join-svg1")
const timeline = anime.timeline({
    duration: 10000,
    easing: "linear",
    loop: true
})
timeline.add({
    targets: ".path1",
    d:[{value: path2},{value: path10},{value: path3},{value: path4},{value: path6},{value: path11},{value:path7},{value:path8},{value:path9},{value: path3},{value: path2},{value: path1}]
})

/**************JOIN US SVG MORPHING****************** */