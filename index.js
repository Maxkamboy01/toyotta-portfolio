var gallery = [
  {
    img: '<img class="gallery-img" src="./images/gallery-1.jpeg" alt="">',
  },
  {
    img: '<img class="gallery-img" src="./images/gallery-2.jpeg" alt="">',
  },
  {
    img: '<img class="gallery-img" src="./images/gallery-3.jpeg" alt="">',
  },
  {
    img: '<img class="gallery-img" src="./images/gallery-4.jpeg" alt="">',
  },
  {
    img: '<img class="gallery-img" src="./images/gallery-5.jpeg" alt="">',
  },
  {
    img: '<img class="gallery-img" src="./images/gallery-6.jpeg" alt="">',
  },
  {
    img: '<img class="gallery-img" src="./images/gallery-7.jpeg" alt="">',
  },
  {
    img: '<img class="gallery-img" src="./images/gallery-8.jpeg" alt="">',
  },
];

var img_var = "";
for (var i = 0; i < gallery.length; i++) {
  img_var += `${gallery[i].img}`;
}
console.log(img_var);
document.getElementById("gallery").innerHTML = img_var;

function darkMode() {
  document.querySelector("body").classList.toggle("darkmode");
  document.querySelector(".dark-mode-btn").classList.toggle("black");
  document.querySelector('*').style.color="white"
  document.querySelectorAll(".a").classList.toggle('whitecolor')
}