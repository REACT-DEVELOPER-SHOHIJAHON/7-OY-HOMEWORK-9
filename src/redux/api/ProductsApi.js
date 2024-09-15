import { api } from "./index";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/product/all",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
