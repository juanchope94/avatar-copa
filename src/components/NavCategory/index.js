import React from "react";
import { category } from "../../utils/categoryPieces";
import './NavCategory.scss';

export default function NavCategory({ setType }) {
    return (
        <nav className="nav">
            {Object.keys(category).map((item) => {
                return (
                    <li className="nav-item" >
                        <p className="nav-link active" onClick={() => setType(item)} >{item}</p>
                    </li>)
            })
            }
        </nav>

    )
}