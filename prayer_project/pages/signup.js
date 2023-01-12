import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

//TODO: Return an object instead of setting each object individually
function Signup() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        item1: '',
        item2: '',
        item3: '',
        request1: '',
        request2: '',
        request3: '',
        email: '',
    });
    
    // Temporarily local storage, will use a database later
    function handleSubmit(event) {
        event.preventDefault();
        let dataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
        dataArray.push(formData);
        localStorage.setItem('formDataArray', JSON.stringify(dataArray));
    }

    function handleChange(event, fieldName) {
        setFormData({ ...formData, [fieldName]: event.target.value });
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <main className={styles.main}>
                <h2 className={inter.className}>
                    Sign Up Form!
                </h2>
                <label>What is your first name?</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={(event) => handleChange(event, 'fname')}
                />
                 <label>What is your last name?</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={(event) => handleChange(event, 'lname')}
                />
                <label>What are your 3 praise items?</label>
                <input
                    type="text"
                    id="item-1"
                    name="item-1"
                    value={formData.item1}
                    onChange={(event) => handleChange(event, 'item1')}
                />
               <input
                    type="text"
                    id="item-2"
                    name="item-2"
                    value={formData.item2}
                    onChange={(event) => handleChange(event, 'item2')}
                />
                <input
                    type="text"
                    id="item-3"
                    name="item-3"
                    value={formData.item3}
                    onChange={(event) => handleChange(event, 'item3')}
                />
                <label>What are your 3 prayer request?</label>
                <input
                    type="text"
                    id="request-1"
                    name="request-1"
                    value={formData.request1}
                    onChange={(event) => handleChange(event, 'request1')}
                />
                 <input
                    type="text"
                    id="request-2"
                    name="request-2"
                    value={formData.request2}
                    onChange={(event) => handleChange(event, 'request2')}
                />
                <input
                    type="text"
                    id="request-3"
                    name="request-3"
                    value={formData.request3}
                    onChange={(event) => handleChange(event, 'request3')}
                />
                <label>What is your email?</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(event) => handleChange(event, 'email')}
                />
                <input type="submit" value="Submit" className={styles.card} />
            </main>
        </form>
    );
}

export default Signup;