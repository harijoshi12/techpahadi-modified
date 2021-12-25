

const wrapper = document.querySelector('.wrapper')
const sidebar = document.querySelector('#id_sidebar')
const menu_btn1 = document.querySelector('.menu_btn1')

// sidebar mouseover

sidebar.addEventListener('mouseover', function(){
   if (sidebar.classList.contains('stretch')){
      wrapper.classList.remove('mhover')
   }
   else{
      wrapper.classList.add('mhover')
   }   
})
 
// hamburger menu

menu_btn1.addEventListener('click', () =>{
   wrapper.classList.remove('mhover')
   menu_btn1.classList.toggle('open')
   sidebar.classList.toggle('stretch')
})

/****************fulscreen*******************/

const fullscreen_btn = document.getElementById('fullscreen_btn')
const exit = document.getElementById('exit')
const logo = document.querySelector(".logo a")

window.addEventListener('load', function(){
   exit.classList.add('hide')
})

fullscreen_btn.addEventListener('click', function(){
   logo.style.fontSize = "45px"
   fullscreen_btn.classList.add('hide')
   exit.classList.remove('hide')

   if (wrapper.requestFullscreen){
      wrapper.requestFullscreen()
   }
   else if (wrapper.webkitRequestFullscreen){
      wrapper.webkitRequestFullscreen()
   }
   else if (wrapper.msRequestFullscreen){
      wrapper.msRequestFullscreen()
   }
   else if (wrapper.mozRequestFullScreen){
      wrapper.mozRequestFullScreen()
   }
})
exit.addEventListener('click', function(){
   logo.style.fontSize = "35px"
   fullscreen_btn.classList.remove('hide')
   exit.classList.add('hide')

   if (document.exitFullscreen){
      document.exitFullscreen()
   }
   if (document.webkitExitFullscreen){
         document.webkitExitFullscreen()
   }
   if (document.msExitFullscreen){
         document.msExitFullscreen()
   }
   if (document.mzExitFullScreen){
         document.mozExitFullScreen()
   }

})


/**********DashBoard Change**********/

const dashboard = document.querySelectorAll('#dashboard1, #dashboard2, #dashboard3, #dashboard4') 
const btn_db = document.querySelectorAll('#btn-db1, #btn-db2, #btn-db3, #btn-db4')

window.addEventListener('load', function(){
   dashboard[0].classList.add('dbactive')
})

for (k = 0; k < 4; k++ ){
   btn_db[k].addEventListener('click', function(event){
      for( var i = 0; i < 4; i++){
         if(btn_db[i].contains(event.target)){
            dashboard[i].classList.add('dbactive')
         }
         else {
            dashboard[i].classList.remove('dbactive')
         }
      }
   })
}


// btn_db[0].addEventListener('click', function(){
//    dashboard[0].classList.toggle('dbactive')
// })

// btn_db[1].addEventListener('click', function(){
//    dashboard[1].classList.toggle('dbactive')
// })

// btn_db[2].addEventListener('click', function(){
//    dashboard[2].classList.toggle('dbactive')
// })

// btn_db[3].addEventListener('click', function(){
//    dashboard[3].classList.toggle('dbactive')
// })

/*********Profile Navigation*********/

const ddid = document.querySelectorAll('#dd_message, #dd_email , #dd_bell , #dd_profile')
const topmenuid = document.querySelectorAll('#message, #email, #bell, #profile')

window.addEventListener('click', function(event){
   for( var i = 0; i < 4; i++){
      if(topmenuid[i].contains(event.target)){
         ddid[i].classList.toggle('active')
      }
      else {
         ddid[i].classList.remove('active')
      }
   }
})



/***************try code******************/

// window.addEventListener('click', function(event){
//    if(topmenuid[3].contains(event.target)){
//       ddid[3].classList.toggle('active')
//       console.log('clicked')
//    }
//    else {
//       ddid[3].classList.remove('active')
//    }
// })


// topmenuid[0].addEventListener('click', function(){
//    ddid[0].classList.toggle('active')
// })

// topmenuid[1].addEventListener('click', function(){
//    ddid[1].classList.toggle('active')
// })

// topmenuid[2].addEventListener('click', function(){
//    ddid[2].classList.toggle('active')
// })

// topmenuid[3].addEventListener('click', function(){
//    ddid[3].classList.toggle('active')
   
// })


// else if(!topmenuid[3].contains(event.target)){
//    ddid[3].classList.remove('active')
// }

// window.addEventListener('click', function(event){
//    if(!topmenuid[3].contains(event.target)){
//       ddid[3].style.transform = 'scale(0)';
//    }
//    if(topmenuid[3].contains(event.target)){
//       ddid[3].style.transform = "scale(1)"
//    }
// })

// window.addEventListener('click', function(event){
//    if(event.target != topmenuid[3]){
//       ddid[3].style.display = 'none';
//    }
// })



// console.log(ddid)
// console.log(ddid[3])
// var a = document.getElementById('dd_message')
// console.log(a)
// console.log(topmenuid[3])

// for (var i, k= 0; i < topmenu.length && k < dd.length; i++, k++){
//    topmenu[i].addEventListener('click', function(){
//       dd[k].classList.toggle('active')
//    })
// }


// for (var i = 0; i < topmenu.length; i++){
//   topmenu[i].addEventListener('click', function(){
//      for (var k = 0; k < dd.length; k++){
//         dd[k].classList.toggle('active')
//      }
//   })
//       }
