import React from 'react'
import api from '../api'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import CategoriesCard from './CategoriesCard';
function Categories() {

    const [categories, setcategories] = useState([]);
  const getcategories = async () => {
    const {data} = await api.get("/products/categories");
    console.log(data);
    setcategories (data);
  }

  useEffect(() => {
    getcategories();
  }, []);


  return (
    <div>
      <div className="page-header ">
      <h1>All Categories</h1>
      </div>

      <div className="container">
        <div className="row gap-3">
        {
        categories.length ? categories.map((category) => (
          <CategoriesCard category={category}/>
        )) : "Not Found"
        } 
        </div>
      </div>
      
    </div>
  )
}

export default Categories
