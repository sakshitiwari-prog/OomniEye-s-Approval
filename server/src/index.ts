const express = require("express");
const router = require("./Routes/index");
const cors = require("cors");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

// to allow json request
app.use(express.json());
app.use(express.urlencoded());
// cors middleware
const allowedOrigins = [
    "http://localhost:5173",
];

app.use(
    cors({
        origin: allowedOrigins,
    })
);

app.use("/", router);

app.listen(process.env.BE_PORT ?? 5000, () => {
  console.log("connected");
});