var p = document.getElementById('prev');
var n = document.getElementById('next');
var currentImg = 0;

// tweenlite animation
$(document).ready(function () {
    
    var images = $('#images img'),
    timeline = new TimelineMax({repeat:-1, repeatDelay:.25});
    TweenLite.set(images, {visibility:"hidden"});
    timeline.staggerTo(images, 0, {visibility:"visible", immediateRender:false}, 2);

    document.getElementById('buttons').addEventListener('mouseleave', ()=>{
        timeline.kill();
        timeline.restart();
        timeline.play();
    });
    document.getElementById('buttons').addEventListener('mouseenter', ()=>{
        timeline.pause();
    });
});

// previous button function
function prev(n){
    currentImg+=n;
    if(currentImg < 0){
        currentImg = 3;
    }
    showBlock(currentImg);
}

// next button function
function next(n){
    currentImg+=n;
    if(currentImg > 3){
        currentImg = 0;
    }
    showBlock(currentImg);
}

// block display function that holds image
function showBlock(imgToShow){
    var imgs = document.getElementById('images');
    console.log(imgs);
    imgs.innerHTML = `<img style="visibility: visible;" src="assets/${imgToShow}.jpg">`;
}