import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

function Signup() {
    const [item1, setItem1] = useState('');
    const [item2, setItem2] = useState('');
    const [item3, setItem3] = useState('');
    const [request1, setRequest1] = useState('');
    const [request2, setRequest2] = useState('');
    const [request3, setRequest3] = useState('');
    const [email, setEmail] = useState('');

    // Temporarily local storage, will use a database later
    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('item-1', item1);
        localStorage.setItem('item-2', item2);
        localStorage.setItem('item-3', item3);
        localStorage.setItem('request-1', request1);
        localStorage.setItem('request-2', request2);
        localStorage.setItem('request-3', request3);
        localStorage.setItem('email', email);
    }
    function handleChangeItem1(event) {
        setItem1(event.target.value);
    }
    function handleChangeItem2(event) {
        setItem2(event.target.value);
    }
    function handleChangeItem3(event) {
        setItem3(event.target.value);
    }
    function handleChangeRequest1(event) {
        setRequest1(event.target.value);
    }
    function handleChangeRequest2(event) {
        setRequest2(event.target.value);
    }
    function handleChangeRequest3(event) {
        setRequest3(event.target.value);
    }
    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <main className={styles.main}>
                <h2 className={inter.className}>
                    Sign Up Form!
                </h2>
                <label>What are your 3 praise items?</label>
                <input
                    type="text"
                    id="item-1"
                    name="item-1"
                    value={item1}
                    onChange={handleChangeItem1}
                />
                <input
                    type="text"
                    id="item-2"
                    name="item-2"
                    value={item2}
                    onChange={handleChangeItem2}
                />
                <input
                    type="text"
                    id="item-3"
                    name="item-3"
                    value={item3}
                    onChange={handleChangeItem3}
                />
                <label>What are your 3 prayer request?</label>
                <input
                    type="text"
                    id="request-1"
                    name="request-1"
                    value={request1}
                    onChange={handleChangeRequest1}
                />
                <input
                    type="text"
                    id="request-2"
                    name="request-2"
                    value={request2}
                    onChange={handleChangeRequest2}
                />
                <input
                    type="text"
                    id="request-3"
                    name="request-3"
                    value={request3}
                    onChange={handleChangeRequest3}
                />
                <label>What is your email?</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <input type="submit" value="Submit" className={styles.card} />
            </main>

        </form>
    );
}

export default Signup;