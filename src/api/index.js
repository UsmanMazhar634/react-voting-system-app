import axios from "axios";

const getUsers = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    Accept: "application/json",
  },
});

export default getUsers;