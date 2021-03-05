import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjMsInN0dWRlbnROYW1lIjoiUGVkcm8iLCJpYXQiOjE2MTQ5NzIwMzAsImV4cCI6MTYxNDk3NTYzMH0.pBrPdA2bNqKjVZTa_V_B6yuX1P8S2uLiSLL5_SkKwnE`;

export { api };
