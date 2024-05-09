// Error handling middleware for server errors
app.use((err, req, res, next) => {
  console.error("Server error:", err.stack);
  res.status(500).send("Server error occurred");
});
