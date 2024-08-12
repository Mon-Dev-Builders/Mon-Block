const { Router } = require("express");
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
module.exports = { authRouter };
