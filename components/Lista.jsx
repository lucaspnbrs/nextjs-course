export default function Lista(props){
    return (
        <ul style={{cursor:'pointer'}}>
            {props.children}
        </ul>
    );
}