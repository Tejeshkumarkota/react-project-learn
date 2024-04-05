import React from "react";
import MasterLayout from "../Components/MasterLayout";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {

    const nav = useNavigate();

    const gotohome = () => {
      nav("/");
    };

    return(
        <MasterLayout>
            <h1>Aboutus</h1>
            <button className="btn btn-secondary" onClick={gotohome}>Go to Home</button>
        </MasterLayout>
    )
}