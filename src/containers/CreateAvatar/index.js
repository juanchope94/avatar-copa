import React from "react";
import Avatar from "../../components/Avatar";
import NavPiecesCategory from "../../components/NavPiecesCategory";
import Pieces from "../../components/PiecesAvatar";
import { db } from './../../utils/firebase-config';
import './CreateAvatar.scss';


export function CreateAvatar() {
    const initialStateAvatar = {
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
    }
    const [idPersistAvatar] = React.useState('yO9RrIXOg6LJRaDqoAIU')
    const [avatar, setAvatar] = React.useState(initialStateAvatar);
    const [typeCatergoryPieces, setTypeCatergoryPieces] = React.useState("fondo");
    const [listTypeCategoryPieces] = React.useState([
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

    const getAvatarPersist = async () => {
        const avatarPersist = await db.collection('avatar').doc(idPersistAvatar).get();
        setAvatar(avatarPersist.data());
    }
    React.useEffect(() => {
        getAvatarPersist();
    }, [])

    const changeInListImageAvatar = (src) => {
        setAvatar({
            ...avatar,
            [typeCatergoryPieces]: {
                route: src || ''
            }
        })
    }

    const handleAddOrEditAvatarPersist = async () => {
        await db.collection('avatar').doc(idPersistAvatar).update(avatar);
    }

    return (
        <section className="container">
            <div className="row ">
                <div className="col-12">
                    <div className="div-avatar" >
                        <Avatar {...{ listTypeCategoryPieces, avatar }} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <NavPiecesCategory {...{ setTypeCatergoryPieces }} />
                    <Pieces {...{ typeCatergoryPieces, changeInListImageAvatar, handleAddOrEditAvatarPersist }} />
                </div>
            </div>
        </section>
    )
}