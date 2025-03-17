import axios from "axios";

export const baseURL = `https://fakestoreapi.com`;

export const instance = axios.create({
  baseURL: baseURL,
});
