import React, {useState} from "react";

export default function Rodape({liberaBotao, setLiberaBotao, pedido}){

    const [mensagemFinal, setMensagemFinal] = useState('#');

    function liberarBotao(){
        let pratos = 0;
        let bebidas = 0;
        let sobremesas = 0;
        pedido.forEach(item => {
            if(item.categoria === 'pratos'){
                pratos++;
            }else if(item.categoria === 'bebidas'){
                bebidas++;
            }else if(item.categoria === 'sobremesas'){
                sobremesas++;
            }
            
        });

        if(pratos >= 1 && bebidas >= 1 && sobremesas >= 1){
            setLiberaBotao("botao-liberado")
        
        }else{
            setLiberaBotao("");
        }
    }

    liberarBotao();

    function geraMensagem(){
        let total = 0;
        let mensagem = `Olá gostaria de fazer um pedido: `;
        console.log(pedido);
        pedido.forEach(item => {
            total += Number(item.preco);
            if(item.categoria === 'pratos'){
                mensagem += ` Prato: ${item.item}`;
            }else if(item.categoria === 'sobremesas'){
                mensagem += ` Sobremesa: ${item.item}`;
            }else if(item.categoria === 'bebidas'){
                mensagem += ` Bebida: ${item.item}`;
            }
            console.log(total); 
        })
        mensagem += ` Total: ${total.toFixed(2)}`;
        let texto = encodeURIComponent(mensagem);

        setMensagemFinal(`https://wa.me/5514996047024?text=${texto}`);        
    }
        

    return(
    <footer>
        <a href={mensagemFinal} onClick={geraMensagem}>
        <button className={`botao-finalizar ${liberaBotao}`} >
            <p>Escolha os 3 itens para fazer o pedido</p>
        </button>
        </a>
    </footer>
    );
}


    
