import React,{useContext} from 'react'

import {SocketContext} from '../SocketContext'



const VideoPlayer = () => {

    const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} = useContext(SocketContext)
    return (
 
        <div className="gridcontainer">
            {
               stream&& (
                    <div className="videoplayercontainer" >
                        <h4>{name||'Name'}</h4>
                        <video controls playsInline muted ref={myVideo} autoPlay className="videoplayer"/>
                    </div>
                    
                )
            }
            {
                callAccepted && !callEnded&& (                   
                    <div className="videoplayercontainer">
                        <h4>{call.name||'userName'}</h4>
                        <video controls playsInline ref={userVideo} autoPlay className="videoplayer"/>
                    </div>
                    
                )
            }
        </div>
    )
}

export default VideoPlayer
