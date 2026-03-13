import { User } from '../model/user_model.js';
import express from 'express'
import { Router } from 'express'
let router = Router()

// PUT /api/users/bulk-update

router.put("/bulk-update", async (req, res) => {
  try {

    const users = req.body;
    
    

    if (!Array.isArray(users)) {
      return res.status(400).json({
        message: "Request body must be an array"
      });
    }

    const operations = users.map((user) => ({
      updateOne: {
        filter: { _id: user._id },
        update: { $set: user }
      }
    }));

    const result = await User.bulkWrite(operations);

    res.status(200).json({
      message: "Users updated successfully",
      result
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
});
export default router