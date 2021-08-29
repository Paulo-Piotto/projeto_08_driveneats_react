import React, {useState} from "react";

export default function Item({item, pedido, setPedido,categoria}){
    
    const [selecionado, setSelecionado] = useState("");


    function selecionar(){
        if(selecionado === ""){
            setSelecionado("selecionado");
            setPedido([...pedido, {
                                item: item.item,
                                preco: item.preco,
                                categoria: categoria
                            }]);
        }else{
            setSelecionado("");
            setPedido(pedido.filter((obj) => obj.item !== item.item ));
        }
    }

    return(
        <li className={selecionado} onClick={selecionar}>
            <img src={item.img} alt="não carregou"/>
            <p className="nome-item">{item.item}</p>
            <p className="descricao-item">{item.descricao}</p>
            <p className="preco-item-simbolo">R$ <span className="preco-item">{item.preco}</span></p>
        </li>
        
    );
}