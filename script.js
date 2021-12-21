let songindex=0;
let audioElement=new Audio('Songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let masterprevious=document.getElementById('masterprevious');
let masternext=document.getElementById('masternext');
let masterpausespan=document.getElementById('masterpausespan');
let rangebar=document.getElementById('rangebar');
let currentsong=document.getElementsByClassName('songitem');
let songs=['Chidiya | Vilen','Joker | Hardy Sandhu','Kar Har Maidan Fatheh','Savan | Vilen','Soch | Hardy Sandhu','Zindagi  Di Paudi']
let alertitem=document.querySelectorAll('#notcurrentsong');

for(let i=0;i<alertitem.length;i++)
{
    alertitem[i].addEventListener('click',()=>{
        alert("Please click on the 'NEXT' or 'PREVIOUS' icon to change song");
    });
}
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime==0){
        audioElement.play();               
        masterplay.className='fas fa-pause-circle fa-3x';
        currentsong[songindex].id='currentsong';        
    }
    else if(!(audioElement.paused)||(!audioElement.currentTime==0)){
        audioElement.pause();
        masterplay.className='fas fa-play-circle fa-3x';
        currentsong[songindex].id='currentsong';
    }
})

masterprevious.addEventListener('click',()=>{
    masterplay.className='fas fa-play-circle fa-3x';
    currentsong[songindex].id='nocurrentsong';
    if(songindex!=0)
        songindex--;
    else    
        songindex=5;
    audioElement.src=`Songs/${songindex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    currentsong[songindex].id='currentsong';
    masterplay.className='fas fa-pause-circle fa-3x';
    document.getElementById('sname').innerHTML=`${songs[songindex]}`;
});

masternext.addEventListener('click',()=>{
    audioElement.currentTime=0;
    masterplay.className='fas fa-play-circle fa-3x';
    currentsong[songindex].id='nocurrentsong';
    if(songindex!=5)
    songindex++;
    else
        songindex=0;
    audioElement.src=`Songs/${songindex+1}.mp3`;
    audioElement.play();
    currentsong[songindex].id='currentsong';
    masterplay.className='fas fa-pause-circle fa-3x';
    document.getElementById('sname').innerHTML=`${songs[songindex]}`;
});

// LISTEN TO EVENTS AND PLAY AUDIO
audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    rangebar.value=progress;
});

rangebar.addEventListener('change',()=>{
    audioElement.currentTime=rangebar.value*audioElement.duration/100;
});