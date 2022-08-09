import { useState } from "react";



const ItemCount = ({stockInicial, stockMaximo}) => {

    const [contador, setContador] = useState(0);

    const sumarContador = () => {

        if(contador<(parseInt(stockMaximo))){

            setContador(contador + 1);

        }

    }
    
    const reiniciarContador = () => {

        setContador(parseInt(stockInicial));

    }
    const restarContador = () => {

        if(contador>(parseInt(stockInicial))){

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