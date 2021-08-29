import Categoria from "./categoria";

export default function Corpo({menu, liberaBotao, setLiberaBotao}){ 
    return(
    <main>    
        {menu.map((menu, index) => <Categoria menu={menu} key={index} liberaBotao={liberaBotao} setliberaBotao={setLiberaBotao}/>)}
    </main>
    );
}