function criarLista(){
    const lista = [
        1, 2, 3, 4, 5, 6,  7, 8, 9, 10, 11
    ];
    return lista
}

export default function lista2(){
    return (
        <div>
            <span>{criarLista()}</span>
        </div>
    );
}