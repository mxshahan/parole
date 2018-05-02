import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({ category, ...props }) => (
  <div className="categories-list">
    <div className="content-sidebar">
      <h4><img src="/images/fi.png" alt="" />Categories</h4>
      <ul>
        {category.map(cat => {
          return (
            <li key={cat._id}>
              <Link
                to={`/category?id=${cat._id}`}
                style={{cursor: 'pointer'}}
                onClick={(e) => props.filter(cat._id)}
              >
              {cat.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default CategoryList
