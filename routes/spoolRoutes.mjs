import express from 'express'
import Spool from '../models/spoolSchema.mjs'
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const newSpool = await Spool.create(req.body);
        res.json(newSpool);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read
router.get('/', async (req, res) => {
    try {
        const allSpools = await Spool.find(req.body);
        res.json(allSpools);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updatedSpool = await Spool.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSpool) {
            return res.status(400).json({ msg: "Spool not found" });
        }
        res.json(updatedSpool);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedSpool = await Spool.findByIdAndDelete(req.params.id);
        if (!deletedSpool) {
            return res.status(400).json({ msg: "Spool not found" });
        }
        res.json(deletedSpool);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});





export default router;