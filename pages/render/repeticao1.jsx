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
        return listaAprovados.map((nome, i) => <li key={i}> {nome}</li>)
    }

    /*function renderizarLista(){
       const itens = [];
       for(let i = 0; i < listaAprovados.length; i++){
        itens.push(<li key={i}>{listaAprovados[i]}</li>);
       }

       return itens;
    }*/

    return (
        <ul>
            {renderizarLista()}
        </ul>
    );
}