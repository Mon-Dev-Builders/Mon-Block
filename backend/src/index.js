const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { authRouter } = require("./routes/auth.route");

const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.listen(3030, () => {
  console.log(`Server is running on port ${PORT}`);
});
