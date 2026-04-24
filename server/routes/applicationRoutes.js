const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

// Apply for job
router.post("/apply", async(req, res) => {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();

        res.status(201).json({ message: "Applied successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all applications
router.get("/", async(req, res) => {
    try {
        const applications = await Application.find()
            .populate("userId")
            .populate("jobId");

        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;