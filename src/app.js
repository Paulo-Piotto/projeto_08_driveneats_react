import React, {useState} from "react";
import Topo from "./topo";
import Corpo from "./corpo";
import Rodape from "./rodape";
import pudim from "./assets/pudim.png";
import frango from "./assets/frango.png";
import coca from "./assets/coca.png";



const menu = [
    {
        categoria: 'pratos',
        titulo: 'Primeiro, seu prato',
        itens: [
            {
                item: 'Super Yin Yang',
                img: frango,
                descricao: 'Um pouco de batata, um pouco de salada',
                preco: 50.00
            },
            {
                item: 'Yin Yang Grande',
                img: frango,
                descricao: 'Um pouco de batata, um pouco de salada',
                preco: 20.90
            },
            {
                item: 'Frango Yin Yang',
                img: frango,
                descricao: 'Um pouco de batata, um pouco de salada',
                preco: 14.90
            },
            {
                item: 'Mini Yin Yang',
                img: frango,
                descricao: 'Um pouco de batata, um pouco de salada',
                preco: 9.90
            }
        ]
    },
    {
        categoria: 'bebidas',
        titulo: 'Agora, sua bebida',
        itens: [
            {
                item: 'Coquinha gelada',
                img: coca,
                descricao: 'Lata 150ml',
                preco: 2.90
            },
            {
                item: 'Coca gelada',
                img: coca,
                descricao: 'Lata 350ml',
                preco: 5.90
            },
            {
                item: 'Cocona gelada',
                img: coca,
                descricao: 'Lata 1L',
                preco: 7.90
            },
            {
                item: 'Super Coca gelada',
                img: coca,
                descricao: 'Lata 2.5L',
                preco: 9.90
            }
        ]
    },
    {
        categoria: 'sobremesas',
        titulo: 'Por fim, sua sobremesa',
        itens: [
            {
                item: 'Pudinzinho',
                img: pudim,
                descricao: 'Fatia pequena de pudim',
                preco: 2.90
            },
            {
                item: 'Pudim',
                img: pudim,
                descricao: 'Fatia média de pudim',
                preco: 5.90
            },
            {
                item: 'Pudim grande',
                img: pudim,
                descricao: 'Fatia grande de pudim',
                preco: 7.90
            },
            {
                item: 'Pudim inteiro',
                img: pudim,
                descricao: 'Pudim inteiro',
                preco: 21.90
            }
        ]
    },
]

export default function App() {
    const [liberaBotao, setLiberaBotao] = useState("");

    return (
      <div>
        <Topo/>
        <Corpo menu={menu} liberaBotao={liberaBotao} setliberaBotao={setLiberaBotao}/>        
        <Rodape liberaBotao={liberaBotao}/>
      </div>
    );
}