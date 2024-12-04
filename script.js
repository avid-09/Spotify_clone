console.log("Welcome To Spotify");

// let songIndex = 0;
let currentSongIndex = 1;
let audioElement = new Audio("songs/Choo Lo - Aalas Ka Pedh 320 Kbps 1.mp3");
let masterPlayPasue = document.getElementById("masterPlayPasue");
let myprogressbar = document.getElementById("myprogressbar");
let song_name = document.getElementById("song_name");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));

// All songs
let songs = [
  {
    songName: "Choo lo",
    filePath: "songs/Choo Lo - Aalas Ka Pedh 320 Kbps 1.mp3",
    coverPath: "cover/1.jpg",
    index: 0,
  },
  {
    songName: "Insane",
    filePath: "songs/Insane_1 2.mp3",
    coverPath: "cover/2.jpg",
    index: 1,
  },
  {
    songName: "Ishq",
    filePath: "songs/Ishq - Lost Found 3.mp3",
    coverPath: "cover/3.jpg",
    index: 2,
  },
  {
    songName: "Love Dose",
    filePath: "songs/Love Dose - Desi Kalakaar 4.mp3",
    coverPath: "cover/4.jpg",
    index: 3,
  },
  {
    songName: "Meri Banogi Kya",
    filePath: "songs/Meri Banogi Kya Rito Riba 5.mp3",
    coverPath: "cover/5.jpg",
    index: 4,
  },
  {
    songName: "Tum Hi Ho",
    filePath: "songs/Tum Hi Ho - Aashiqui 2 6.mp3",
    coverPath: "cover/6.jpg",
    index: 5,
  },
  {
    songName: "Tere Pyar Mein",
    filePath: "songs/Tere Pyar Mein 7.mp3",
    coverPath: "cover/7.jpg",
    index: 6,
  },
  {
    songName: "Saware - Phantom",
    filePath: "songs/Saware - Phantom 8.mp3",
    coverPath: "cover/9.jpg",
    index: 7,
  },
];

// Set All Songs Names
songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlayPasue.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlayPasue.src = "Image/play-button.png";
    if (song_name.innerText === "") {
      song_name.innerText = "Choo Lo";
      currentSongIndex = 0;
    }
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlayPasue.src = "Image/pause-button.png";
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  // update the progressbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myprogressbar.value = progress;

  // When progressbar is full then the song is changed
  if (audioElement.currentTime === audioElement.duration) {
    if (currentSongIndex < 7) {
      currentSongIndex += 1;
    } else {
      currentSongIndex = 0;
    }
    audioElement.src = songs[currentSongIndex].filePath;
    audioElement.play();
    masterPlayPasue.src = "Image/play-button.png";
    gif.style.opacity = 1;
    song_name.innerText = `${songs[currentSongIndex].songName}`;
  }
});

// When we change progressbar then this event is fired
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    parseInt(myprogressbar.value * audioElement.duration) / 100;
});

// When we click the songs then the songs is start paying
Array.from(document.getElementsByClassName("songName")).forEach(
  (element, i) => {
    element.addEventListener("click", (e) => {
      audioElement.src = songs[i].filePath;
      currentSongIndex = parseInt(songs[i].index);
      audioElement.play();
      masterPlayPasue.src = "Image/play-button.png";
      gif.style.opacity = 1;
      song_name.innerText = `${songs[i].songName}`;
    });
  }
);

// When we click leftplay button
document.getElementById("leftPlay").addEventListener("click", () => {
  if (currentSongIndex > 0) {
    currentSongIndex -= 1;
  } else {
    currentSongIndex = 7;
  }

  audioElement.src = songs[currentSongIndex].filePath;
  audioElement.play();
  masterPlayPasue.src = "Image/play-button.png";
  gif.style.opacity = 1;
  song_name.innerText = `${songs[currentSongIndex].songName}`;
});

// When we click rightplay button
document.getElementById("rightPlay").addEventListener("click", () => {
  if (currentSongIndex < 7) {
    currentSongIndex += 1;
  } else {
    currentSongIndex = 0;
  }

  audioElement.src = songs[currentSongIndex].filePath;
  audioElement.play();
  masterPlayPasue.src = "Image/play-button.png";
  gif.style.opacity = 1;
  song_name.innerText = `${songs[currentSongIndex].songName}`;
});

// When we click forwordPlay button
document.getElementById("forwordPlay").addEventListener("click", () => {
  audioElement.currentTime =
    parseInt(myprogressbar.value * audioElement.duration) / 100 + 10;

  if (audioElement.currentTime === audioElement.duration) {
    if (currentSongIndex < 7) {
      currentSongIndex += 1;
    } else {
      currentSongIndex = 0;
    }
    audioElement.src = songs[currentSongIndex].filePath;
    audioElement.play();
    masterPlayPasue.src = "Image/play-button.png";
    gif.style.opacity = 1;
    song_name.innerText = `${songs[currentSongIndex].songName}`;
  }
});

// When we click backwordPlay button
document.getElementById("backwordPlay").addEventListener("click", () => {
  audioElement.currentTime =
    parseInt(myprogressbar.value * audioElement.duration) / 100 - 10;
});
