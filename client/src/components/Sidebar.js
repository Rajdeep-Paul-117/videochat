import React,{useContext,useState} from 'react'
import {SocketContext} from '../SocketContext'


const Sidebar = ({children}) => {
    
    const {me,callAccepted,setName,name,callEnded,leaveCall,callUser} = useContext(SocketContext)
    const [idToCall, setidToCall] = useState('')
    return (
        <div className="options">
            <div className="info">
                <h3>Account Info</h3>
                <p>Name</p>
                <input placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)} ></input>
                <button onClick={() => {navigator.clipboard.writeText(me)}}>
                <span className="material-icons">content_copy</span>
                        Copy Id
                </button>
            </div>
            <div className="call">
                <h3>Make a call</h3>
                <p>Id to Call</p>
                <input placeholder="Enter Id to Call" value={idToCall} onChange={(e)=>setidToCall(e.target.value)} ></input>
                
                {
                    callAccepted && !callEnded ? (
                        <button onClick={leaveCall} >
                            <span className="material-icons">call_end</span>
                                End Call
                        </button>
                    ):(
                        <button onClick={()=>callUser(idToCall)} >
                            <span className="material-icons">phone</span>
                                Call User
                        </button>
                    )
                }
            </div>
            <div className="answercall" >{children}</div>
        </div>
    )
}

export default Sidebar
