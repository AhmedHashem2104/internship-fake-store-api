import { instance } from "../config/axios";
import { AuthType } from "../types/auth";
import { ProductsType } from "../types/product";

export default {
  loginFn: async (payload: AuthType) => {
    const response = await instance.post("/auth/login", payload);
    return response;
  },
  fetchProductsFn: async (): Promise<ProductsType> => {
    const response = await instance.get("/products");
    return response.data;
  },
};
