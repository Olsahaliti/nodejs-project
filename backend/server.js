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
// 1) Global middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies
// 2) Routes
app.use("/api/students", studentRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/stats", statsRoutes);
// 3) Error middleware (must be last)
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
 app.listen(PORT, () => console.log("API running on port " + PORT));
});