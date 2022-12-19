import React , { Component , useState } from 'react';

import { Player } from 'video-react';
import '../assets/styles/video.css';
import ChatPage from './ChatPage';


// export class Videoplayer extends Component{




function Videoplayer(props){

    console.log(props.dataCheck)

    const [initialstyle , afterstyle] = useState('videoplayerstyle');


    function changestyle(){
        afterstyle("afterchatclick");

    }

    // render(){
        return(
            <div className={props.dataCheck}>
            <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
            {/* <button id='showchatbutton' onClick={changestyle} > show chat</button> */}

            
          </div>
        )
    }
// }


export default Videoplayer;