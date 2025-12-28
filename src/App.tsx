import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import AppFooter from "./components/AppFooter"
import AppLogin from "./components/AppLogin"
import AppNav from "./components/AppNav"
import ProductOverview from "./components/productOverview"
import Products from "./components/products"
import ShoppingCart from "./components/shoppingCart"
import { Product, Root } from "./models/Models"

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    const url = "https://dummyjson.com/products";
    try {
      const response = await axios.get<Root>(url);
      setProducts(response.data.products);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <AppNav />

      <main>
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="products/:id" element={<ProductOverview />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<AppLogin />} />
        </Routes>
      </main>

      <AppFooter />
    </>
  )
}

export default App
