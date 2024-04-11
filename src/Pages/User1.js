import React from "react";
import UpdatedComponent from "./HOC";

function User1({money,handleIncrease}) {
    return (
        <>
            <h2>user 1 is offering ${money}</h2>
            <button onClick={handleIncrease}>Increase Money</button>
        </>
    )
}
export default UpdatedComponent(User1);