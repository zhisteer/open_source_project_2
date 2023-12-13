import React, { useState } from 'react';
import Logo from '../assets/logoo.png';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Register() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const onSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.post("http://localhost:3001/auth/register", {
            username, password
        });
        alert("Registered")
    } catch(err) {
        console.error(err)
    }
}

    return (
        <main class="container">
            <h1>Welcome Koreigner</h1>
            <article class="grid">
                <div>
                    <hgroup>
                        <h1>Register</h1>
                        <h2>Welcome</h2>
                    </hgroup>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            aria-label="Login"
                            autocomplete="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            aria-label="Password"
                            autocomplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        <button type="submit">Register</button>
                        <p>Already a Member? <Link to="/login">Login</Link></p>
                    </form>
                </div>
                <img src={Logo} alt="Koreigners" className='container'>

                </img>
            </article>
        </main>
    );
}

export default Register;
