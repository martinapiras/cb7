import { cE, qS, tweetGen } from "./fn.js";
import { GET } from "./http.js";

const mockTweet = {
  id: 1,
  userId: 1,
  image: "https://robohash.org/lute",
  firstName: "Xx_L00t_xX",
  username: "nosc0pe360",
  body: "Lorem ipsum dolor sit amet",
  reactions: 18,
};

let postList = [];
let userList = [];
const tweetsEl = qS(".tweets");

// gets posts and users
const postData = Promise.all([GET("/posts"), GET("/users")]);

// associates users to posts and appends tweets
postData
  .then((data) => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() => {
    const fullList = postList.map((fullPost) => {
      fullPost.user = userList.find((user) => user.id === fullPost.userId);

      return fullPost;
    });
    fullList.forEach((post) => tweetsEl.append(tweetGen(post)));
  });
