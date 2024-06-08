require('dotenv').config();
const app = require('./app/app');

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Application is running on Port:${PORT}`)
})