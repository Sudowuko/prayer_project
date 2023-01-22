import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import axios from 'axios';


//Tables needs styling, names in columns 1 and 2 are too close together
//If the number of participants end up being odd, make a use case where there is one group of 3
//For a group of 3 it should still take up the same amount of space as one row
function Partners() {
    const [partner, setPartner] = useState([]);
    const [info, setInfo] = useState(null);
    const [testData, setTestData] = useState(null);

    const API_KEY = process.env.NOTION_API_KEY;

    const fetchData = async () => {
        const { data } = await axios.post(`https://api.notion.com/v3/search`, {
            filter: {
                property: 'object',
                value: 'database'
            },
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return data.results;
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setPartner(data))
            .catch(error => console.log(error));
    }, []);

    function handleClick(person) {
        setInfo(person)
    }

    return (
        <div>
            {partner.map((person, index) => {
                if (index % 2 === 0 && partner[index + 1]) {
                    const partner1 = person
                    const partner2 = partner[index + 1]
                    return (
                        <table key={index} className={styles.table}>
                            {index === 0 &&
                                <thead>
                                    <tr>
                                        <th>Partner 1</th>
                                        <th>Partner 2</th>
                                    </tr>
                                </thead>
                            }
                            <tbody>
                                <tr>
                                    <td onClick={() => handleClick(partner1)}>
                                        {info === partner1 ? partner1.name + ' clicked' : partner1.name}
                                    </td>
                                    <td onClick={() => handleClick(partner2)}>
                                        {info === partner2 ? partner2.name + ' clicked' : partner2.name}
                                    </td>
                                </tr>
                            </tbody>
                            <br></br>
                        </table>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default Partners;