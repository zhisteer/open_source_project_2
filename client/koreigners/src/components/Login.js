import React, {useState} from 'react';
import {useCookies} from 'react-cookie';
import Logo from '../assets/logoo.png';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [, setCookies] = useCookies(["access_token", "username"]);

    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {
                username,
                password,
            });

            setCookies("access_token", response.data.token);
            setCookies("username", username)
            window.localStorage.setItem("userID", response.data.userID);
            
            navigate("/");
        } catch(err){
            console.error(err);
        }
    }
    
    return (
        <main class="container">
            <h1>Welcome Koreigner</h1>
            <article class="grid">
                <div>
                    <hgroup>
                        <h1>Sign in</h1>
                        <h2>Welcome Back!</h2>
                    </hgroup>

                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="login"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Login"
                            aria-label="Login"
                            autoComplete="nickname"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="current-password"
                            required
                        />
                        <button type="submit" >Login</button>
                        <p>Not a Member? <Link to="/register">Register</Link></p>
                    </form>
                </div>
                <img src={Logo} alt="Koreigners" className='container'>

                </img>
            </article>
        </main>
    );
}

export default Login;
