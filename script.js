const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const texts = Array.from(document.querySelectorAll(".all-texts div"));
const image = document.getElementById("image");

let currentText = 0;
let currentImage = 1;

function noDrop() {
   for (let i = 0; i < texts.length; i++) {
      if (texts[i].classList.contains("active")) {
         if (parseInt(texts[i].dataset.index) === 0) {
            previous.style.cursor = "no-drop";
            previous.style.pointerEvents = "none";
            next.style.cursor = "pointer";
            next.style.pointerEvents = "all";
         } else if (parseInt(texts[i].dataset.index) === texts.length - 1) {
            next.style.cursor = "no-drop";
            next.style.pointerEvents = "none";
            previous.style.cursor = "pointer";
            previous.style.pointerEvents = "all";
         } else {
            next.style.cursor = "pointer";
            next.style.pointerEvents = "all";
            previous.style.cursor = "pointer";
            previous.style.pointerEvents = "all";
         }
      }
   }
}

noDrop();

function theChecker() {
   for (let i = 0; i < texts.length; i++) {
      if (texts[i].classList.contains("active")) {
         if (i === 0) {
            currentText = 0;
         } else if (i === texts.length - 1) {
            currentText = texts.length - 1;
         } else {
            currentText = parseInt(texts[i].dataset.index);
         }
      }
   }
   currentImage = currentText + 1;
}

next.addEventListener("click", () => {
   texts.forEach((text) => {
      if (text.classList.contains("active")) {
         text.classList.remove("active");
      }
   });
   texts[currentText + 1].classList.add("active");
   console.log(currentText, currentImage);
   theChecker();
   noDrop();
   console.log(currentText, currentImage);
   image.style.backgroundImage = `url(images/desktop-image-hero-${currentImage}.jpg)`;
});

previous.addEventListener("click", () => {
   texts.forEach((text) => {
      if (text.classList.contains("active")) {
         text.classList.remove("active");
      }
   });
   texts[currentText - 1].classList.add("active");
   console.log(currentText, currentImage);
   theChecker();
   noDrop();
   console.log(currentText, currentImage);
   image.style.backgroundImage = `url(images/desktop-image-hero-${currentImage}.jpg)`;
});
