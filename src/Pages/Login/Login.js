import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {

    const nav = useNavigate();
    const gotolist = () => 
        nav('/list');

    const inputRefs = useRef([]);
    inputRefs.current = [];

    useEffect(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, []);

    const addToRefs = (el) => {
      if (el && !inputRefs.current.includes(el)) {
        inputRefs.current.push(el);
      }
    };
    
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-body">
                <h1 className="text-center title">Login</h1>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      ref={addToRefs}
                      className="form-control"
                      id="exampleInputEmail1"
                      autoComplete="off"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      ref={addToRefs}
                      className="form-control"
                      id="exampleInputPassword1"
                      autoComplete="off"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button onClick={gotolist} type="button" className="btn btn-primary mx-2">
                    Go to list
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
export default Login;
