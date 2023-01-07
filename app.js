const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);

const h3 = document.getElementById("job-text");
let array = [" Développeur front-end", " Designer Web"];
let wordIndex = 0;
let letterIndex = 0;

const createletter = () => {
  const letter = document.createElement("span");
  // span enfant de h3
  h3.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 10000);
};

const loop = () => {
  setTimeout(() => {
    //condition pour revenir au mot début du tableau
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      // rejoue la loop
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createletter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0; // letterIndex remise à zéro
      //setTimeout pour attendre pour écrire la suite des mots
      setTimeout(() => {
        loop();
      }, 10000);
    }
  }, 70);
};
loop();
