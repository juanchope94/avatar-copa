import React from "react"
import { category } from "../../utils/categoryPieces";

import './Avatar.scss';

export default function Avatar({ listTypeCategoryPieces, avatar }) {


    React.useEffect(() => console.log("categorias", category), []);
    return (
        listTypeCategoryPieces.map((item) =>
            <img src={avatar[item].route} alt={avatar[item].src} className="img" />
        )
    )
}