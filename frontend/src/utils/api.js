import { GET_ALL_POSTS } from "../actions/types";

export function headers() {
  let headers = new Headers();
  headers.append("Authorization", "whatever-you-want");
  headers.append("Content-Type", "application/json");
  return headers;
}

