import Item from "./item"

export default function Categoria({menu, pedido, setPedido}){
    const itens = menu.itens;
    

        

    return (
    <>
    <p className="categoria">{menu.titulo}</p>
        <ul className={menu.categoria}>
            {itens.map((item, index) => 
            <Item
             item={item}
             key={index}
             pedido={pedido}
             setPedido={setPedido}
             categoria={menu.categoria}
             />)}
        </ul>
    </>
    );
    
}