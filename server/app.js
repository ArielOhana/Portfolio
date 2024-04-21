const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:`${process.env.CLIENT_URL}`,
    credentials: true,
};
app.use(cors(corsOptions));
app.use("/data", dataRoutes);


module.exports = app;