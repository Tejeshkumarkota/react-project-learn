import React, { useState } from 'react'

export default function TodoList() {

    const [name, setName] = useState("");
    const [data,setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data,name]);
        setName("");
    }
  return (
    <>
        <h1>To do list</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button>Add</button>
        </form>
        <br/>
        {data && data.map((item,index) => 
            <li key={index}>{item}</li>
        )}
    </>
  )
}
