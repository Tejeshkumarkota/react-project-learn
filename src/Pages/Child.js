import React, { useEffect, useState } from "react";

function Child(props) {

    const [name,setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(name);
    }
    useEffect(()=> {
        console.log('three');
    },[])
    console.log('four');
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange}/>
                <button type="Submit"> Submit </button>
            </form>
        </>
    )
}
export default Child;