import React, { useState } from 'react';
import ModalBasic from './ModalBasic';

// 스타일



function Search_modal(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <button
        onClick={showModal}
        style={{ background: "none", border: "none" }}>
        <span
          class="material-symbols-outlined"
          style={{ color: "#4610C0", fontSize: "24px" }}
        >
          search
        </span>
      </button>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
    </>
  );
}

export default Search_modal;