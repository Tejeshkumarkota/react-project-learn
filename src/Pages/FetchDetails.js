import React, { useEffect, useState } from "react";

export default function FetchDetails() {
    const [details, setUserDetails] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUserDetails(data);
            });
    }, []);

    const handleChange = (e) => {
        const searchText = e.target.value;
        // console.log(setFilterText(searchText));
        setFilterText(searchText);
    };

    return (
        <>
            <h1>Users</h1>
            <input type="text" onChange={handleChange} value={filterText} />
            <ul>
                {details.filter(item => item.name.toLowerCase().includes(filterText)).map((item, index) => (
                    <li key={index}>
                        {item.name}, {item.email}
                    </li>
                ))}
            </ul>
        </>
    );
}
