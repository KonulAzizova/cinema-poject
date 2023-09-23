


let myList = document.querySelector('#my_list');
let leftSliderIcon2 = document.querySelector('.left_slider_icon5');
let rightSliderIcon2 = document.querySelector('.right_slider_icon5');
let videosContainerSecond=document.querySelector('.videos_container_second');



let count3 = 0;
function slider5() {
    for (let i = 0; i < myList.children.length; i++) {
        myList.children[i].style.transform = `translateX(${-302 * count3}px)`
    }

}


setInterval(() => {
    if (count3 < myList.children.length - 4) {
        count3++
        slider5()
    } else {
        count3 = 0
        slider5()
    }
}, 3000);



rightSliderIcon2.addEventListener('click', () => {
    if (count3 < myList.children.length - 4) {
        count3++
        slider5()
    } else {
        count3 = 0
        slider5()
    }

})
leftSliderIcon2.addEventListener('click', () => {
    if (count3 > 0) {
        count3--
        slider5()
    } else {
        count3 = 0
        slider5()
    }
})



fetch('./api/videos2.json')
.then(resp=>resp.json())
.then(data=>{
    console.log(data);
    data.forEach(x=>{
        videosContainerSecond.innerHTML+=`
            <div class="video_card_second">
                <video controls src="${x.video}"></video>
            </div>
        
        
        `
    })
})