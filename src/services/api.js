import axios from "axios";

const api = axios.create({
  baseURL: "https://senai-overflow-danielvitor.herokuapp.com/",
});

// api.defaults.headers.common[
//   "Authorization"
// ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjIsInN0dWRlbnROYW1lIjoiQ2ljbGFubyIsImlhdCI6MTYxNDk3MTg0MiwiZXhwIjoxNjE0OTc1NDQyfQ.nGJPWbvXjM7tPhBZERBBDqwAAjFLeBzBjK6sBeHw0Sg`;

export { api };
