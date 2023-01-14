import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'

//Tables needs styling, names in columns 1 and 2 are too close together
//If the number of participants end up being odd, make a use case where there is one group of 3
function Partners() {
    const [partner, setPartner] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setPartner(data))
            .catch(error => console.log(error));
    }, []);

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
                                    <td>{partner1.name}</td>
                                    <td>{partner2.name}</td>
                                </tr>
                                <tr>
                                    <td>{partner1.email}</td>
                                    <td>{partner2.email}</td>
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