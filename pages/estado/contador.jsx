import Botaomais from "@/components/Contadores/Botaomais";
import { useState } from "react";

export default function contador(){
    const[number, setNumber] = useState(0);

    const cresc = () => {
        setNumber(number + 1);
    }

    const decre = () => {
        setNumber(number - 1)
    }

        return (
        <div>
         <h1>Cresce e decresce </h1>
         <h3>Valor: {number}</h3>
         <button onClick={cresc}>+</button>
         <button onClick={decre}>-</button>
        </div>
    );
}