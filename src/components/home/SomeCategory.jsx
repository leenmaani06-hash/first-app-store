import React, { useEffect, useState } from 'react'
import api from '../../api';
import SomeCard from './SomeCard';

function SomeCategory() {

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data } = await api.get("/products/categories");
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 className='title-h2'>Categories</h2>
        </div>

        

        <div className="some row ">

          {categories.slice(0, 6).map((category) => (
            <SomeCard
              key={category.slug}
              category={category}
            />
          ))}

        </div>

      
    </>
  )
}

export default SomeCategory