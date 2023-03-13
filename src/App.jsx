import { useState } from 'react';
import {Header, Catergories, TopDeals} from "./components/compIndex";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header />
      <Catergories />
      <TopDeals />
    </div>
  )
}

export default App
