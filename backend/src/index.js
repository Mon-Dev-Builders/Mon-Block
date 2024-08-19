const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { authRouter } = require("./routes/auth.route");
const { userRouter } = require("./routes/user.route");
const { authMiddleware } = require("./middleware/auth.middleware");
const { productRouter } = require("./routes/product.route");

const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());
// app.use(authMiddleware);

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);

app.listen(3030, () => {
  console.log(`Server is running on port ${PORT}`);
});
