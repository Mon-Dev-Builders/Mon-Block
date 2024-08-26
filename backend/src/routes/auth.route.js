const { Router } = require("express");
<<<<<<< HEAD
const { login, register } = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/login", login).post("/register", register);
=======
const {
  createAccount,
  checkAccount,
  getAllAccounts,
} = require("../controllers/account.controller");

const authRouter = Router();

authRouter
  .post("/login", checkAccount)
  .post("/register", createAccount)
  .get("/", getAllAccounts);
>>>>>>> ben
module.exports = { authRouter };
