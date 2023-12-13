import Navbar from "./Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register"
import Discuss from "./components/Discuss";
import { Route, Routes } from "react-router-dom";
import AddDiscuss from "./components/AddDiscuss";
import PostsByType from "./components/PostsByType";
import SinglePost from "./components/Post";


function App() {
 


  return (
    <>
      <Navbar />
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/discuss" element={<Discuss />}/>
          <Route path="/addDiscuss" element={<AddDiscuss />}/>
          <Route path="/posts/:type" element={<PostsByType/>} />
          <Route path="/post/:postId" element={<SinglePost />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
