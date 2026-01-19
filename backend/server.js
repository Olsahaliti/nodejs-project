// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const studentRoutes = require("./src/routes/studentRoutes");
const bookRoutes = require("./src/routes/bookRoutes");
const loanRoutes = require("./src/routes/loanRoutes");
const statsRoutes = require("./src/routes/statsRoutes");
const { notFound, errorHandler } = require("./src/middleware/errorHandler");
const app = express();