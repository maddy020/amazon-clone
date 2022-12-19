import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import { selectItems } from '../slices/basketSlice';
import { useSession } from 'next-auth/react'
import { selectTotal } from '../slices/basketSlice'
import {loadStripe} from  '@stripe/stripe-js'
import axios from 'axios';

const stripePromise=loadStripe(`${process.env.NEXT_APP_STRIPE_PUBLISHABLE_KEY}`);
function Checkout() {
 
  const session=useSession();

 const items=useSelector(selectItems);
 const total=useSelector(selectTotal);
 const createCheckoutSession= async ()=>{
const stripe=await stripePromise;
const checkoutSession=await axios.post('/api/create-checkout-session',
{
  items:items,
  // email:session.user.email,
});
const result=await stripe.redirectToCheckout({
  sessionId:checkoutSession.data.id,
});
if(result.error)alert(result.error.message);
 };
  return (
    <div className=' bg-gray-100 '>
      <Header />
      <main className='md:flex max-w-screen-2xl mx-auto p-7'>
           <div className='flex-grow m-5 shadow-sm'>
           <Image  
           src="https://links.papareact.com/ikj"
           width={1020}
           height={250}
           />
           <div className='flex flex-col p-5 mt-3 border-b space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>{
              items.length===0?"Your Amazon Basket is Empty" :"Shopping Basket"
            }</h1>

             {items.map((item,i)=>(
              <CheckoutProduct 
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}/>
             ))}
           </div>
           </div>
           <div className='flex flex-col bg-white p-7 shadow-md'  >
            {items.length>0 && (
            <>
            <h2 className='whitespace-nowrap'>Subtotal ({items.length}) items  <span>
              <div className='font-bold'>${total}</div>
              </span></h2>
           
            <button
            role="link"
            onClick={createCheckoutSession}
            className='button mt-2 '>
            Proceed To Checkout
            </button>
            </>
            )  
          }

     
           </div>
      </main>
    </div>
  )
}

export default Checkout
