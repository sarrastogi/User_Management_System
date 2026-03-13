import { User } from "../model/user_model.js";
import express from "express";
import { Router } from "express";
let router = Router()
router.post("/bulk-create", async (req, res) => {
  try {
    const users = req.body; // array of users

    if (!Array.isArray(users)) {
      return res.status(400).json({
        message: "Request body must be an array",
      });
    }

    const result = await User.insertMany(users);

    res.status(201).json({
      message: "Users created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});
export default router