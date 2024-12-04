import Item from "@/components/Item";
import Lista from "@/components/Lista";

export default function ComponenteComFilho(){
    return (
        <div>
            Componente Com filho!
            <Lista>
                <Item conteudo="Item 01"/>
                <Item conteudo="Item 01"/>
                <Item conteudo="Item 01"/>
                <Item conteudo="Item 01"/>
                <Item conteudo="Item 01"/>
                <Item conteudo="Item 01"/>
            </Lista>
        </div>
    )
}