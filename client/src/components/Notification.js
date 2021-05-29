import React,{useContext} from 'react'
import {SocketContext} from '../SocketContext'

const Notification = () => {
    const {answerCall,call,callAccepted} = useContext(SocketContext)
    return (
        <>
            {
                call.isReceivedCall && !callAccepted &&(
                    <div>
                        <h1>{call.name} is calling</h1>
                        <button onClick={answerCall}>
                            <span className="material-icons">phone_in_talk</span>
                            Answer
                        </button>
                    </div>
                )
            }
        </>
    )
}
export default Notification
