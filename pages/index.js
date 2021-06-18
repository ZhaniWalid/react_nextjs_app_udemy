import React, { Component } from "react";
// Use this cmd: 'npm install --save next react react-dom' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import Link from "next/link";
import Router from "next/router";

// Hint :: => ALL 'FILES & FOLDERS' that will be rendered to 'VIEW' 
//         => SHOULD BE UNDER THE MAIN FOLDER 'pages' when using 'NextJS'

// Hint :: => NextJS : Help us to 'point' to 'files' under 'folders' that are (='folders') considered as 'Routes'
//    => for expample : <Link href="/auth"> ::
//    => "/auth" => will point to '/auth' ('pages/auth') folder and acess to [index.js] File ('pages/auth'/index.js)
//    ====> There is no need to use '<Route />' Component from the package 'react-router-dom'

class IndexPage extends Component {
  // 'getInitialProps()' func => Will return the result of the 'Promise()' when the 'setTimeOut()' func is executed
  // => So 'NextJS' will take care to listen to the result ('==appName') and save it in the 'props'
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        {/* 'appName' => is the result (who is passed on 'props') of the 'Promise()' on the 'getInitialProps' func */} 
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          Go to{" "}
          {/* "/auth" => will point to '/auth' ('pages/auth') folder and acess to [index.js] File ('pages/auth'/index.js) */}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go to Auth</button>
      </div>
    );
  }
}

export default IndexPage;
