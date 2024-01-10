export default function Footer(props) {
    return (
        <>
        <footer>
            <p>Total de Itens</p>
            <p>{props.total} itens</p>
        </footer>
        </>
    )
}