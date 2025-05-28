import { useEffect, useState } from "react";

function ProductDescription() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (!product) {
    return <div className="p-8 text-white">Cargando producto...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{product.title}</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{product.description}</p>
      <p className="text-xl font-semibold text-green-600 dark:text-green-400">${product.price}</p>
      <p className="text-sm text-gray-500 mt-2">Categoría: {product.category}</p>
    </div>
  );
}

export default ProductDescription;
