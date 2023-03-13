import { useState } from 'react';
import {Nav, Catergories, TopDeals} from "./components/compIndex";
import './App.css';
import AdsBar from "./assets/AdsBar.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-b1 ">
      <div className=' sticky top-0 w-full'>
        <Nav />
      </div>
      <img src={AdsBar} alt="ads Bar" className=' w-full'/>
      <div className=' xl:px-16'>
        <Catergories />
        <TopDeals />
      </div>
    </div>
  )
}

export default App
