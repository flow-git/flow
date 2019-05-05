import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import logo from '../static/text-logo.png';

const signin = () => {

}

export default () => (
  <body className="background">
    <div className="sign-in">
      <Head>
        <title>Login Page</title>
        <link href="/static/App.css" rel="stylesheet" />
      </Head>
      <div className="sign-in-contents">
        <img src={logo} className="logo" alt="logo" />
        <br />
        <br />
        <div className="login-fields">
          <form>
            <div className="form-group">
              <input type="email" className="form-control login-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your email ..." /><br />
              <br />
              <input type="password" className="form-control login-field" id="exampleInputPassword1" placeholder="your password ..." /><br />
            </div>
            <br />
            <Link href="/Data">
              <button type="submit" className="btn btn-primary login-button">log in</button>
            </Link>
          </form>
          <br />
          <br />
          <div className="login-setup">
            <p><i><b>first time?</b><br />
              setup your first Flow meter <u>here</u></i></p>
          </div>
          <br />
          <br />
          <div className="login-about">
            <p><u>about Flow</u> || <u>contact us</u> || <u>privacy policy</u></p>
          </div>
        </div>
      </div>
    </div>
  </body>
);