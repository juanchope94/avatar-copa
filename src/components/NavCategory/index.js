import React from "react";
import { category } from "../../utils/categoryPieces";
import './NavCategory.scss';

export default function NavCategory({ setTypeCatergoryImage }) {
    return (
        <nav className="nav">
            {Object.keys(category).map((item) => {
                return (
                    <li className="nav-item" >
                        <p className="nav-link active" onClick={() => setTypeCatergoryImage(item)} >{item}</p>
                    </li>)
            })
            }
        </nav>

    )
}