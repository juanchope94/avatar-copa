import React from "react"
import './Avatar.scss';

export default function Avatar({ listTypeCategoryPieces, avatar }) {
    return (
        listTypeCategoryPieces.map((item, index) =>
            <img src={avatar[item].route} alt={avatar[item].src} className="img" key={index} />
        )
    )
}