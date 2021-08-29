import Categoria from "./categoria";

export default function Corpo({menu, pedido, setPedido}){ 
    return(
    <main>    
        {menu.map((menu, index) => 
        <Categoria 
        menu={menu} 
        key={index} 
        pedido={pedido} 
        setPedido={setPedido}/>)}
    </main>
    );
}