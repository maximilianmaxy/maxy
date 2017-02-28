/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mytrack = document.getElementById('mytrack');
var playbtn = document.getElementById('playbtn');
var mutebtn = document.getElementById('mutebtn');

playbtn.addEventListener('click', playorpause, false);
mutebtn.addEventListener('click', muteorunmute, false);

function playorpause(){
    if(!mytrack.paused && !mytrack.ended){
        mytrack.pause();
        playbtn.style.backgroundImage = 'url(Play20.png)';
    }
    else{
        mytrack.play();
        playbtn.style.backgroundImage = 'url(pause123.jpg)';
    }
}
    
function muteorunmute(){
    if(mytrack.muted === true){
        mytrack.muted = false;
        mutebtn.style.backgroundImage = 'url(Volume2.png)';
    }
    else{
        mytrack.muted = true;
        mutebtn.style.backgroundImage = 'url(NewMute.jpg)';
    }
}

