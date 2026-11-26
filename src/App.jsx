import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Categories from "./pages/Categories"
import CategoryProducts from "./pages/CategoryProducts"
import Footer from "./components/home/Footer"



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/category/:categoryName" element={<CategoryProducts/>} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App