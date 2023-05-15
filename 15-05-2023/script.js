const heroImages = [
  {
    id: 1,
    alt: "hero1",
    src: "https://picsum.photos/1200/800?1",
  },
  {
    id: 2,
    alt: "hero2",
    src: "https://picsum.photos/1200/800?2",
  },
  {
    id: 3,
    alt: "hero3",
    src: "https://picsum.photos/1200/800?3",
  },
  {
    id: 4,
    alt: "hero4",
    src: "https://picsum.photos/1200/800?4",
  },
];

const heroEl = document.querySelector(".hero");
const heroContentEl = document.createElement("div");
const heroTitleEl = document.createElement("h1");
const heroButtonEl = document.createElement("button");

heroContentEl.className = "heroContent";
heroTitleEl.className = "heroContent__title";
heroButtonEl.className = "heroContent__button";
heroTitleEl.textContent =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, corrupti?";
heroButtonEl.textContent = "Shop Now →";

heroContentEl.append(heroTitleEl, heroButtonEl);
heroEl.append(heroContentEl);

// genera immagini hero
const heroImgGen = (image) => {
  const heroImageEl = document.createElement("div");
  const heroImg = document.createElement("img");

  heroImageEl.className = "heroImage";
  heroImg.src = image.src;
  heroImg.alt = image.alt;

  heroImageEl.appendChild(heroImg);
  return heroImageEl;
};

// appende immagini alla hero
for (let image of heroImages) {
  heroEl.append(heroImgGen(image));
}

// carousel hero
const allImages = document.querySelectorAll(".heroImage");

let currentImage = 0;
let totalImages = allImages.length - 1;

setInterval(() => {
  if (currentImage === totalImages) {
    currentImage = 0;
  } else {
    currentImage++;
  }

  allImages.forEach((image, i) => {
    image.style.transform = `translateX(${(i - currentImage) * 100}%)`;
  });
}, 3000);

//////////////////// PRODUCTS ///////////////////////

const productMock = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
];

const createCard = (data) => {
  const cardEl = document.createElement("div");
  const cardImgEl = document.createElement("img");
  const cardContentEl = document.createElement("div");
  const cardTextEl = document.createElement("div");
  const cardTitleEl = document.createElement("p");
  const cardPriceEl = document.createElement("h3");
  const cardRatingEl = document.createElement("p");
  const cardButtonEl = document.createElement("button");

  cardEl.className = "productCard";
  cardContentEl.className = "cardContent";
  cardTextEl.className = "cardText";
  cardTitleEl.className = "cardTitle";
  cardPriceEl.className = "cardPrice";
  cardRatingEl.className = "cardRating";
  cardButtonEl.className = "cardButton";

  cardImgEl.src = data.thumbnail;
  cardImgEl.alt = data.title;
  cardTitleEl.textContent = data.title;
  cardRatingEl.textContent = data.rating + " ⭐";
  cardPriceEl.textContent = data.price + " €";
  cardButtonEl.textContent = "🛒";

  cardTextEl.append(cardTitleEl, cardRatingEl, cardPriceEl);
  cardContentEl.appendChild(cardTextEl, cardButtonEl);

  cardEl.append(cardImgEl, cardContentEl);

  return cardEl;
};

const productsEl = document.querySelector(".products");
const productsIntro = document.createElement("h2");

productsIntro.textContent = "Featured products";

productsEl.appendChild(productsIntro);
// productMock.forEach((product) => products.append(createCard(product)));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) => productsEl.append(createCard(product)))
  );
