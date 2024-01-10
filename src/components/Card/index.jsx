const Card = (props) => {
    function handleProduct(e) {
        if (e === "+") {
            props.setProduct(props.product + 1)

        }
        if (e === "-" && props.product > 0) {
            props.setProduct(props.product - 1)
        }
    }
    return (
        <article>
            <img src="" alt="" />
            <div>
                <h2>Hamburguer</h2>
                <p>Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.
                </p>
                <div>
                    <button onClick={() => {
                        handleProduct("-")
                    }

                    }>-</button>
                    <p>{props.product} items</p>
                    <button onClick={() => {
                        handleProduct("+")
                    }}>+</button>
                </div>
            </div>
        </article>
    )
}
export default Card