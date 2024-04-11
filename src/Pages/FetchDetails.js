import React, { useEffect, useState } from "react";

export default function FetchDetails() {
    const [details, setUserDetails] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [filteredDetails, setFilteredDetails] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUserDetails(data);
                setFilteredDetails(data); // Initialize filtered details with all details
            });
    }, []);

    const handleChange = (e) => {
        const searchText = e.target.value.toLowerCase();
        setFilterText(searchText);

        const filtered = details.filter((user) => {
            return Object.values(user).some((value) => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(searchText);
                }
                return false;
            });
        });

        setFilteredDetails(filtered);
    };

    return (
        <>
            <h1>Users</h1>
            <input type="text" onChange={handleChange} value={filterText} />
            <ul>
                {filteredDetails.map((item, index) => (
                    <li key={index}>
                        {item.name},{item.email}
                    </li>
                ))}
            </ul>
        </>
    );
}
