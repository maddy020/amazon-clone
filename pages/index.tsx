import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header' 
import Banner from '../components/Banner'
import ProductsFeed from '../components/ProductsFeed'
const Home: NextPage = ({products}) => {
  console.log(products)
  return (
    <div className='bg-gray-100'>
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <ProductsFeed products={products}/>
      </main>
    </div>
  )
}
export async function getServerSideProps(){
  const res=await fetch(`https://fakestoreapi.com/products`)
  const products=await res.json();

return {
  props:{
    products,
  },
};
}
export default Home
