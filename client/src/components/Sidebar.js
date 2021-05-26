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
                <button onClick={() => {navigator.clipboard.writeText(me)}}>Copy Id</button>
                {children}
            </div>
            <div className="call">
                <h3>Make a call</h3>
                <p>Id to Call</p>
                <input placeholder="Enter Id to Call" value={idToCall} onChange={(e)=>setidToCall(e.target.value)} ></input>
                
                {
                    callAccepted && !callEnded ?(
                        <button onClick={leaveCall} >End Call</button>
                    ):(
                        <button onClick={()=>callUser(idToCall)} >Call User</button>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar
