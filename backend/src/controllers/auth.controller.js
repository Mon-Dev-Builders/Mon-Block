const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");
const { readJson, saveJson } = require("../utils");

const login = async (req, res) => {
  const { email, password } = req.body;
  const users = await readJson("users.json");

  const user = users.find((user) => user.email === email);
  if (!user) return res.status(401).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Password is wrong" });

  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: "Success",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const users = await readJson("users.json");

    const existingUser = users.find((user) => user.email === email);
    if (existingUser)
      return res.status(401).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      id: v4(),
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    await saveJson("users.json", users);
    const token = jwt.sign(
      {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
      process.env.JWT_SECRET
    );
    res.json({
      message: "Success",
      token,
      newUser: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { login, register };
