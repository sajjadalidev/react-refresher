import React, { useState } from "react";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";
export const Todo = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const closeModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div>
      <h1>My Todo</h1>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <>
          <Modal onCancel={closeModal} onConfirm={closeModal} />
          <Backdrop onClick={closeModal} />
        </>
      )}
    </div>
  );
};
