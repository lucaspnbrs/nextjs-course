export default function botao(){
    function clicar(){
        alert('Achou!')
    }
    return (
        <div>
            <button onClick={clicar}>Click</button>
        </div>
    );
}