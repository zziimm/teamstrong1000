import React from 'react';

function ModalBasic(props) {
  const { setModalOpen } = props;
  const closeModal = () => {
    setModalOpen(false)
  }
  
  return (
<div>
  <button onClick={closeModal}>X</button>
  <p>모달창입니다.</p>
</div>
  );
}

export default ModalBasic;