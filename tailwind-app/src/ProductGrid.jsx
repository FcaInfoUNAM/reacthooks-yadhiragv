import { useState, useEffect } from "react";
import Card from './Card';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div key="product-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">
      {products.map(product => (
        <Card
          key={product.id}
          title={product.title}
          paragraph={product.description}
          image={product.image}
          model={product.price}
          productRef={`/product/${product.id}`} // Puedes cambiar esto si no tienes una vista de producto
        />
      ))}
    </div>
  );
}

export default ProductGrid;
