import React from "react";
import UpdatedComponent from "./HOC";

function User2({money,handleIncrease}) {
    return (
        <>
            <h2>user 2 is offering ${money}</h2>
            <button onClick={handleIncrease}>Increase Money</button>
        </>
    )
}
export default UpdatedComponent(User2);