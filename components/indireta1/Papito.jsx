import Filhito from "./Filhito";

export default function Papito(props){

    function falarVc(param1, param2, param3){
        console.log(param1, param2, param3)
    }
    return (
        <div>
            <h1>Pai</h1>
            <Filhito funcao={falarVc}/>
        </div>
    )
}