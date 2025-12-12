const express = require("express");
const app = express();

const authRoute = require("./routes/api/authRoute");

//--  middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//-- Routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hi this is the api base endpoint for FEEDPOST");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
