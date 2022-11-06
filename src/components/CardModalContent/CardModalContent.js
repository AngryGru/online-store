import React from "react";
import "./CardModalContent.css";

const CardModalContent = ({ modalData, onAddToCart, onModalClose }) => {
  return (
    <div className="card-modal-content">
      <div className="content">
        <div className="modal-image">
          <img src={modalData.image} />
        </div>
        <div className="modal-info">
          <p className="modal-title">{modalData.title}</p>
          <p className="modal-motto">{modalData.motto}</p>
          <table className="modal-description">
            <tbody>
              <tr>
                <td className="option">Genres:</td>
                <td className="value">{modalData.genres}</td>
              </tr>
              <tr>
                <td className="option">Release date:</td>
                <td className="value">{modalData.release_date}</td>
              </tr>
              <tr>
                <td className="option">Languages:</td>
                <td className="value">{modalData.languages}</td>
              </tr>
              <tr>
                <td className="option">Age:</td>
                <td className="value">{modalData.age}</td>
              </tr>
            </tbody>
          </table>
          <p className="modal-cost">{modalData.cost}$</p>
        </div>
      </div>
      <div className="actions">
        <button className="btns close-btn" onClick={onModalClose}>
          Close
        </button>
        <button
          className="btns buy-btn"
          onClick={(event) => onAddToCart(modalData, event)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default CardModalContent;
