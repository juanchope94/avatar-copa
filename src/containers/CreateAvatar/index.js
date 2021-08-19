import React from "react";
import Avatar from "../../components/Avatar";
import NavCategory from "../../components/NavCategory";
import Pieces from "../../components/PiecesAvatar";
import './CreateAvatar.scss';


export function CreateAvatar() {
    const [typeCatergoryImage, setTypeCatergoryImage] = React.useState("fondo");
    const [listTypeCategoryImage] = React.useState([
        'fondo',
        'cuerpo',
        'ojos',
        'cejas',
        'nariz',
        'boca',
        'lentes',
        'vestimenta',
        'barba',
        'pelo',
        'sombrero'
    ]);
    const [avatar, setAvatar] = React.useState({
        fondo: {},
        cuerpo: {},
        ojos: {},
        cejas: {},
        nariz: {},
        boca: {},
        lentes: {},
        vestimenta: {},
        barba: {},
        pelo: {},
        sombrero: {}
    })

    const changeInListImageAvatar = (src) => {
        setAvatar({
            ...avatar,
            [typeCatergoryImage]: {
                route: src
            }
        })
    }

    return (
        <section >
            <div className="row">
                <div className="col-12">
                    <Avatar {...{ listTypeCategoryImage, avatar }} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <NavCategory {...{ setTypeCatergoryImage }} />
                    <Pieces {...{ typeCatergoryImage, changeInListImageAvatar }} />
                </div>
            </div>

        </section>
    )
}