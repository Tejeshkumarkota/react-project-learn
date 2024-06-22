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
    fetch("https://trainingsapi.localinfoz.com/api/product-categories/"+param.studentid)
    .then((res) => res.json())
    .then((data) => {
      setName(data.data.productCategoryName);
    });
  }

  const updateStudent = () => {
    if(name) {
    fetch("https://trainingsapi.localinfoz.com/api/product-categories/"+param.studentid,{
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productCategoryImage: "",
          parentProductCategoryId: "",
          productCategoryName: name
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
                    Category Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Enter Category Name"
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
