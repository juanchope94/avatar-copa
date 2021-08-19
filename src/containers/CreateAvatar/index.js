import React from "react";
import Avatar from "../../components/Avatar";
import NavCategory from "../../components/NavCategory";
import Pieces from "../../components/PiecesAvatar";
import './CreateAvatar.scss';


export function CreateAvatar() {
    const [type, setType] = React.useState("fondo");

    return (
        <section >
            <div className="row">
                <div className="col-12">
                    <Avatar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <NavCategory {...{ setType }} />
                    <Pieces {...{ type }} />
                </div>
            </div>

        </section>
    )
}