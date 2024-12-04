import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <Filho nome="paes Landim rosa Guimarães suave" familia={props.familia}/>
            <Filho nome="Tio Toin" familia={props.familia}/>
            <Filho nome="Tio Teo"/>
            <Filho nome="Tio Ari"/>
        </div>
    );
}