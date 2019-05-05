import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Recap = () => (
    <div className="App">
        <Head>
            <title>Data Page</title>
            <link href="/static/App.css" rel="stylesheet" />
        </Head>
        <body>
            <p> data pages </p>
            <nav className="navbar">
                <p><img className="img-logo" src="../static/F.png"></img></p>
                <Link href="/Data">
                    <p><img className="toolbar" src="../static/toolbar2.png"></img></p>
                </Link>
            </nav>
            <img src="../static/recap.png" className="recap">
            </img>
        </body>
    </div>
)
export default Recap