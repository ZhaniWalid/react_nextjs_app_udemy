import React from 'react';

const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>

        {/* <style jsx> :: NextJS => Use a special package called 'styled-jsx' and we pass 'jsx' as a props to the 'style' (=<style jsx />)
                => The CSS Code should be between :: "  {` `}  " => To pass 'CSS configs' as 'String'
                ===> Here the style will be applied to the 'div' Component on this file [User.js] </style> */}
        <style jsx>{`
            div {
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 20px;
                text-align: center;
            }
        `}</style>
    </div>
);

export default user;