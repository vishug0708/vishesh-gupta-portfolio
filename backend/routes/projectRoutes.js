const express = require("express");

const {
  getProjects,
  getProjectById,
} = require("../controllers/projectController");

const router = express.Router();

// GET all projects
router.get("/", getProjects);

// GET project by ID
router.get("/:id", getProjectById);

module.exports = router;
