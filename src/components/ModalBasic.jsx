import React from 'react';
import styled from 'styled-components';


// 검색창 스타일
const SearchModalWrapper = styled.div`
  background-color: #370e97;
  width: 530px;
  height: 30%;
  border-radius: 20px;
  padding: 0.1px;
  position: absolute;
  top: 70px;
  opacity: 0.95;
`

const Box = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`

const InputBox = styled.input`
  background: none;
  border: 1px solid #fff;
  border-radius: 30px;
  outline: none;
  flex: 1;
  padding: 12px;
  color: #fff;

  
  
`

const Xbutton = styled.button`
  background: none;
  color: #fff;
  border: none;
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
`

function ModalBasic(props) {
  const { setModalOpen } = props;
  const closeModal = () => {
    setModalOpen(false)
  }
  
  return (
<SearchModalWrapper>
  <Box>
    <InputBox type="text" placeholder='검색어를 입력하세요'/><style>{`::placeholder {color: #9B9B9B;}` 
                } 
            </style> 
    <Xbutton onClick={closeModal}>취소</Xbutton>
  </Box>
</SearchModalWrapper>
  );
}

export default ModalBasic;