import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import getAllProductsService from '../../services/getAllProductsService';
import ProductCard from './components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      const response = await getAllProductsService();
      setProducts(response.data.message);
    }

    getAllProducts();

    const cart = JSON.parse(localStorage.getItem('delivery_cart'));
    if (!cart) localStorage.setItem('delivery_cart', '[]');
  }, []);

  return (
    <section>
      <Navbar />
      <div data-testid="customer_products__button-cart">
        <span> Ver Carrinho: R$ </span>
        <span data-testid="customer_products__checkout-bottom-value">0</span>
      </div>
      <div>
        {
          products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />))
        }
      </div>
    </section>
  );
}
