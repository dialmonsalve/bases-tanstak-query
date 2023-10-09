import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  id: number;
}

export const useProduct = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: product,
    isFetching,
  } = useQuery(
    ["product", id],
    () => productsActions.getProductById(id),
    {
      staleTime: 1000 * 60 * 60,
    }
  );
  return {
    isLoading,
    isError,
    error,
    product,
    isFetching,
  };
};
