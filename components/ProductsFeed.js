import React from 'react'
import Image from 'next/image'
import Product from '../components/Product'
function ProductsFeed({products}) {
  return (
<div>
<div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
   {products.slice(0,4).map(({id,description,price,title,category,image})=>(
    <Product
    key={id}
    id={id}
    title={title}
    description={description}
    price={price}
    category={category}
    image={image}
    />

       ))}
    
    </div>
    <img className="md:col-span-full " alt="Image" src="http://links.papareact.com/dyz"/>
    <div className="md: col-span-2">
    {products.slice(4,5).map(({id,description,price,title,category,image})=>(
     <Product
     key={id}
     id={id}
     title={title}
     description={description}
     price={price}
     category={category}
     image={image}
     />
 
        ))}
     
     </div>
     <div className='grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
   {products.slice(5,products.length).map(({id,description,price,title,category,image})=>(
    <Product
    key={id}
    id={id}
    title={title}
    description={description}
    price={price}
    category={category}
    image={image}
    />

       ))}
    
    </div>
     </div>
  )
}

export default ProductsFeed
