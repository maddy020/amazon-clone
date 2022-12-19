import React,{useState} from 'react'
import Image from 'next/image'
import {addToBasket} from "../slices/basketSlice";
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';
function Product({id,description,price,title,category,image}) {

  const [rating]=useState(Math.floor(Math.random()*(5))+1);
  const [hasPrime]=useState(Math.random()<0.5);
  const dispatch=useDispatch();
  const addItemsToBasket=()=>{
   const product={
     id,
     description,
     price,
     title,
     category,
     image,
     hasPrime,
   };
    dispatch(addToBasket(product));
 }
    return (
    <div className='bg-white relative flex items-center flex-col z-30 m-10  p-10'>

    <p className='absolute top-2 right-2 italic text-xs text-gray-400'>{category}</p>
    <Image  src={image} height={200} width={200} objectFit="contain"  />
    <h4 className='my-3'>{title}</h4>
    <div className='flex'>
        {Array(rating).fill().map((_,i)=>(
            <StarIcon className='h-5 text-yellow-500'/  >
        ))}
    </div>

    <p className='my-3 text-xs '>{description}</p>
    <div className='font-semibold text-md'>{`$${price}`}</div>
    {hasPrime && (
        <div className='flex items-center space-x-2'>
            <img className='w-12' src='https://links.papareact.com/fdw'/>
            <p className='text-xs'>Free Next-Day-Deleivery</p>
        </div>
    )}
<button onClick={addItemsToBasket} className='mt-auto button'>Add to Basket</button>
</div>
  )
}

export default Product
 