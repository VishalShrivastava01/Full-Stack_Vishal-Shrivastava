const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// Add job
router.post("/add", async(req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();

        res.status(201).json({ message: "Job posted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all jobs
router.get("/", async(req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;