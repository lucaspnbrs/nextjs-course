export default function repeticao1(){
    const listaAprovados = [
        'joao', 
        'maria', 
        'ana', 
        'banana', 
        'richardGostoso', 
        'cruz', 
        'Sasa'
    ]

    function renderizarLista(){
       const itens = [];
       for(let i = 0; i < listaAprovados.length; i++){
        itens.push(<li>{listaAprovados[i]}</li>);
       }

       return itens;
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    );
}