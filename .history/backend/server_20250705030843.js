import http from 'http';
import app from "./app.js";




const server = http.createServer(app);

const 
server.listen(port, () => {
    console.log(`Server is running on port:${p}`)
})