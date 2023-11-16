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

// 추후 검색 기능 제작 예정
// https://velog.io/@jahommer/React-%EA%B2%80%EC%83%89%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0