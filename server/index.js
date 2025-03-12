require("dotenv").config();
const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weather");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/weather", weatherRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
