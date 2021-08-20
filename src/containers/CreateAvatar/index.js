import React from "react";
import Avatar from "../../components/Avatar";
import NavPiecesCategory from "../../components/NavPiecesCategory";
import Pieces from "../../components/PiecesAvatar";
import { getAvatar, updateAvatar } from './../../api/api';
import { toast } from 'react-toastify'
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
    const [avatar, setAvatar] = React.useState(initialStateAvatar);
    const [typeCatergoryPieces, setTypeCatergoryPieces] = React.useState("fondo");
    const [loadAvatar, setLoadAvatar] = React.useState(false);
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
        setLoadAvatar(true);
        const avatarPersist = await getAvatar();
        setAvatar(avatarPersist.data());
        setLoadAvatar(false);
    }
    React.useEffect(() => {
        getAvatarPersist();
    }, [])

    const changePieceInAvatar = (src) => {
        setAvatar({
            ...avatar,
            [typeCatergoryPieces]: {
                route: src || ''
            }
        })
    }

    const handleEditAvatarPersist = async () => {
        setLoadAvatar(true);
        await updateAvatar(avatar);
        setLoadAvatar(false);
        toast('Avatar actualizado!', { type: 'success', autoClose:2000 });

    }

    return (
        <section className="container p-2">
            <div className="row ">
                <div className="col-12 d-flex justify-content-center">
                    <div className="div-avatar border">
                        {!loadAvatar ?
                            <Avatar {...{ listTypeCategoryPieces, avatar }} />
                            :
                            <div className="load_container">
                                <i className="loaderInto"></i>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <NavPiecesCategory {...{ setTypeCatergoryPieces }} />
                    <Pieces {...{ typeCatergoryPieces, changePieceInAvatar, handleEditAvatarPersist }} />
                </div>
            </div>
        </section>
    )
}