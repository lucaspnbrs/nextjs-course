
export default function SomentePar(props){
    const parNumber = props.numero % 2 === 0;
    return (
        <div>
            {parNumber ? <span>{props.numero}</span> : null}
        </div>
    )

    /*
    if (props.numero % 2 === 0){
       return <span>{props.numero}<span/>
    } else {
       return null
    }
     */
}