import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Endpoints } from "../shared/constants/endpoints";

export default function List() {
  const [listData, setListData] = useState();
  const nav = useNavigate();

  const getListData = () => {
    fetch(Endpoints.STUDENTS)
    .then((res) => res.json())
    .then((data) => {
      setListData(data);
    });
  }

  useEffect(() => {
    getListData();
  }, []);
  

  const deleteStudent = (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this item?");
    if(confirmation) {
      fetch("http://localhost:3001/students/"+id,{
        method: "DELETE",
      })
      .then((res) => res.json())
      .then(() => {
        getListData();
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="mb-4">List</h1>
              </div>
              <div className="col-md-6 text-end">
                <button type="button" onClick={()=>nav('/create')} className="btn btn-sm btn-primary">
                  Add New
                </button>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listData && listData.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>
                      <button type="button" onClick={()=>nav('/edit/'+s.id)} className="btn btn-sm btn-light mx-2">Edit</button>
                      <button type="button" onClick={()=>deleteStudent(s.id)} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
