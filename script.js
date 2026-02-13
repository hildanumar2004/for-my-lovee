/* ===== PARTICLE SYSTEM ===== */

const heartContainer = document.getElementById("hearts-container");
const starContainer = document.getElementById("stars-container");

function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random()*20) + "px";
  heart.style.animationDuration = (6 + Math.random()*6) + "s";
  heartContainer.appendChild(heart);

  setTimeout(()=>{ heart.remove(); }, 12000);
}

function createStar(){
  const star = document.createElement("div");
  star.classList.add("star");
  star.innerHTML = "✨";
  star.style.left = Math.random() * 100 + "vw";
  star.style.fontSize = (10 + Math.random()*15) + "px";
  star.style.animationDuration = (5 + Math.random()*5) + "s";
  starContainer.appendChild(star);

  setTimeout(()=>{ star.remove(); }, 10000);
}

setInterval(createHeart, 400);
setInterval(createStar, 500);

/* ===== SLIDE SYSTEM ===== */

const photos = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg"
];

const texts = [
  "Every moment with you feels magical ✨",
  "You are my favorite place to go when my heart feels tired 💕",
  "Your smile is my sunshine ☀️💖",
  "With you, love feels warm and safe 🥰",
  "Forever with you sounds perfect 💍❤️"
];

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const button = document.getElementById("loveBtn");
const card = document.getElementById("card");
const ending = document.getElementById("ending");
const title = document.getElementById("mainTitle");
const sub = document.getElementById("subText");
const music = document.getElementById("bgMusic");

let index = 0;

button.addEventListener("click", () => {

  music.volume = 0.3;
  music.play();

  if(index < photos.length - 1){
    index++;
    photo.src = photos[index];
    caption.innerHTML = texts[index];
  } else {
    showEnding();
  }
});

function showEnding(){
  card.style.opacity = "0";
  setTimeout(()=>{
    card.style.display = "none";
    ending.style.visibility = "visible";
    ending.style.opacity = "1";
    typeWriter();
  },800);
}

/* ===== CINEMATIC TYPEWRITER ===== */

const mainText = "I LOVE YOU LATHIFA ❤️";
const subText = "You are my forever, my always, my safest place and my sweetest dream. In every lifetime, I would still choose you. ✨💍";

let i = 0;

function typeWriter(){
  if(i < mainText.length){
    title.innerHTML += mainText.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  } else {
    setTimeout(()=>{
      sub.innerHTML = subText;
      sub.style.opacity = "1";
    },1000);
  }
}

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

  intro.style.opacity = "0";

  setTimeout(()=>{
    intro.style.display = "none";
  },1200);

});

const heartsContainer = document.getElementById("hearts-container");

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  heart.style.fontSize = 12 + Math.random() * 20 + "px";
  heartsContainer.appendChild(heart);
}