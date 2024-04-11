import React, { useState } from "react";
import Child from "./Child";

function Parent() {

    const getData = (data) => {
        console.log('coming from parent js',data);
    }
    return (
        <>
            <Child onSubmit={getData}/>
        </>
    )
}
export default Parent;