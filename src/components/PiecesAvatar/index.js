import React from "react";
import { category } from "../../utils/categoryPieces";
import './PiecesAvatar.scss';

export default function PiecesAvatar({ typeCatergoryPieces, changePieceInAvatar, handleEditAvatarPersist }) {

  return (
    <div className="card-body card-main">
      <div className="container scroll-height">
        <div className="row">
          {category[typeCatergoryPieces].map((item, index) => {
            return (
              <div className="col" key={index}>
                <div className="card shadow-lg p-3 mb-5 bg-white" style={{ width: "12rem" }}>
                  <img src={item.default} alt={item.default} onClick={() => changePieceInAvatar(item.default)} />
                </div>
              </div>
            )
          })}

          <div className="col">
            <div onClick={() => changePieceInAvatar()} className="card shadow-lg bg-white card_none d-flex justify-content-center" >
              <span >Vacío</span>
            </div>
          </div>
        </div>
      </div><br />
      <div className="col-md-3 ml-auto mr-auto">
        <button className="btn btn-success" onClick={handleEditAvatarPersist}>Guardar</button>
      </div >
    </div>
  )
}