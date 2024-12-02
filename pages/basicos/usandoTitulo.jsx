import Titulo from "@/components/Titulo";

export default function usandoTitulo(){
    return (
        <div>
        <Titulo principal="Nao me matar" descricao="E continuar tentando"/>
        <Titulo principal="Nao me matar" descricao="E continuar tentando" pequeno={true}/>
        <Titulo principal="Nao me matar" descricao="E continuar tentando" pequeno/>
        </div>
    )
}