// Wrap async controller functions so we don't write try/catch everywhere
// If any error happens -> it goes to error middleware automatically
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = { asyncHandler };