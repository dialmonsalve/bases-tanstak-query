import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: products,
    isFetching,
  } = useQuery(
    ["products", { filterKey }],
    () => productsActions.getProducts({ filterKey }),
    {
      staleTime: 1000 * 60 * 60,
    }
  );
  return {
    isLoading,
    isError,
    error,
    products,
    isFetching,
  };
};
