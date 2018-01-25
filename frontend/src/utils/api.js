// import { GET_ALL_POSTS } from "../actions/types";
import _ from 'lodash';

export function headers() {
  let headers = new Headers();
  headers.append("Authorization", "whatever-you-want");
  headers.append("Content-Type", "application/json");
  return headers;
}

export function sortIt(data, sortby) {
  console.log('** sortIt **');
  console.log(data);
  console.log('** ****** **');
  switch(sortby) {
      case 'upvotes':
          return _.reverse(_.sortBy(data, ['voteScore']));
      case 'downvotes':
          return _.sortBy(data, ['voteScore']);
      case 'latest':
          return _.reverse(_.sortBy(data, ['timestamp']));
      default:
          return data;
  }
}
