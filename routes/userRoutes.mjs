

import express from "express";
import User from "../models/userSchema.mjs";
import Spool from "../models/spoolSchema.mjs"
const router = express.Router();

// @route: POST /api/user/register
// @desc: register user route
// @access: Public
router.get('/',  (req, res) =>{
    res.send('testing')
})

export default router;