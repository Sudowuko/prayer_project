import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import axios from 'axios';

import { Client } from "@notionhq/client"

// const notion = new Client({ auth: process.env.NOTION_API_KEY })

// const databaseId = process.env.NOTION_DATABASE_ID

//const API_KEY = process.env.NOTION_API_KEY;



//Tables needs styling, names in columns 1 and 2 are too close together
//If the number of participants end up being odd, make a use case where there is one group of 3
//For a group of 3 it should still take up the same amount of space as one row
function Partners() {
    const [partner, setPartner] = useState([]);
    const [info, setInfo] = useState(null);
    const [newRow, setNewRow] = useState({});

    const database_id = process.env.NOTION_DATABASE_ID
    const notion = new Client({ auth: process.env.NOTION_API_KEY })


    const handleButtonClick = async () => {
        const newRow = {
            Title: "Test",
        };

        const { results } = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            properties: [{ Title: "rich_text" }],
            filter: {
                property: "Name",
                value: newRow.Title,
            },
        });

        if (!results.length) {
            await notion.pages.create({
              properties: {
                Title: {
                  title: newRow.Title,
                },
              },
            });
          }
        };

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
                {console.log(process.env.NOTION_API_KEY)}
                {console.log(process.env.NOTION_DATABASE_ID)}
                <button onClick={handleButtonClick}>Add Test Row 1</button>
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