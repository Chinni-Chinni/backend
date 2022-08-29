import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AuthContext } from '../contents/Authcontext';
import "../App.css"
// import ShowUserDetails from './ShowUserDetails';

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const  handleLogin = useContext(AuthContext);
    const token = useContext(AuthContext);
    const settoken = useContext(AuthContext);
    // // console.log(token.token);

    // const handleAuth = (details) => {
    //     token ? settoken(null) : handleLogin(details);
    


    // }
    // console.log(token)
    return (
        <>
        {
            token ? 
          <h2>user Logged In</h2> :
                <div >
                    <h1>Login</h1>
                    <Box className='form-input' style={{width : "40%", margin : "auto",display : "flex",flexDirection : "column"}}>

                        <TextField value={email} onChange={(e) => setemail(e.target.value)} label="Filled" variant="filled" />
                        <TextField value={password} onChange={(e) => setpassword(e.target.value)} label="Filled" variant="filled" />


                    </Box>



                </div>}
            <Button onClick={() => handleLogin({ email, password })} variant="contained" color="success"> {token ? "Log out" : "Log in"}</Button>
        

        </>

    )
}