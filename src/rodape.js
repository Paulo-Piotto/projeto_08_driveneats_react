export default function Rodape(props){
    return(
    <footer>
        <button class={`botao-finalizar ${props.liberaBotao}`}  onclick="confirmarPedido()">
            <p>Selecione os 3 itens
                para fechar o pedido</p>
        </button>
    </footer>
    );
}