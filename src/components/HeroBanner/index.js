"use client"
import React, { useEffect, useState } from "react";
import HeroMap from "../HeroMap";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import { useSelector } from "react-redux";
const HeroBanner = () => {
  const {location}= useSelector((state)=>state.currentLocation);
  const [defaultLocation, setDefaultLocation] = useState(location ? location : {latitude:25.141579399999998 ,longitude:55.19085808643323})
  console.log(defaultLocation,"Location");
  
  useCurrentLocation();
  return (
    <section className="mb-10 relative h-96 w-full bg-slate-400">
      <div className="bg-cover bg-center bg-no-repeat h-full relative z-0">
        <HeroMap
          latitude={defaultLocation && defaultLocation.latitude}
          longitude={defaultLocation && defaultLocation.longitude}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
