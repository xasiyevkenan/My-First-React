import React from 'react'
import './index.css'

const Course = (props) => {
    const {title,description,img} = props;
    
    return (
    <div className='course'>
        <div className='image'>
        <img src={img} alt="" />
        </div>

        <div className="title">
            <h1>{title}</h1>
        </div>

        <div className="description">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Course