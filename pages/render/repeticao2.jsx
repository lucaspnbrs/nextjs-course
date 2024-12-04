import listaProduto from "@/data/listaProduto";

export default function Repeticao2(){

    const withBorder = {
        border: '1px solid #000000'
    }

    function renderizarLista(){
        return listaProduto.map( produto => {return (
            <tr key={produto.id}>
                <td style={withBorder}>{produto.id}</td>
                <td style={withBorder}>{produto.nome}</td>
                <td style={withBorder}>{produto.preco}</td>
            </tr>
        ) 
      })
    }
    return (
        <div>
            <table  style={withBorder}>
                <thead>
                    <tr style={withBorder}>
                        <th style={withBorder}>Código</th>
                        <th style={withBorder}>Nome</th>
                        <th style={withBorder}>Preço</th>
                    </tr>
                    <tbody>
                        {renderizarLista()}
                        {renderizarLista()}
                    </tbody>
                </thead>
            </table>
        </div>
    );
}