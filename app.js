let songs = [ 
    {songName:"Pehle bhi main", filePath:"/songs/Pehle Bhi Main.mp3", coverpaths:"https://miro.medium.com/v2/resize:fit:1358/1*1IvNy3AAxTY7KKhSmENQ3Q.jpeg", singers:"Vishal Mishra"},
    {songName:"Ilzaam", filePath:"/songs/ilzaam.mp3", coverpaths: "https://i1.sndcdn.com/artworks-Xd0aEWT0TB5a7G1K-emDcqw-t500x500.jpg", singers: "Arjun Kanungo"},
    {songName:"Mahiye Jinha Sona", filePath:"/songs/Mahiye Jinna Sohna.mp3",coverpaths:'./image/card2img.jpeg', singers: "Darshan Rawal"},
    {songName:"Humko Tumse Pyaar", filePath:"/songs/Humko Tumse Pyaar.mp3", coverpaths:"https://c.saavncdn.com/770/Humko-Tumse-Hindi-2023-20231122050857-500x500.jpg", singers: "Jubin Nautiyal"},
    {songName:"Lutt Putt Gya", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    {songName:"International Villagers", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},
    // {songName:"Pehle bhi main", filePath:"C:\Users\ankit\OneDrive\Desktop\SPOTIFY CLONE\songs\ilzaam.mp3"},

]

let currentsong = 0;

let volumeunMute = document.querySelector(".vol-unmute"); 
let audioElement = new Audio(songs[currentsong].filePath);




volumeunMute.addEventListener("click", () => {
    volumeunMute.classList.toggle('fa-volume-high');
    volumeunMute.classList.toggle('fa-volume-xmark');


});


let playBtn = document.querySelector(".player");
playBtn.addEventListener("click", ()=> {
   
        playBtn.classList.toggle("fa-pause");
        playBtn.classList.toggle("fa-play");


        if(playBtn.classList.contains('fa-play')){
            audioElement.pause();
        }
        else{

            audioElement.play();
        }
    
})

let next = document.querySelector(".next");
next.addEventListener("click", () => {
    currentsong+=1;
    audioElement.src = songs[currentsong].filePath;
    audioElement.play();

})


let previous = document.querySelector(".previous");
   previous.addEventListener("click", () => {
    currentsong-=1;
    audioElement.src = songs[currentsong].filePath;
    audioElement.play();
})




// left container JS:-- 
let cards = document.querySelectorAll(".card");
let img = document.querySelector(".bottom-img");
let songTitle = document.querySelector(".p1");
let singerName = document.querySelector(".p2");


cards.forEach(element => {
    element.addEventListener("click", (e)=> {
    let ids =  e.currentTarget.id;
    img.src = songs[ids].coverpaths;
    songTitle.innerText = songs[ids].songName;
    singerName.innerText = songs[ids].singers;
    audioElement.src = songs[ids].filePath;
    audioElement.play();
    playBtn.classList.toggle("fa-pause");
    playBtn.classList.toggle("fa-play");
    })
})

const processTime = (time) => {
    if (time <= 60){
     return `0:${time}`
    }
    else{
        let min = parseInt(time/60);
        let sec = time%60;
        return `${min}:${sec}`
    }

}

let timeDisplay = document.querySelector(".time");
let progressBar = document.querySelector("#progress");
audioElement.addEventListener("timeupdate", ()=> {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    const time = processTime(parseInt(audioElement.currentTime))
    timeDisplay.innerText = time
    progressBar.value = progress;

})

progressBar.addEventListener('change', ()=> {
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
});
