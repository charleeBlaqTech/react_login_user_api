const express           = require("express");
const dotenv            = require('dotenv').config()
const cors              = require('cors')
const connectToDb       = require("./dbConnection/dbConnect");
const userAuthRoutes    = require('./routes/authRoutes')

const app               = express();




// ===============MIDDLEWARES==========================
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(cors({
//     origin: "*"
// }))
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });


// ==========Home routes are all routes that have / + route names=================
app.use('/auth',userAuthRoutes)






// =======================PORT FUCTION========================
// ======the app only start listening for requests after connecting to a database===============
app.listen(process.env.PORT, async()=>{
    await connectToDb();
    console.log(`listening on port: ${process.env.PORT}`)
})