

import express from "express";
import User from "../models/userSchema.mjs";
import Spool from './/spoolRoutes.mjs'
const router = express.Router();

// @route: POST /api/user/register
// @desc: Register user
// @access: Public
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "Email Already Exists" });
  }

  user = new User({ username, email, password });
  await user.save();

  res.status(201).json({ userId: user._id });
});

// @route: POST /api/user/:userId/add-spool
// @desc: Add spool to user's inventory
// @access: Private
router.post("/:userId/add-spool", async (req, res) => {
  const { userId } = req.params;
  const { name, material, diameter, weight, color, printTemperature, plateTemperature } = req.body;

  if (!name || !material || !diameter || !weight || !color || !printTemperature || !plateTemperature) {
    return res.status(400).json({ msg: "All fields are required for the spool." });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }

    const spool = new Spool({ name, material, diameter, weight, color, printTemperature, plateTemperature });
    await spool.save();

    user.spools.push(spool._id);
    await user.save();

    res.status(201).json({ msg: "Spool added successfully!", spool });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;