import Item from "./item"

export default function Categoria({menu, liberaBotao, setLiberaBotao}){
    const itens = menu.itens;

    
    return (
    <>
    <p class="categoria">{menu.titulo}</p>
        <ul class={menu.categoria}>
            {itens.map((item, index) => <Item item={item} key={index}/>)}
        </ul>
    </>
    );
    
}