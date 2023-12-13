import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../styles/styles.css"


export default function AddDiscuss() {
    const [cookies,] = useCookies(["access_token"]);
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");
    

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!cookies.access_token) {
            alert("Login first please!")
        }
        else {
            try {
                const username = cookies.username;
                console.log(username)
                await axios.post("http://localhost:3001/discuss/add", {
                    title, content, type, username,
                });
                navigate("/discuss");
            } catch (err) {
                console.error(err)
            }
        }
    }

    return <div>
        <form onSubmit={onSubmit}>
            <h2>Add a Discussion</h2>
            <input type="text" onChange={(event) => setTitle(event.target.value)} name="title" value={title} required placeholder="Title..."></input>
            <input type="text" name="content" onChange={(event) => setContent(event.target.value)} value={content} required placeholder="Content..."></input>
            <select required value={type} onChange={(event) => setType(event.target.value)}>
                <option value="" disabled selected>Type</option>
                <option>General</option>
                <option>Question</option>
                <option>Fun</option>
            </select>
            <button type="submit">Add</button>
        </form>
    </div>
}