import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ data, active, setActive, children }) => {
  // const [scroll, setScroll] = React.useState(0);
  // const scrollY = document.body.style.top;

  // const handleScroll = () => {
  //   if (active) {
  //     setScroll(window.scrollTo(0, parseInt(scrollY || "0") * -1));
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [active]);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
