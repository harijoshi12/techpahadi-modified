

var demoContainer = document.querySelectorAll('.sec-demo');
var demoSlide = document.querySelectorAll('.sec-demo-body');
var isdown
var startX
var pos
var leftmost
var rightmost
var drag
var slideMargin = 30
var demoContainerWidth = demoContainer[0].offsetWidth
var demoContainerLeft = demoContainer[0].getBoundingClientRect().left



$(window).resize(function(){
    for (i = 0; i < demoSlide.length; i++){
        demoContainerWidth = $(demoContainer[i]).outerWidth()
        demoContainerLeft = $(demoContainer[i]).offset().left
        $(demoSlide[i]).css("transform", `translateX(0px)`)
    }
}) 


function demoScroll() { 
    
    $(document).ready(function () {
        for (i = 0; i < demoSlide.length; i++){
            $(demoSlide[i]).on({
                "mousedown": function(e){
                    $(this).addClass('active')
                    isdown = true
                    startX = e.pageX
                    pos = $(this).offset().left - demoContainerLeft
                    leftmost = 0
                    rightmost = $(this).outerWidth() - demoContainerWidth + 2*slideMargin
                },
                "mouseup": function(){
                    isdown = false
                    $(this).removeClass('active')
                },
                "mouseleave": function(){
                    isdown = false
                    $(this).removeClass('active')
                },
                "mousemove": function(e){
                    e.preventDefault()
                    let x = e.pageX
                    let scrollme = x - startX
                    drag = scrollme*1.5 + pos -slideMargin
                    if(!isdown) return
                    else if(drag < leftmost && drag > - rightmost){
                        $(this).css("transform", `translateX(${drag}px)`)
                    } 
                }
            })
        }
    });
 }
 demoScroll()


// var demoPrvbtn = document.querySelectorAll('.sec-demo-prvbtn')
// var demoNxtbtn = document.querySelectorAll('.sec-demo-nxtbtn')
// var demoItem = document.querySelectorAll('.demo-item')
// var demoCounter = 1
// var demoSize = $(demoItem[counter - 1]).outerWidth(true)
// console.log(`demoSize${demoSize}`)

// const demoNxtslide = () =>{
//     if(demoCounter<= 0) return;
//     demoCounter--
//     demoSize = $(demoItem[counter - 1]).outerWidth(true)
//     demoSlide[0].style.transition = '1s'
//     console.log(`counter${demoCounter}`)
//     console.log(-demoSize*demoCounter)
//     demoSlide[0].style.transform = `translateX(${-demoSize*demoCounter}px)`
// }

// const demoPrvslide = () =>{
//     if (counter >= $(demoSlide[0]).children().length - 1) return;
//     demoCounter++
//     demoSize = $(demoItem[counter - 1]).outerWidth(true)
//     console.log(-demoSize*demoCounter)
//     console.log(`counter${demoCounter}`)
//     demoSlide[0].style.transition = '1s'
//     demoSlide[0].style.transform = `translateX(${-demoSize*demoCounter}px)`
// } 

// demoNxtbtn[0].addEventListener('click', demoNxtslide)
// demoPrvbtn[0].addEventListener('click', demoPrvslide)