import React from 'react';
// Use this cmd: 'npm install --save next react react-dom' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import Link from 'next/link';

// Hint :: => ALL 'FILES & FOLDERS' that will be rendered to 'VIEW' 
//         => SHOULD BE UNDER THE MAIN FOLDER 'pages' when using 'NextJS'

// Hint :: [_error.js] file => 404 OR 500 errors are handled both client-side and server-side by the Error component. 
//                 => So If you wish to override it, define the file 'pages/_error.js' (under in tha 'pages' folder) 

// Hint :: => NextJS : Help us to 'point' to 'files' under 'folders' that are (='folders') considered as 'Routes'
//    => for expample : <Link href="/auth"> ::
//    => "/auth" => will point to '/auth' ('pages/auth') folder and acess to [index.js] File ('pages/auth'/index.js)
//    ====> There is no need to use '<Route />' Component from the package 'react-router-dom'

const errorPage = () => (
    <div>
        <h1>Oops, something went wrong.</h1>
        <p>Try <Link href="/"><a>going back</a></Link>.</p>
    </div>
);

export default errorPage;