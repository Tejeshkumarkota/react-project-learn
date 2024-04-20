import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Endpoints } from "../shared/constants/endpoints";

const Create = () => {

  const [name, setName] = useState("");
  const nav = useNavigate();
  const createStudent = () => {
    if(name) {
    fetch(Endpoints.STUDENTS,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: "Bearer key"
        },
        body: JSON.stringify({
            name: name
        })
    })
    .then((res) => res.json())
    .then(() => {
      alert('Added successfully')
      nav('/list')
    });
    } else {
        alert("please fill and submit");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-body">
                <h1 className="text-center">Create</h1>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Student Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Enter Name"
                      onChange={($event) => {
                        setName($event.target.value);
                      }}
                      value={name}
                    />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={createStudent}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Create;
