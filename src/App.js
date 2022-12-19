import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client"
import Videoplayer from "./components/video";
import '../node_modules/video-react/dist/video-react.css';



const socket = socketIO.connect("http://localhost:4000")
function App() {
  return (

    <BrowserRouter>
        <div>
          <Videoplayer/>
          <Routes>
            {/* <Route path="/" element={<Home socket={socket}/>}></Route> */}
            <Route path="/" element={<ChatPage socket={socket}/>}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
