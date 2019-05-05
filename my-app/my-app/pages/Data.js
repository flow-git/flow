import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
const Data = () => (
    <div className="App">
    <Head>
        <title>Data Page</title>
        <link href="/static/App.css" rel="stylesheet"/>
    </Head>
    <body>
      <p> data pages </p>
      <nav className="navbar">
      <p><img className="img-logo" src="../static/F.png"></img></p>
      <p><img className="toolbar" src="../static/toolbar.png"></img></p>
     </nav>
      </body>
      <Link href="/">
      <button className="button-home"> log out </button>
      </Link>
    </div>
)
export default Data