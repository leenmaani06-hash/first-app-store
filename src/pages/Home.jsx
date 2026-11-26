import React from 'react'
import api from '../api'
import { useState, useEffect } from 'react'
import ProductCadr from '../components/home/ProductCadr'
import Carousel from '../components/home/Carousel'
import Features from '../components/home/Features'
import SomeCard from '../components/home/SomeCard'
import SomeCategory from '../components/home/SomeCategory'

function Home() {
  const [products, setproducts] = useState([]);
  const getProducts = async () => {
    const res = await api.get("/products?limit=8");
    console.log(res.data.products);
    setproducts(res.data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <> 
    <div className="container">
      {/* استدعينا الـ Carousel هنا داخل الـ container */}
      {products.length ? <Carousel products={products} /> : null}
    </div>
       
       <div>
        <Features/>
       </div>

<div className="container">
      <h2 className='title-h2'>All Products</h2>
      <div className="row gap-3">
        {products.length ? (
          products.map((product) => (
            <ProductCadr key={product.id} product={product} />
          ))
        ) : ("Not Found")}
      </div>
    </div>

    <div>
      <SomeCategory/>
    </div>
      
    
    </>
  )
}

export default Home