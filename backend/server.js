const express = require("express")
const dotenv  = require ("dotenv")
const connectDB = require ("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

//check node server is running
app.get("/", (req, res) => {
  res.send("API is running.."); 
});

//user routes
app.use("/users", userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));   