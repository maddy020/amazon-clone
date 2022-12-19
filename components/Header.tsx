import React from 'react'
import Image from "next/image";
import { text } from 'stream/consumers';
import { signIn,signOut,useSession } from "next-auth/react";
import {MenuIcon,ShoppingCartIcon,SearchIcon} from "@heroicons/react/outline"
import {useRouter} from "next/router";
 import { useSelector } from 'react-redux';
 import {selectItems} from "../slices/basketSlice"
function Header() { 
  const router=useRouter();
const items=useSelector(selectItems);
  return (
    
   <header>
    <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-4 flex-grow sm:flex-grow-0 items-center'>
           <Image 
           onClick={()=>router.push("/")}
           src="https://links.papareact.com/f90"
           width={150}
           height={480}
           objectFit="contain"
           className='cursor-pointer'
           />
        </div>
        <div className='hidden sm:flex items-center m-1  bg-yellow-400 hover:bg-yellow-500 flex-grow rounded-md cursor-pointer h-10'>
          <input type="text" className='h-full p-2 px-4 focus:outline-none  flex-shrink rounded-l-md items-center flex-grow'/>
          <SearchIcon 
          className="h-12 p-4"
          />
        </div>
        <div className='text-white flex space-x-6 items-center text-xs mx-6 whitespace-nowrap'> 
          <div  className='link'>
            <p >Hello Madhav Setia</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>&order</p>
          </div>
          <div
          onClick={()=>router.push("/checkout")}
          className='relative link flex items-center'>
            <span className='absolute bottom-6 right-0 md:right-8  bg-yellow-400 text-center rounded-full font-bold text-black p-1.5 '>{items.length}</span>
            <ShoppingCartIcon className='h-10'/>
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>
        </div>
    </div>

    <div className='bg-amazon_blue-light text-white flex items-center p-2 space-x-6 pl-6'>
    <p className='link flex items-center'><MenuIcon className='h-6 mr-1'/>ALL</p>
      <p className='link '>Prime Video</p>
      <p className='link '>Amazon Business</p>
      <p className='link '>Todays's deals</p>
      <p className='link hidden lg:inline-flex'>Electronics</p>
      <p className='link hidden lg:inline-flex'>Food & Grocery</p>
      <p className='link hidden lg:inline-flex'>Buy Again</p>
      <p className='link hidden lg:inline-flex'>Shopper toolkit</p>
      <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      
      
      </div>
   </header>
  )
}

export default Header
