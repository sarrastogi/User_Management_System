import { ConnectDb } from './src/Db/index.js'
import express from 'express'
import { Router } from 'express'
import Bulkrouter from './src/Route/bulkcreate.js'
import Bulkupdate from './src/Route/bulkupdate.js'
let app = express()
let port = 8000
app.use(express.json());
let router = Router()
app.get("/", (req, res) => {
    res.send('user')
});

app.use('/api/users',Bulkrouter,Bulkupdate)
ConnectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is listen on port ${port}`);
        
    })
})
.catch((error)=>{console.log(error);
})

