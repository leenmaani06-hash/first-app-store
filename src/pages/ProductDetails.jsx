import React from 'react'
import api from '../api';
//  ProductCadr بصفحة حطيتو يلي  id لأستقبل ال 
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../style/product-details.css'
import ProductCadr from '../components/home/ProductCadr';
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isFavorite, setIsFavorite] = useState(false);

  const getProduct = async () => {
    const res = await api.get(`/products/${id}`)
    console.log(res.data)
    setProduct(res.data)
  }

  const getRelatedProducts = async () => {
    const res = await api.get("/products?limit=4");
    setRelatedProducts(res.data.products);
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    getProduct()
    getRelatedProducts()
    
  }, [])
  return (
    <>
      <div className='page-header'>
        <h1>{product.title}</h1>
      </div>

      <div className='products-details container'>
        <div className='product-details d-flex'>
          <div className='section-left w-50 '>
            <img src={product.thumbnail} alt="" />
          </div>




          <div className='section-right w-50 '>

            <div className='detail-section'>
              <p>{product.category}</p>
              <h2>{product.title}</h2>
              <h3>{product.price}$</h3>
            </div>

            <div className='select-section'>
              <p>Select Size:</p>

              <div className="d-flex gap-4">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className='d-flex gap-2 add-card'>
                <button style={{ width: "520px" }}>Add To Card</button>
                <i className={`fa-heart ${isFavorite ? 'fa-solid active' : 'fa-regular'}`} onClick={toggleFavorite} style={{ cursor: 'pointer' }}></i>
              </div>
            </div>

            <div className='description'>
              <h4>Description & Fit</h4>
              <p>{product.description}</p>
            </div>

            <div className="shipping-section">
              <h4>Shipping</h4>
              {/* First row */}
              <div className="shipping-row d-flex">
                <div className="shipping-item d-flex">
                  <div className="icon">
                    <i className="fa-solid fa-tag"></i>
                  </div>
                  <div className="information">
                    <p>Brand</p>
                    <span>{product.brand}</span>
                  </div>
                </div>

                <div className="shipping-item d-flex">
                  <div className="icon">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div className="information">
                    <p>Warranty</p>
                    <span>{product.warrantyInformation}</span>
                  </div>
                </div>
              </div>

              {/* Second row */}
              <div className="shipping-row d-flex">
                <div className="shipping-item d-flex">
                  <div className="icon">
                    <i class="fa-solid fa-box-open"></i>
                  </div>
                  <div className="information">
                    <p>Availability</p>
                    <span>{product.availabilityStatus}</span>
                  </div>
                </div>

                <div className="shipping-item d-flex">
                  <div className="icon">
                    <i className="fa-solid fa-truck"></i>
                  </div>
                  <div className="information">
                    <p>Shipping</p>
                    <span>{product.shippingInformation}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>


      <div className="rating-reviews container ">
        <div className='row'>

          <div className='rating col-md-6'>
            <h4>Rating & Reviews</h4>
            <div className='d-flex'>
              <div className='product-rating w-50'>
                <p>{product.rating}</p><span>/5</span>
              </div>
              <div className='w-50'>

                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="text-warning fs-4">★</span>
                  <span>5</span>

                  <div
                    className="progress flex-grow-1"
                    style={{ height: "15px" }}
                  >
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="text-warning fs-4">★</span>
                  <span>4</span>

                  <div
                    className="progress flex-grow-1"
                    style={{ height: "15px" }}
                  >
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="text-warning fs-4">★</span>
                  <span>3</span>

                  <div
                    className="progress flex-grow-1"
                    style={{ height: "15px" }}
                  >
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="text-warning fs-4">★</span>
                  <span>2</span>

                  <div
                    className="progress flex-grow-1"
                    style={{ height: "15px" }}
                  >
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "4%" }}
                    ></div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="text-warning fs-4">★</span>
                  <span>1</span>

                  <div
                    className="progress flex-grow-1"
                    style={{ height: "15px" }}
                  >
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "4%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='reviews col-md-5'>
            <h4>{product?.reviews?.[0]?.reviewerName}</h4>
            <div className='date-star row'>
              <div className='star col-6'>
                <span>Rating: {product?.reviews?.[0]?.rating}</span>
              </div>
              <div className='date col-6'>
                <span>{product?.reviews?.[0]?.date}</span>
              </div>
            </div>

            <p className='comment'>{product?.reviews?.[0]?.comment}</p>
            <p className='email'>{product?.reviews?.[0]?.reviewerEmail}</p>
          </div>


        </div>


      </div>

      <div className="container my-5">
        <h1> More Products</h1>
        <div className="row gap-3">
          {relatedProducts.length ? (
            relatedProducts.map((item) => (
              <ProductCadr key={item.id} product={item} />
            ))
          ) : (
            "Not Found"
          )}
        </div>
      </div>


    </>
  )
}

export default ProductDetails
