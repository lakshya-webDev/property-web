"use client"
import { withAuthRoute } from "@/components/IsAuth";
import React from "react";
import ListPropertySteps from "@/components/ListPropertySteps";
const ListProperties=()=> {
  return (
     <ListPropertySteps/>
  );
}
export default  withAuthRoute(ListProperties)