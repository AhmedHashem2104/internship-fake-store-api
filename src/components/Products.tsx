import { JSX, useEffect, useState } from "react";
import { ProductsType } from "../types/product";
import apis from "../apis/apis";

const Products = (): JSX.Element => {
  const [products, setProducts] = useState<ProductsType>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await apis.fetchProductsFn();
        setProducts(response);
      } catch (err) {
        console.log(err.response.data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (products.length === 0) return <div>Empty Products</div>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} width={150} height={150} />
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Products;
