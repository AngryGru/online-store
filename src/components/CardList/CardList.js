import React, { useState } from "react";
import "./CardList.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const CardList = ({ data }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({});

  const onCardClick = (card, event) => {
    event.stopPropagation();
    if (event.target.tagName === "BUTTON") {
      console.log("BUY", card);
    } else {
      console.log(card);
      setModalActive(true);
      setModalData(card);
    }
  };

  const onModalClose = () => {
    setModalActive(false);
  };

  return (
    <div className="card-list">
      {data.map((card) => {
        return (
          <div key={card.id} onClick={(event) => onCardClick(card, event)}>
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              title={card.title}
              motto={card.motto}
              genres={card.genres}
              release_date={card.release_date}
              age={card.age}
              languages={card.languages}
              cost={card.cost}
            />
          </div>
        );
      })}

      <Modal active={modalActive} setActive={setModalActive}>
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

            <p className="modal-cost">{modalData.cost}</p>
          </div>
        </div>
        <div className="actions">
          <button className="btns close-btn" onClick={onModalClose}>
            Close
          </button>
          <button className="btns buy-btn" onClick={onModalClose}>
            Buy
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CardList;
