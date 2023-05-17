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
  cardEl.setAttribute("id", data.id);
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
  cardContentEl.append(cardTextEl, cardButtonEl);

  cardEl.append(cardImgEl, cardContentEl);

  return cardEl;
};

const productsEl = document.querySelector(".products");
// const productsIntro = document.createElement("h2");

// productsIntro.textContent = "Featured products";

// productsEl.appendChild(productsIntro);
// productMock.forEach((product) => products.append(createCard(product)));

const modalEl = document.querySelector(".modal");

// pagina prodotto singolo
const createProductModal = (productData) => {
  const overlayEl = document.createElement("div");
  const wrapperEl = document.createElement("div");

  const galleryEl = document.createElement("div");
  const mainImgEl = document.createElement("img");

  const textEl = document.createElement("div");
  const mainTextEl = document.createElement("div");
  const mainTextTitleEl = document.createElement("h1");
  const mainTextDescEl = document.createElement("p");
  const mainTextRateEl = document.createElement("p");
  const mainTextPriceEl = document.createElement("p");

  const buyTextEl = document.createElement("div");
  const buyFirstBtnEl = document.createElement("button");
  const buySecondBtnEl = document.createElement("button");

  overlayEl.className = "modalOverlay";
  wrapperEl.className = "modalProduct";
  galleryEl.className = "modalProduct__gallery";
  mainImgEl.src = productData.thumbnail;
  mainImgEl.alt = productData.title;

  textEl.className = "modalProduct__text";
  mainTextEl.className = "modalMainText";
  mainTextPriceEl.className = "mainTextPrice";
  mainTextTitleEl.textContent = productData.title;
  mainTextDescEl.textContent = productData.description;
  mainTextRateEl.textContent = productData.rating + " ⭐";
  mainTextPriceEl.textContent = productData.price + " €";

  buyTextEl.className = "modalMainBuy";
  buyFirstBtnEl.className = "buyButton";
  buySecondBtnEl.className = "exitButton";
  buyFirstBtnEl.textContent = "Buy Now";
  buySecondBtnEl.textContent = "Back to Products";

  mainTextEl.append(
    mainTextTitleEl,
    mainTextDescEl,
    mainTextRateEl,
    mainTextPriceEl
  );
  buyTextEl.append(buyFirstBtnEl, buySecondBtnEl);
  galleryEl.append(mainImgEl);
  textEl.append(mainTextEl, buyTextEl);
  wrapperEl.append(overlayEl, galleryEl, textEl);

  buySecondBtnEl.addEventListener("click", () =>
    wrapperEl.parentElement.removeChild(wrapperEl)
  );

  overlayEl.addEventListener("click", () =>
    wrapperEl.parentElement.removeChild(wrapperEl)
  );

  return wrapperEl;
};

let productsObj = [];

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productsObj = data;
    productsObj.products.forEach((product) =>
      productsEl.append(createCard(product))
    );
  })
  .then(() => {
    const allCards = document.querySelectorAll(".productCard");

    allCards.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => productsEl.append(createProductModal(data)))
      )
    );
  });

// ricerca prodotti
let userSearch = "";
const searchbarEl = document.querySelector(".search");

searchbarEl.addEventListener("input", (e) => {
  userSearch = e.target.value;
  // console.log(userSearch);
  if (userSearch.length >= 3) {
    productsEl.textContent = "";

    // console.log(productsObj);
    productsObj.products
      .filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .forEach((obj) => productsEl.append(createCard(obj)));
  } else if (userSearch.length <= 3) {
    productsEl.textContent = "";
    productsObj.products.forEach((obj) => productsEl.append(createCard(obj)));
  }
});

// FILTRO PER CATEGORIA
const categoryFilter = document.querySelector(".category");
let categoryChoice = "";

categoryFilter.addEventListener("change", (evt) => {
  categoryChoice = evt.target.value;

  if (categoryChoice !== "category") {
    productsEl.textContent = "";
    productsObj.products
      .filter((product) => product.category === categoryChoice)
      .forEach((obj) => productsEl.append(createCard(obj)));
  } else {
    productsEl.textContent = "";
    productsObj.products.forEach((obj) => productsEl.append(createCard(obj)));
  }
});

// FILTRO PER PREZZO
const priceFilter = document.querySelector(".price");
let priceChoice = "";

priceFilter.addEventListener("change", (e) => {
  priceChoice = e.target.value;

  if (priceChoice === "HtL") {
    productsEl.textContent = "";
    productsObj.products
      .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      .forEach((obj) => productsEl.append(createCard(obj)));
  } else if (priceChoice === "LtH") {
    productsEl.textContent = "";
    productsObj.products
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      .forEach((obj) => productsEl.append(createCard(obj)));
  } else {
    productsEl.textContent = "";
    productsObj.products
      .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
      .forEach((obj) => productsEl.append(createCard(obj)));
  }
});

// FILTRO PER RATING
const ratingFilter = document.querySelector(".rating");
let ratingChoice = "";

ratingFilter.addEventListener("change", (e) => {
  ratingChoice = e.target.value;

  if (ratingChoice === "HtL") {
    productsEl.textContent = "";
    productsObj.products
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
      .forEach((obj) => productsEl.append(createCard(obj)));
  } else if (ratingChoice === "LtH") {
    productsEl.textContent = "";
    productsObj.products
      .sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating))
      .forEach((obj) => productsEl.append(createCard(obj)));
  } else {
    productsEl.textContent = "";
    productsObj.products
      .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
      .forEach((obj) => productsEl.append(createCard(obj)));
  }
});
