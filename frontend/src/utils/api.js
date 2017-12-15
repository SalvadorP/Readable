import { GET_ALL_POSTS } from "../actions/types";

export function headers() {
  let headers = new Headers();
  headers.append("Authorization", "whatever-you-want");
  headers.append("Content-Type", "application/json");
  return headers;
}

export function getPosts() {
  fetch("http://localhost:3001/posts", {method: "GET", headers: headers()})
  .then(function(resp){
    resp.json().then(function(data){
      console.log(data);
      var obj = {
        type: GET_ALL_POSTS,
        posts: data
      };
      return obj;
    })
  })
}
