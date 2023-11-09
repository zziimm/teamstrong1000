import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: orange;
`;

const DistrictBtn = styled.button`
  
`;


function DistrictModal(props) {
  const { id, selectDate, joinPersonnel, game, district } = props;

  return (
    <ModalWrapper>
      <DistrictBtn>
        서울
      </DistrictBtn>
      <DistrictBtn>
        경기
      </DistrictBtn>
      <DistrictBtn>
        인천
      </DistrictBtn>
    </ModalWrapper>
  );
}

export default DistrictModal;