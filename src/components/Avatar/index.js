import React from "react"
import barba1 from "../../assets/Barba/Barba-01-01.png"
import ojos1 from "../../assets/Ojos/Ojos-1-1.png"
import cabello1 from "../../assets/Pelo/Pelo_mujer-01-01.png"
import fondo from "../../assets/Fondo/Fondo-01-01.png"
import cuerpo from "../../assets/Cuerpo/Cuerpo-01-01.png"
import { category } from "../../utils/categoryPieces";

import './Avatar.scss';

export default function Avatar() {

    const [images] = React.useState([fondo, cuerpo, barba1, ojos1, cabello1]);

    React.useEffect(() => console.log("categorias", category), []);
    return (
        <div >
            {/* {images.map((item) =>
                <img src={category["fondo"]["Fondo-01-01.png"].default} alt={category["fondo"]["Fondo-01-01.png"].default} className="img" />
            )
            } */}
        </div>
    )
}