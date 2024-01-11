export default function Footer(props) {
    return (
        <>
        <footer>
            <p>Total de Itens</p>
            <p>{props.total} {props.total === 1? "item": "itens"}</p>
        </footer>
        </>
    )
}