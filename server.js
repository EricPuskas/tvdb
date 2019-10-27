require("dotenv").config();
const express = require("express");
const app = express();
const auth = require("./routes/auth");
const search = require("./routes/search");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const PORT = 3001;

// Enable middleware to recognise the incoming request object as a JSON Object.
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

// Listen to Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
