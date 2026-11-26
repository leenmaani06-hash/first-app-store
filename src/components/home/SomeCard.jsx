import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/some.css'
function SomeCard({ category }) {
  return (
    <div className="sss col-md-2 mt-3">
                <div className=' card-some'>

                        <h5 className="">{category.name}</h5>
                        
                        
    
                    
                    <Link to={`/category/${category.slug}`}>
                            <button  className='m-3 btn btn-outline-success but-some mr-5 '  style={{ width: "150px" }}>More Details</button>
                        </Link>
                </div>
            </div>
  )
}

export default SomeCard