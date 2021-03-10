import axios from "axios";

const api = axios.create({
	baseURL: "http://10.0.2.2:3333/",
});

// api.defaults.headers.common[
//   "Authorization"
// ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjIsInN0dWRlbnROYW1lIjoibWFpayIsImlhdCI6MTYxNTIyOTA2OSwiZXhwIjoxNjE1MjMyNjY5fQ.dpwbg90grL0fxKz5xeCY0AFqcWpE0wos1-zovi9YOrA`;

export { api };
