import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGVlcGFrcGFuZGV5MTIzIiwiYSI6ImNreWNtM3F4ajBvYmIyenFvZWU3YTdjeTcifQ.Yt9r1ccHu0_OvxtVbdsDGw";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      // style: "mapbox://styles/darkosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
    addToMap(map);
  });

  const addToMap = (map) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([12.554729, 55.70651])
      .addTo(map);
  };
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
