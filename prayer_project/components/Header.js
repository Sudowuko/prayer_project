import React from 'react';
import styles from '../styles/Home.module.css'


function Header() {
    return (
        <>
            <main className={styles.main}>
                {/* This section here is currently the website header*/}
                <div className={styles.description}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>pages/index.js</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' '}
                            {/* <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            /> */}
                            <p>Joseph Nicolas </p>
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Header;