import { useState } from "react";

export default function(){
    const [x, alterarX] = useState(0);
    const [y, alterarY] = useState(0);

    const mouseMexe = (e) => {
        alterarX(e.clientX);
        alterarY(e.clientY);
    }
    return (
      
         <div style={{height:'100vh'}} onMouseMove={mouseMexe}>
            X: {x}
            Y: {y}
         </div>
   
    );
}