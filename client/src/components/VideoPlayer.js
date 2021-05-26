import React,{useContext} from 'react'

import {SocketContext} from '../SocketContext'

const VideoPlayer = () => {
    const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} = useContext(SocketContext)
    
    return (
        <div className="gridcontainer">
            {
                stream&&(
                    <div className="videoplayercontainer" >
                        <h4>{name||'Name'}</h4>
                        <video playsInline muted ref={myVideo} autoPlay className="videoplayer"/>
                    </div>
                    
                )
            }
            {
                callAccepted&&!callEnded&&(                   
                    <div>
                        <h5>{call.name||'userNAme'}</h5>
                        <video playsInline ref={userVideo} autoPlay className="videoplayer"/>
                    </div>
                    
                )
            }
        </div>
    )
}

export default VideoPlayer
