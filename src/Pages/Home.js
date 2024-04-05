import React from "react";
import {useNavigate} from "react-router-dom";
import MasterLayout from "../Components/MasterLayout";
import HowToTransform from "../Components/Home/HowToTransform";

export default function Home() {
  const nav = useNavigate();

  const gotoabout = () => {
    nav("/about-us");
  };
  return (
    <>
      <MasterLayout>
        <p className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <HowToTransform/>
        <button className="btn btn-success text-center d-block mx-auto mb-5" onClick={gotoabout}>Know more</button>
      </MasterLayout>
    </>
  );
}
