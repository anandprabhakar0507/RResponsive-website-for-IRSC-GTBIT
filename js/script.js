


document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);


function gofullscreen(){
    if (document.fullscreenEnabled || document.mozRequestFullScreen || document.webkitRequestFullscreen || document.msRequestFullscreen){
        // fullscreen is activated
        document.documentElement.requestFullscreen();
        document.documentElement.mozRequestFullScreen();
        document.documentElement.webkitRequestFullscreen();
        document.documentElement.msRequestFullscreen();
        
    } else{
        // fullscreen is cancelled
        document.exitFullscreen();
    }
}


function knockit(){
    if (document.fullscreenEnabled) {
        console.log("going to Fullscreen mode");
        document.getElementById('container').requestFullscreen();
        document.getElementById('container').mozRequestFullScreen();
        document.getElementById('container').webKitRequestFullScreen();
    }
}

function gototop() {
    
    window.onscroll = function() {scrollFunction()};                   
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("top").style.display = "block";
            document.getElementById("top").style.background = "pink";
        }else {
        document.getElementById("top").style.display = "none";
    }


}

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
