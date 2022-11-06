import React, { useState } from "react";
import "./CardList.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const CardList = ({ mock_data, cart, setCart }) => {
  const data = mock_data.map((item) => {
    return {
      ...item,
      count: 1,
      total_cost: item.cost,
    };
  });

  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({});

  const onOpenCard = (card) => {
    setModalActive(true);
    setModalData(card);
  };

  const onAddToCart = (card, event) => {
    event.stopPropagation();
    const elem = cart.find((elem) => elem.id === card.id);
    if (elem) {
      setCart((cart) => {
        return cart.map((item) => {
          if (item === elem) {
            return {
              ...item,
              count: item.count + 1,
              total_cost: item.total_cost + item.cost,
            };
          }
          return item;
        });
      });
    } else {
      setCart([...cart, card]);
    }
  };

  const onModalClose = () => {
    setModalActive(false);
  };

  return (
    <div className="card-list">
      {data.map((card) => {
        return (
          <div key={card.id} onClick={(event) => onOpenCard(card, event)}>
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
              onClick={(event) => onAddToCart(card, event)}
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
      </Modal>
    </div>
  );
};

export default CardList;
