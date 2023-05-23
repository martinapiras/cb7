import userData from "./credentials.js";
import { pageTitleEl } from "./script.js";

//////////////////// LOGIN ///////////////////////
export let userProfile;

export const createLogin = () => {
  const loginWrapperEl = document.createElement("form");
  const titleEl = document.createElement("h2");
  const usernameInputEl = document.createElement("input");
  const passwordInputEl = document.createElement("input");
  const submitEl = document.createElement("input");

  loginWrapperEl.className = "loginModal";
  titleEl.className = "loginTitle";
  titleEl.textContent = "Welcome back!";
  usernameInputEl.setAttribute("type", "text");
  usernameInputEl.setAttribute("placeholder", "Username");
  passwordInputEl.setAttribute("type", "password");
  passwordInputEl.setAttribute("placeholder", "Password");
  submitEl.setAttribute("type", "submit");
  submitEl.setAttribute("value", "Enter");

  submitEl.addEventListener("click", (e) => {
    e.preventDefault();
    const credentialsMatch = userData.find(
      (user) =>
        user.username === loginWrapperEl[0].value &&
        user.password === loginWrapperEl[1].value
    );

    if (!!credentialsMatch) {
      alert("Welcome back!");
      userProfile = credentialsMatch;
      document.body.removeChild(loginWrapperEl);
      pageTitleEl.textContent = `${userProfile.name}'s cart`;

      getCart(`${userProfile.id}`).then((data) =>
        data.products.forEach((product) =>
          document.body.append(cartGen(product))
        )
      );

      if (userProfile.name === "Claude") {
        pageTitleEl.setAttribute("style", "transform: rotate(180deg)");
      }
    } else {
      alert("Your username and/or password is incorrect");
    }
  });

  loginWrapperEl.append(titleEl, usernameInputEl, passwordInputEl, submitEl);

  return loginWrapperEl;
};

//////////////////// CART ///////////////////////
export const getCart = async (userId) => {
  const res = await fetch(`https://dummyjson.com/carts/${userId}`);
  const cartData = await res.json();

  return cartData;
};

export const cartGen = (productInfo) => {
  const wrapperEl = document.createElement("div");
  const titleEl = document.createElement("h3");
  const priceEl = document.createElement("h4");
  const quantityEl = document.createElement("p");
  const totalPriceEl = document.createElement("h4");

  wrapperEl.className = "productWrapper";
  titleEl.className = "productName";
  titleEl.textContent = productInfo.title;
  priceEl.className = "productPrice";
  priceEl.textContent = productInfo.price + "€";
  quantityEl.className = "productQuantity";
  quantityEl.textContent = "Quantity: " + productInfo.quantity;
  totalPriceEl.className = "productTotalPrice";
  totalPriceEl.textContent = "Total price: " + productInfo.total + "€";

  wrapperEl.append(titleEl, priceEl, quantityEl, totalPriceEl);

  return wrapperEl;
};
