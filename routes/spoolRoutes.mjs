

import express from "express";
import Spool from "../models/spoolSchema.mjs";

const router = express.Router();

// Create a new spool
router.post("/", async (req, res) => {
    try {
        console.log("Received data:", req.body); // Debugging log
        const newSpool = await Spool.create(req.body);
        res.status(201).json(newSpool);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Get all spools
router.get("/", async (req, res) => {
    try {
        const allSpools = await Spool.find();
        res.json(allSpools);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Update spool by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedSpool = await Spool.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSpool) {
            return res.status(400).json({ msg: "Spool not found" });
        }
        res.json(updatedSpool);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Delete spool by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedSpool = await Spool.findByIdAndDelete(req.params.id);
        if (!deletedSpool) {
            return res.status(400).json({ msg: "Spool not found" });
        }
        res.json(deletedSpool);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
    }
});

export default router;
