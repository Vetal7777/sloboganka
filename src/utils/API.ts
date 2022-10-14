import axios from "axios";

export default axios.create({
  baseURL: 'https://sloboganka.herokuapp.com/content',
  headers: {
    "Content-Type": "application/json",
  },
});