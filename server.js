require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const auth = require("./routes/auth");
const search = require("./routes/search");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const helmet = require("helmet");
const compression = require("compression");
const PORT = process.env.PORT || 3001;
const time = 2500000000; // 1 month

// Enable middleware to recognise the incoming request object as a JSON Object.
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(helmet());
app.use(compression());

app.all("*", (req, res, next) => {
  // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    req.header("access-control-request-headers")
  );
  next();
});

// Router middleware
app.use("/api/auth", auth);
app.use("/api/search", search);

app.use(express.static("client/build", { maxAge: time }));
app.use((req, res, next) => {
  res.header("Cache-Control", "max-age= 2500000000");
  next();
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listen to Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
