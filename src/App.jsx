
import Card from "./../src/components/Card"
import Header from "./../src/components/Header"
import Footer from "./../src/components/Footer"
import { useState, useEffect } from "react"
import Exemplo from "./components/Exemplo";

function App() {
  const [product1, setProduct1] = useState(0);
  const [product2, setProduct2] = useState(0);
  const [total, setTotal] = useState(product1 + product2);
  useEffect(() => {
    setTotal(product1 + product2)
  })

  return (
    <>
      
      <Header />
      <Card product={product1} setProduct={setProduct1} />
      <Card product={product2} setProduct={setProduct2} />
      
      {total?<Footer total={total} />:<></>}
    </>
  )
}

export default App
