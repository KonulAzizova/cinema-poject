let loggedEmail = document.querySelector('.logged_container p');
let logOut = document.querySelector('.logged_container svg');
let getloggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
let bestComediesContainer=document.querySelector('#best_comedies_container');
let sliderContainer = document.querySelector('#popular_move_container');
let videosContainer = document.querySelector('.videos_container');
let leftSliderIcon = document.querySelector('.left_slider_icon');
let leftSliderIcon1 = document.querySelector('.left_slider_icon1');
let leftSliderIcon2 = document.querySelector('.left_slider_icon2');
let rightSliderIcon = document.querySelector('.right_slider_icon');
let rightSliderIcon1 = document.querySelector('.right_slider_icon1');
let rightSliderIcon2 = document.querySelector('.right_slider_icon2');
let actionAdventureContainer = document.querySelector('#action_adventure_container');


logOut.addEventListener('click',()=>{
    window.location.href='./entrance.html'
    localStorage.removeItem("loggedInUser")
})

loggedEmail.innerHTML =`${getloggedInUser ?getloggedInUser.email :""}`;
 

fetch('./api/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.forEach(x => {
            videosContainer.innerHTML += `
 <div class="video_card">
 <video controls src="${x.video}"></video>
 <h3>${x.title}</h3>
</div>
 
 
 
 

 `

        })
    })

let count = 0;
let count1 = 0;
let count2 = 0;


function slider() {
    for (let i = 0; i < sliderContainer.children.length; i++) {
        sliderContainer.children[i].style.transform = `translateX(${-302 * count}px)`
    }

}
function slider1() {
    for (let i = 0; i < bestComediesContainer.children.length; i++) {
        bestComediesContainer.children[i].style.transform = `translateX(${-302 * count1}px)`
    }

}
function slider2() {
    for (let i = 0; i < actionAdventureContainer.children.length; i++) {
        actionAdventureContainer.children[i].style.transform = `translateX(${-302 * count2}px)`
    }

}


// setTimeout(()=>{
//     alert('nese lazimdi?')
// },10000);


setInterval(() => {
    if (count < sliderContainer.children.length - 4) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
}, 3000);

setInterval(() => {
    if(count1<bestComediesContainer.children.length-4){
        count1++
        slider1()
    }else{
        count1=0
        slider1()
    }
    
}, 3000);

setInterval(() => {
    if(count2<actionAdventureContainer.children.length-4){
        count2++
        slider2()
    }else{
        count2=0
        slider2()
    }
    
}, 3000);


rightSliderIcon.addEventListener('click', () => {
  if (count < sliderContainer.children.length - 4) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }

})
leftSliderIcon.addEventListener('.left_slider_icon',()=>{
    if(count>0){
        count--
        slider()
    }else{
        count=0
        slider()
    }
})

rightSliderIcon1.addEventListener('click', () => {
    if (count1 < bestComediesContainer.children.length - 4) {
          count1++
          slider1()
      } else {
          count1 = 0
          slider1()
      }
  
  })
  leftSliderIcon1.addEventListener('click',()=>{
      if(count1>0){
          count1--
          slider1()
      }else{
          count1=0
          slider1()
      }
  })

  rightSliderIcon2.addEventListener('click', () => {
    if (count2 < actionAdventureContainer.children.length - 4) {
          count2++
          slider2()
      } else {
          count2 = 0
          slider2()
      }
  
  })
  leftSliderIcon2.addEventListener('click',()=>{
      if(count2>0){
          count2--
          slider2()
      }else{
          count2=0
          slider2()
      }
  })