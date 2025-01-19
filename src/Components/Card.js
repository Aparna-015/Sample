import React from 'react'

const Card = ({data}) => {

    
  return (
    <div className='section'>
        {
<h1>{data.description}</h1>

        }
    </div>
  )
}

export default Card