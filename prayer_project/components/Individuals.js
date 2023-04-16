import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'

function Individuals() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const res = await fetch('./api/users');
    const data = await res.json();
    setUsers(data);
  }

  const groupedUsers = {};
  for (const user of users) {
    const name = `${user.first_name} ${user.last_name}`;
    if (!groupedUsers[name]) {
      groupedUsers[name] = [];
    }
    const { user_id, first_name, last_name, ...rest } = user;
    groupedUsers[name].push(rest);
  }

  useEffect(() => {
    // apply button styles after component has mounted
    const button = document.getElementById('getUsersBtn');
    if (button) {
      button.classList.add(styles.button);
    }
  }, []);

  return (
    <div>
      <button id="getUsersBtn" onClick={getUsers} className={styles.button}>See Users</button>
      {Object.entries(groupedUsers).map(([name, users]) => (
        <div key={name}>
          <h2>{name}</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                {Object.keys(users[0]).filter(key => key !== 'first_name' && key !== 'last_name').map(key => (
                  <th key={key}>{key.replace('_', ' ').toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.user_id}>
                  {Object.entries(user).filter(([key, value]) => key !== 'first_name' && key !== 'last_name').map(([key, value]) => (
                    <td key={key}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Individuals;
