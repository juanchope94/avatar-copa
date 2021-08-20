import React from "react";
import { category } from "../../utils/categoryPieces";
import './NavCategory.scss';

export default function NavCategory({ setTypeCatergoryPieces }) {
    return (
        <nav className="nav">
            {Object.keys(category).map((item, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <p className="nav-link active" onClick={() => setTypeCatergoryPieces(item)} >{item}</p>
                    </li>)
            })
            }
        </nav>

    )
}