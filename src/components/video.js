import React from 'react';

import { Player } from 'video-react';
import '../assets/styles/video.css';



function Videoplayer(props){

        return(
            <div className={props.dataCheck}>
            <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
            
          </div>
        )
    }



export default Videoplayer;