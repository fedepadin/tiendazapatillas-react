import { useState } from "react";


const ItemCount = () => {

    const [contador, setContador] = useState(0);

    const sumarContador = () => {

        if(contador<10){

            setContador(contador + 1);

        }

    }
    
    const reiniciarContador = () => {

        setContador(0);

    }
    const restarContador = () => {

        if(contador>0){

            setContador(contador - 1);

        }
    }



    return (

        <div>

        <p>El contador se inicializa en: {contador}</p>
        <button onClick={sumarContador}>Sumar</button>
        <button onClick={reiniciarContador}>Reiniciar contador</button>
        <button onClick={restarContador}>Restar</button>

        </div>


    )

}

export default ItemCount;