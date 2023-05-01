import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/challenge-6bd65/us-central1/api", //The api URL (cloud function)
});

export default instance;
