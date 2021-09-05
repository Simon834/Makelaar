import React from 'react'
import AboutUs from "../../Components/AboutUs/AboutUs";
import ViewBase from "../ViewBase/view-base";

export default function ViewAbout() {
  return (
    <div>
      <ViewBase content={<AboutUs />} />
    </div>
  );
}