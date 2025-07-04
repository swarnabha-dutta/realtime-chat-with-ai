import http from 'http';
import app from "./app.js";




const server = http.createServer(app);


server.listen(pot=rt, () => {
    console.log(`Server is running on port:${p}`)
})