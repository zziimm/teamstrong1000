import styled from "styled-components";
import React, { useEffect, useRef } from 'react';



const MapLayout = styled.div `
  width: 500px;
  height: 500px;
`





// function showPosition(position) {
//   console.log(poisition);
// } 





function Map() {




  const mapElement = useRef(null);

  useEffect(() => {



    // const getLocation = navigator.geolocation.getCurrentPosition(
    //   function(pos) {
    //   console.log(pos);
    //   var latitude = pos.coords.latitude;
    //   var longitude = pos.coords.longitude;
    //   alert("현재 위치는 : " + latitude + ", "+ longitude);
    // });
    
    // const latitude = getLocation.coords.latitude
    // console.log(latitude);
    // const longitude = getLocation.coords.longitude
    // console.log(longitude);
    
    
    
    
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    //로케이션표시
    const location = new naver.maps.LatLng(37.4527115, 126.6969053);

    //네이버 지도 옵션 선택
    const mapOptions = {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    //지도상에 핀 표시 할 부분
    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return (
      <MapLayout ref={mapElement} />
  );
}

export default Map;