import React, {useState} from "react";

export default function Item({item}){
    
    const [selecionado, setSelecionado] = useState("");

    function selecionar(){
        if(selecionado === ""){
            setSelecionado("selecionado");
        }else{
            setSelecionado("");
        }
    }

    return(
        <li className={selecionado} onClick={selecionar}>
            <img src={item.img} alt="não carregou"/>
            <p class="nome-item">{item.item}</p>
            <p class="descricao-item">{item.descricao}</p>
            <p class="preco-item-simbolo">R$ <span class="preco-item">{item.preco}</span></p>
        </li>
    );
}