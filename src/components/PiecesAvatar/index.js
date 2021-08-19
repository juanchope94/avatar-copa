import React from "react";
import { category } from "../../utils/categoryPieces";
import './PiecesAvatar.scss';

export default function PiecesAvatar({ typeCatergoryImage, changeInListImageAvatar }) {

  return (
    <div className="card-body card-main">
      <div className="container scroll">
        <div className="row">
          {category[typeCatergoryImage].map((item) => {
            return (
              <div className="col">
                <div className="card shadow-lg p-3 mb-5 bg-white image_div" style={{ width: "12rem" }}>
                  <img className="card-img-top" src={item.default} alt={item.default} onClick={() => changeInListImageAvatar(item.default)} />
                </div>
              </div>
            )
          })}

          <div className="col">
            <div className="card shadow-lg p-3 mb-5 bg-white card_none" >
              <br /><br /><span className="card-img-top" >None</span>
            </div>
          </div>
        </div>
      </div><br />
      <div className="col-md-3 ml-auto mr-auto">
        <button className="btn-save" >Guardar</button>
      </div >
    </div>
  )
}