import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client";
import Videoplayer from "./components/video";
import '../node_modules/video-react/dist/video-react.css';
import { useState } from "react";



const socket = socketIO.connect("http://localhost:4000")

let newstyle = "videoplayerstyle"



function App() {

  const [initialstyle , afterstyle] = useState('videoplayerstyle');
  const [chatshow,chathide] = useState('chat');


  function handleclick(){
    if(initialstyle == 'videoplayerstyle'){
      afterstyle('afterchatclick');
      chathide('chat_hide');
    }else{
      afterstyle('videoplayerstyle');
      chathide('chat');
    }

  }



  return (

    <BrowserRouter>
    {/* <input type="text" 
        minLength={6}
        placeholder= "Enter the username" 
        name="username" 
        id='username'
        className='username__input' 
        onChange={ }
        /> */}
        <div className="app1">
        
          <Videoplayer dataCheck = {initialstyle}/>
          <button id='showchatbutton' onClick={handleclick}> show chat</button>

          <Routes>
            <Route path="/" element={<ChatPage socket={socket} hidechatbox = {chatshow} />}></Route>
          </Routes>

          {/* <ChatPage socket={socket}/> */}


    </div>
    </BrowserRouter>
    
  );
}

export default App;
