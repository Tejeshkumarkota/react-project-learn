import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MasterLayout(props) {
    return (
        <div className="border p-3 m-3">
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}