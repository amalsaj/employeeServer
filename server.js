const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const router = require("./routes/route");

app.use(cors());

app.use(cookieParser());

// Set up body parser middleware with the correct limits
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(router);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
