import { useParams } from "react-router-dom";
import { ProductCard, useProduct } from "..";
import { useEffect } from "react";

export const ProductById = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  

  const { isLoading, product } = useProduct({ id: Number(id) });
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {isLoading && <div>Cargando...</div>}

      {product && <ProductCard product={product} fullDescription/>}
    </div>
  );
};
