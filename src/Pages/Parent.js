import React, { useEffect } from "react";
import Child from "./Child";

function Parent() {

    const getData = (data) => {
        console.log('coming from parent js',data);
    }

    useEffect(()=> {
        console.log('one');
    },[])
    console.log('two');
    return (
        <>
            <Child onSubmit={getData}/>
        </>
    )
}
export default Parent; 