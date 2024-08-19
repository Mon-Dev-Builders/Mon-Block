const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { readJson } = require("../utils");
require("dotenv").config();

const getAllAccounts = async (req, res) => {
  try {
    const accounts = readJson("accounts.json");

    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const createAccount = async (req, res) => {
  try {
    const accounts = readJson("accounts.json");

    const hashedPassword = await bcrypt.hash(req.body.password, 13);

    const checkEmail = accounts.find(
      (account) => account.email === req.body.email
    );
    if (checkEmail) {
      return res.json({ message: "Already Exist Email" });
    }
    const checkName = accounts.find(
      (account) => account.name === req.body.name
    );
    if (checkName) {
      return res.json({ message: "Already Exist Name" });
    }
    const newAccount = {
      ...req.body,
      password: hashedPassword,
      id: v4(),
      createdDate: new Date().toISOString(),
    };
    accounts.push(newAccount);
    const secretKey = process.env.SECRET_TOKEN;
    if (!secretKey) {
      return res.json({ error: "Missing SECRET_TOKEN" });
    }
    const token = jwt.sign({ id: newAccount.id }, secretKey, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true });

    fs.writeFileSync(filePath, JSON.stringify(accounts));
    res.json({
      message: "Success",
      account: {
        id: newAccount.id,
        name: newAccount.name,
        email: newAccount.email,
        createdDate: newAccount.createdDate,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const checkAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    const findAccount = accounts.find(
      (account) => account.email === req.body.email
    );
    if (!findAccount) {
      return res.json({ message: "User not found" });
    }
    const match = await bcrypt.compare(req.body.password, findAccount.password);
    if (!match) {
      return res.json({ message: "Password is wrong" });
    }
    const secretKey = process.env.SECRET_TOKEN;
    if (!secretKey) {
      return res.json({ error: "Missing SECRET_TOKEN" });
    }
    const token = jwt.sign({ id: findAccount.id }, secretKey, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true });

    res.json({
      message: "Success",
      user: {
        id: findAccount.id,
        name: findAccount.name,
        email: findAccount.email,
        createdDate: findAccount.createdDate,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { createAccount, checkAccount, getAllAccounts };
