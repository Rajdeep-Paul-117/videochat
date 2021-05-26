import React from 'react'

import VideoPlayer from './components/VideoPlayer'
import Sidebar from './components/Sidebar'
import Notification from './components/Notification'

const App = () => {
    return (
        <div className="wrapper">
            <h1 className="heading">Video Chat</h1>
            <VideoPlayer/>
            <Sidebar>
                <Notification/>
            </Sidebar>
        </div>
    )
}

export default App
