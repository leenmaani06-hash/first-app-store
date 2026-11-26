import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../api'
import ProductCadr from '../components/home/ProductCadr';
function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await api.get(`/products/category/${categoryName}`);
    console.log(res.data.products); 
    setProducts(res.data.products)
  }

useEffect (() => {
  getProducts();
}, [])

  return (
    <>
      <div className="page-header ">
      <h1>{categoryName}</h1>
      </div>

      <div className="container">
        <div className="row gap-4">

        
        {
          products.length ? products.map ((product)=> (
            <ProductCadr product={product}/>
          )) : "Not Found"

        }
        </div>
      </div>



    </>
  )
}

export default CategoryProducts
