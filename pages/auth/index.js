import React from "react";

import User from "../../components/User";

// Hint :: => ALL 'FILES & FOLDERS' that will be rendered to 'VIEW' 
//         => SHOULD BE UNDER THE MAIN FOLDER 'pages' when using 'NextJS'

const authIndexPage = (props) => (
  <div>
    {/* 'appName' => is the result (who is passed on 'props') of the 'Promise()' on the " authIndexPage.'getInitialProps' " func */}
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="Walid" age={28} />
  </div>
);

// We can define our 'getInitialProps()' func like this ' static getInitialProps(context) {...} ' [ Like on '/pages/index.js' file ]
// OR like this one below :: => '  authIndexPage.getInitialProps = context => {...}  '
////---- 'getInitialProps()' func => Will return the result of the 'Promise()' when the 'setTimeOut()' func is executed
////---- => So 'NextJS' will take care to listen to the result ('==appName') and save it in the 'props'
authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
