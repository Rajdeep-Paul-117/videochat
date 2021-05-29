const app=require('express')();
const express=require('express')
const server=require("http").createServer(app);
const cors=require('cors');

const path = require("path")



const io=require("socket.io")(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
});
app.use(cors());

app.get("/",(req,res)=>{
    res.send("working");
})

io.on("connection",(socket)=>{
    socket.emit("me",socket.id);

    socket.on("disconnect",()=>{
        socket.broadcast.emit("callEnded");
    });

    socket.on("callUser",({userToCall,signalData,from,name})=>{
        io.to(userToCall).emit("callUser",{signal:signalData,from,name});
    });

    socket.on("answerCall",(data)=>{
        io.to(data.to).emit("callAccepted",data.signal);
    })

})


app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

server.listen(process.env.PORT||5000,()=>console.log("server is running"));

