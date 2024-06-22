import React from "react";

export default function Loading() {
  return (
    <div className="row vh-100">
      <div className="col-sm-12 my-auto text-center">
        <img
          src="/images/loader.gif"
          height="150"
          width="150"
          className="img-fluid"
          alt="Loading..."
        />
        <h3>Loading...</h3>
      </div>
    </div>
    // <div className="d-flex flex-column align-items-center justify-content-center h-100vh">
    // </div>
  );
}
