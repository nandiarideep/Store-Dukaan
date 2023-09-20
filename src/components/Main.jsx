import React,{useState} from 'react'
import {CiSearch, CiShoppingCart, CiHeart} from 'react-icons/ci'
import watch from '../assets/watch.jpg'
import laptop from '../assets/laptop.jpg'
import keyboard from '../assets/keyboard.jpg'
import sunGlass from '../assets/glasses.jpeg'
import leatherWatch from '../assets/leatherWatch.jpg'
import mouse from '../assets/mouse.jpg'
import monitor from '../assets/monitor.jpg'
import glass1 from '../assets/glass1.jpg'
import prof from '../assets/prof.jpg'
import { Link } from 'react-router-dom'
 
const Main = () => {
  let Products =[
    {
      img:glass1,
      title:'Glasses',
      description:'lorem ipsum dolar',
      price:650
    },
    {
      img:keyboard,
      title:'Black keyboard',
      description:'lorem ipsum dolar',
      price:950
    },
    {
      img:watch,
      title:'Apple Watch',
      description:'lorem ipsum dolar',
      price:'1,10,000'
    },
    {
      img:mouse,
      title:'Black Mouse',
      description:'lorem ipsum dolar',
      price:850
    },
    {
      img:laptop,
      title:'Acer Laptop',
      description:'lorem ipsum dolar',
      price:'75,000'
    },
    {
      img:leatherWatch,
      title:'Leather Watch',
      description:'lorem ipsum dolar',
      price:4500
    },
    {
      img:monitor,
      title:'Oneplus Monitor',
      description:'lorem ipsum dolar',
      price:'15,000'
    },
    {
      img:sunGlass,
      title:'Sun Glasses',
      description:'lorem ipsum dolar',
      price:400
    },
    {
      img:prof,
      title:'Desktop',
      description:'lorem ipsum dolar',
      price:'50,000'
    },
    {
      img:leatherWatch,
      title:'Leather',
      description:'lorem ipsum dolar',
      price:40
    }, 
  ]
  const [filteredProducts,setFilteredProducts]=useState(Products)
  const searchHandler = (e)=>{
    const filteredArray= Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
    if(filteredArray.length !=0){
      setFilteredProducts(filteredArray);
    }
  }
  return (
    <div className='w-full relative'>
      <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
          <h1 className='text-3xl font-bold'>Dukaan</h1>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded duration-200">
            <input type="text" placeholder='Search product' className='bg-transparent outline-0'
            onChange={searchHandler}/>
            <button onClick={()=> searchHandler()}><CiSearch/></button>
          </div>
        </div>
        <div className="categories bg-white w-full flex justify-between space-x-8 px-2 py-10 text-lg font-bold">
          <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl cursor-pointer hover:bg-gray-100 duration-200'>
            <p>Watches</p>
          </div>
          <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl cursor-pointer hover:bg-gray-100 duration-200'>
            <p>Bags</p>
          </div>
          <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl cursor-pointer hover:bg-gray-100 duration-200'>
            <p>Monitors</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl cursor-pointer hover:bg-gray-100 duration-200'>
            <p>Mouse</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl cursor-pointer hover:bg-gray-100 duration-200'>
            <p>Glasses</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl cursor-pointer hover:bg-gray-100 duration-200'>
            <p>Keyboards</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl cursor-pointer hover:bg-gray-100 duration-200'>
            <p>Laptops</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl cursor-pointer hover:bg-gray-100 duration-200'>
            <p>Laptops</p>
          </div>
        </div>
      </div>
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts && filteredProducts.map((product,idx)=>{
          return(
            <div key={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border rounded-2xl cursor-pointer hover:translate-y-1 duration-200">
            <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2 rounded-2xl' />
            <div className='m-2 bg-gray-100 p-2 rounded-lg'>
              <h1 className='text-xl font-semibold'>{product.title}</h1>
              <p className='text-sm'>{product.description}</p>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>₹{product.price}.00</p>
                <div className='flex items-center'>
                  <Link to='/favs'>
                    <CiHeart size={'1.5rem'} className='hover:text-red-700' />
                  </Link>
                  <Link to='/cart'>
                    <CiShoppingCart size={'1.5rem'} className='hover:text-red-700' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Main