import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'

//Tables needs styling, names in columns 1 and 2 are too close together
//If the number of participants end up being odd, make a use case where there is one group of 3
function Partners() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    const half = Math.ceil(data.length / 2)
    const left = data.slice(0, half)
    const right = data.slice(half)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Partner 1</th>
                        <th>Partner 2</th>
                    </tr>
                </thead>
                <tbody>
                    {left.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{right[index] ? right[index].name : null}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Partners;