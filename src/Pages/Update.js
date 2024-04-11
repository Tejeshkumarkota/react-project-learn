import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  const [name, setName] = useState("");
  const nav = useNavigate();
  const param = useParams();

  useEffect(() => {
    getSelectedData();
  },[])

  const getSelectedData = () => {
    fetch("http://localhost:3000/students/"+param.studentid)
    .then((res) => res.json())
    .then((data) => {
      setName(data.name);
    });
  }

  const updateStudent = () => {
    if(name) {
    fetch("http://localhost:3000/students/"+param.studentid,{
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name
        })
    })
    .then((res) => res.json())
    .then(() => {
      alert('Updated successfully!')
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
                <h1 className="text-center">Update</h1>
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
                  <button onClick={updateStudent} type="button" className="btn btn-primary">
                    Update
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
export default Update;
