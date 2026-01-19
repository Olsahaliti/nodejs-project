app.use(cors());
app.use(express.json()); // parse JSON bodies

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
app.listen(PORT, () => console.log("API running on port " + PORT));
});

// src/middleware/errorHandler.js
function notFound(req, res, next) {
res.status(404);
next(new Error("Route not found: " + req.originalUrl));
}
function errorHandler(err, req, res, next) {
const status = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
res.status(status).json({
message: err.message,
stack: process.env.NODE_ENV === "production" ? "hidden" : err.stack
});
}
module.exports = { notFound, errorHandler };