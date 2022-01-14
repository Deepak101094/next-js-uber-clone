import React from "react";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  const getPickupCoordinates = () => {
    const pickup = "delhi";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGVlcGFrcGFuZGV5MTIzIiwiYSI6ImNreWNtM3F4ajBvYmIyenFvZWU3YTdjeTcifQ.Yt9r1ccHu0_OvxtVbdsDGw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = () => {
    const dropoff = "delhi";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGVlcGFrcGFuZGV5MTIzIiwiYSI6ImNreWNtM3F4ajBvYmIyenFvZWU3YTdjeTcifQ.Yt9r1ccHu0_OvxtVbdsDGw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropOffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map />
      <RideContainer>Ride Selector Confirm Ride</RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`;

const RideContainer = tw.div`
flex-1
`;
