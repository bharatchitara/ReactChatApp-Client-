import React , { Component } from 'react';
import { Player } from 'video-react';
import '../assets/styles/video.css';

export class Videoplayer extends Component{
    render(){
        return(
            <div className='videoplayerstyle'>
            <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
            <button id='showchatbutton'>show chat</button>
          </div>
        )
    }
}


export default Videoplayer;