import { userProfile, createLogin, getCart, cartGen } from "./fn.js";

export const pageTitleEl = document.querySelector("h1");

document.body.append(createLogin());
