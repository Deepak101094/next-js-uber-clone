import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
// import mapboxGl from "mapbox-gl";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGVlcGFrcGFuZGV5MTIzIiwiYSI6ImNreWNtM3F4ajBvYmIyenFvZWU3YTdjeTcifQ.Yt9r1ccHu0_OvxtVbdsDGw";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/darkosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  // const map = new mapboxgl.Map({
  //   container: 'YOUR_CONTAINER_ELEMENT_ID',
  //   style: 'mapbox://styles/mapbox/streets-v11'
  //   });

  return (
    <Wrapper>
      <Map id="map"></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`;

const Map = tw.div`
bg-red-500 flex-1
`;
const ActionItems = tw.div`
flex-1
`;
