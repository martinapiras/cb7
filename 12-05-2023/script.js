const imageList = [
  {
    src: "./assets/arctic fox.jpg",
    alt: "arctic fox",
    width: "400px",
    height: "auto",
  },
  {
    src: "./assets/axolotl.jpg",
    alt: "axolotl",
    width: "400px",
    height: "auto",
  },
  {
    src: "./assets/hyena.jpg",
    alt: "hyena",
    width: "400px",
    height: "auto",
  },
  {
    src: "./assets/kitten.jpg",
    alt: "kitten",
    width: "400px",
    height: "auto",
  },
  {
    src: "./assets/red panda.jpg",
    alt: "red panda",
    width: "400px",
    height: "auto",
  },
  {
    src: "./assets/tiger.jpg",
    alt: "tiger",
    width: "400px",
    height: "auto",
  },
];

let imageIndex = 0;

const carouselWrapperEl = document.createElement("div");
const prevButtonEl = document.createElement("button");
const nextButtonEl = document.createElement("button");

carouselWrapperEl.className = "carouselWrapper";
prevButtonEl.className = "prevButton";
nextButtonEl.className = "nextButton";
prevButtonEl.textContent = "<";
nextButtonEl.textContent = ">";

document.body.append(
  prevButtonEl,
  carouselWrapperEl,
  //   carouselImageEl,
  nextButtonEl
);

// funzione per generare le immagini
const imgGen = (list) => {
  const carouselImageEl = document.createElement("div");
  const imgEl = document.createElement("img");
  carouselImageEl.className = "carouselImage";
  imgEl.src = list.src;
  imgEl.alt = list.alt;
  imgEl.height = list.height;
  imgEl.width = list.width;

  carouselImageEl.appendChild(imgEl);
  return carouselImageEl;
};

// appende tutte le immagini
for (let image of imageList) {
  carouselWrapperEl.append(imgGen(image));
}

// seleziona tutti contenitori immagini
const allImageWrappers = document.querySelectorAll(".carouselImage");
// console.log(allImageWrappers);

let currentImage = 0;
let totalImages = allImageWrappers.length - 1;

// scorre in avanti
nextButtonEl.addEventListener("click", () => {
  // se è all'ultima immagine resetta il conto, altrimenti scorre di 1
  if (currentImage === totalImages) {
    currentImage = 0;
  } else {
    currentImage++;
  }

  allImageWrappers.forEach((image, i) => {
    image.style.transform = `translateX(${(i - currentImage) * 100}%)`;
  });
});

// scorre indietro
prevButtonEl.addEventListener("click", () => {
  if (currentImage === 0) {
    currentImage = totalImages;
  } else {
    currentImage--;
  }

  allImageWrappers.forEach((image, i) => {
    image.style.transform = `translateX(${(i - currentImage) * 100}%)`;
  });
});

// scorre in automatico ogni 3 sec
setInterval(() => {
  if (currentImage === totalImages) {
    currentImage = 0;
  } else {
    currentImage++;
  }

  allImageWrappers.forEach((image, i) => {
    image.style.transform = `translateX(${(i - currentImage) * 100}%)`;
  });
}, 3000);
