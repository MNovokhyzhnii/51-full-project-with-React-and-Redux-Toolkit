import axios from "axios";

export const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data; // [{id,title,price,image,description,category}]
};

export const getProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};
