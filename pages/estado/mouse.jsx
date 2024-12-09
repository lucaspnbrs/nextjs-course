import { useState } from "react";

export default function mouse(){

   /* const arrayX = useState(0)
    let x = arrayX[0];
    const alterarX = arrayX[1];*/
    const[x, alterarX] = useState(0);

    /*const arrayY = useState(0);
    let y = arrayY[0];
    const alterarY = arrayY[1];*/
    const [y, alterarY] = useState(0);

    const stilus = {
        backgroundColor:'#222', 
        color:'#fff', 
        height:'100vh', 
        display:'flex',
        justifyContent:'center', 
        alignItems:'center'
    }

    const mouseMexe = (ev) => {
        alterarX(ev.clientX);
        alterarY(ev.clientY);
    }

    return (
        <div style={stilus} onMouseMove={mouseMexe}>
            
            
           <span>Eixo X: {x} </span>
           <span>Eixo Y: {y}</span>
        </div>
    );
}