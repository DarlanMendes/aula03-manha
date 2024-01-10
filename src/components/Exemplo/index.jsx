import { useState, useEffect } from "react"
export default function Exemplo() {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const[ total, setTotal] = useState(counter + counter2)

    useEffect(()=>{
        console.log(counter, "counter depois do render")
        console.log("Renderizou a tela ")
        setTotal(counter+counter2)
    }, [counter, counter2])
    function handleCounter(action) {
        if (action === "+") {
            setCounter(counter + 1)
            console.log("incrementando counter 1")
            console.log("counter antes do render")
        }
        if (action === "-" && counter > 0) {
            setCounter(counter - 1)
        }
        
    }
    function handleCounter2(action) {
        if (action === "+") {
            setCounter2(counter2 + 1)
        }
        if (action === "-" && counter2 > 0) {
            setCounter2(counter2 - 1)
        }
        
    }

    return (
        <>
            <h1>Counter 1</h1>
            <div>
                <button
                    onClick={() => {
                        handleCounter("+")
                    }}
                >+</button>
                {counter}
                <button
                    onClick={() => {
                        handleCounter("-")
                    }}
                >-</button>
            </div>
            <div>
                <h1>Counter 2</h1>
            <button
                    onClick={() => {
                        handleCounter2("+")
                    }}
                >+</button>
                {counter2}
                <button
                    onClick={() => {
                        handleCounter2("-")
                    }}
                >-</button>

            </div>
            <h2>Total : {total}</h2>


        </>

    )
}