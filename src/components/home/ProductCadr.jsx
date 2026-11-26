import React from 'react'
import '../../style/productcard.css'
import { Link } from 'react-router-dom'
function ProductCadr({ product }) {
  return (
    <div className=" col-md-4 g-3"  style={{ width: "18rem" }}>
      <div className='card'>
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        {/* الصح تبع كل صفحة id لحتى خلي يفتح ال   */}
        <Link to={`/products/${product.id}`} >
        <button className='btn btn-outline-success'>More Details</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default ProductCadr