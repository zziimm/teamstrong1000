import React, {  useState } from 'react';
import ModalBasic from './ModalBasic';

function Search_modal(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true)
  }

  return (
    <>
    <button onClick={showModal}><span class="material-symbols-outlined">search</span></button>
    {modalOpen && <ModalBasic setModalOpen={setModalOpen}/>}
    </>
  );
}

export default Search_modal;