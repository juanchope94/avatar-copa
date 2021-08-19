import React from "react"
import { category } from "../../utils/categoryPieces";

import './Avatar.scss';

export default function Avatar({listTypeCategoryImage, avatar}) {


    React.useEffect(() => console.log("categorias", category), []);
    return (
        <div >
            {listTypeCategoryImage.map((item) =>
                <img src={avatar[item].route} alt={avatar[item].src} className="img" />
            )
            }
        </div>
    )
}