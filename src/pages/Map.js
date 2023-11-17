import { Container as MapDiv } from 'react-naver-maps'
import { NavermapsProvider } from 'react-naver-maps';
import React, { useEffect, useRef } from 'react';
import MapSetting from '../components/MapSetting';



function Map() {

  return (
    <NavermapsProvider ncpClientId='ypjs3qi2oz'>
      <MapDiv
        style={{
          position: 'relative',
          width: '530px',
          height: '100vh',
        }}
      >
        <MapSetting />
      </MapDiv>
    </NavermapsProvider>
  );
}

export default Map;