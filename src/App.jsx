import { useState } from 'react';
import {Nav, Catergories, TopDeals, Footer} from "./components/compIndex";
import './App.css';
import AdsBar from "./assets/AdsBar.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-b1 ">
      {/* nav component */}
      <div className=' sticky top-0 w-full'>
        <Nav />
      </div>
      <img src={AdsBar} alt="ads Bar" className=' w-full'/>

      {/* the down Section which has the Categories and the Top Deals of the weak */}
      <div className=' xl:px-16'>

        {/* Categories Caption design followed by the Categories components*/}
        <div className=' flex bg-b2 p-4 justify-between my-10 rounded-xl'>
                  <h2 className=' pl-4 text-lg font-bold'>Categories</h2>
                  <button className=' underline'>see all</button>
        </div>
        <Catergories />
        

        {/* Top Deal Caption design followed by the Topdeal components */}
        <div className=' flex bg-b2 p-4 justify-between my-10 rounded-xl'>
                  <h1 className=' pl-4 text-lg font-bold'>Top deals for the weak</h1>
                  <button className=' underline'>see all</button>
        </div>
        <TopDeals />
      </div>

      <Footer />
      
    </div>
  )
}

export default App
