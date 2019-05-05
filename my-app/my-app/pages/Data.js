import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
const Data = () => (
    <div className="App">
    <Head>
        <title>Data Page</title>
        <link href="/static/App.css" rel="stylesheet"/>
    </Head>
      <p> data pages </p>
      <Link href="/">
      <button className="button-home"> log out </button>
      </Link>
    </div>
)
export default Data