require('dotenv').config()
const app = require('./src/app.js')
const PORT = process.env.PORT || 3000; 


app.listen(PORT, ()=>{
    console.log("server is running on http://localhost:3000");
})