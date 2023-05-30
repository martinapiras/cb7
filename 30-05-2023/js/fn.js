import { GET } from "./http.js";

export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);

export const tweetGen = (tweetData) => {
  const wrapperEl = cE("div");
  const profilePicEl = cE("div");
  const profilePicImg = cE("img");
  const contentEl = cE("div");
  const userBarEl = cE("div");
  const userDataEl = cE("div");
  const screenNameEl = cE("span");
  const usernameEl = cE("span");
  //   const actionsEl = cE("div");
  const bodyEl = cE("div");
  const bodyPEl = cE("p");
  const reactionsEl = cE("div");
  const reactionEl = cE("div");
  const reactionImg = cE("img");
  const reactionNumberEl = cE("span");

  wrapperEl.className = "tweetWrapper";
  profilePicEl.className = "tweet__profilePic";
  profilePicImg.src = tweetData.user?.image || "./assets/nameless.jpg";
  profilePicImg.alt = tweetData.user?.username || "imnameless";
  contentEl.className = "tweet__content";
  userBarEl.className = "tweet__userBar";
  userDataEl.className = "tweet__userData";
  screenNameEl.className = "userData-screenName";
  screenNameEl.textContent =
    tweetData.user?.firstName || "NAMELESS IS MY PRICE";
  usernameEl.className = "userData-nickname";
  usernameEl.textContent = "@" + tweetData.user?.username || "@imnameless";
  bodyEl.className = "tweet__body";
  bodyPEl.textContent = tweetData.body;
  reactionsEl.className = "tweet__reactions";
  reactionEl.className = "tweet__reaction";
  reactionImg.src = "#";
  reactionImg.alt = "<3";
  reactionNumberEl.textContent = tweetData.reactions;

  profilePicEl.appendChild(profilePicImg);
  userDataEl.append(screenNameEl, usernameEl);
  userBarEl.append(userDataEl);
  bodyEl.appendChild(bodyPEl);
  reactionEl.append(reactionImg, reactionNumberEl);
  reactionsEl.appendChild(reactionEl);
  contentEl.append(userBarEl, bodyEl, reactionsEl);

  wrapperEl.append(profilePicEl, contentEl);

  return wrapperEl;
};
