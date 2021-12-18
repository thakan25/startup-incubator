import React from 'react';
import { Button } from 'semantic-ui-react';

const Login = function () {
    let style = {
        // width:'1200px',
        minHeight: '100px',
        padding: '1em',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        margin: '10em 30em 10em 30em'

    }

    let inputStyle = {
        margin: '1em',
        border: '1px solid gray',
        borderRadius: '5px',
        width: '20em',
        height: '2.5em'
    }

    return (
        <div style={{ minHeight: '700px' }}>
            <div style={style}>
                <form action='./login' method='post'>
                    <input type="text" placeholder="username" name = "username" style={inputStyle}></input> <br />
                    <input type="password" placeholder="password" name = "password" style={inputStyle} minLength = '6'></input> <br />
                    <button className = 'link-1' style = {{marginTop: '1em', borderRadius: '3px', border:'1px solid gray', padding:'0.5em'}}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
