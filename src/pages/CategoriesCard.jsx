import React from 'react'
import { Link } from 'react-router-dom'
function CategoriesCard({ category }) {
    return (
        <div className=" col-md-3 mt-3" style={{ width: "18rem" }}>
            <div className='card'>
                <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    <a className='text-decoration-none' href={category.url} style={{color: "#6c757d"}}>{category.url}</a>
                    

                </div>
                <Link to={`/category/${category.slug}`}>
                        <button  className='m-3 btn btn-outline-success' >More Details</button>
                    </Link>
            </div>
        </div>
    )
}

export default CategoriesCard
