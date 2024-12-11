import express from "express";
import pool from "../database/db.js";

const router = express.Router();

// Fetch all faculties
router.get("/faculties", async (req, res) => {
    try {
        const rows = await pool.query("SELECT * FROM education");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching education data");
    }
});

// Fetch all articles
router.get("/articles", async (req, res) => {
    try {
        const rows = await pool.query("SELECT * FROM articles");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching articles");
    }
});

router.get('/contact', async (req, res) => {
    try {
        const rows = await pool.query('SELECT * FROM contact');

        console.log('database response:', rows);
        const contacts = rows.length ? rows : [];
        res.json(contacts);
    } catch (err) {
        console.error("Database error fetching contact info:", err);
        res.status(500).send("Failed to fetch contact information");
    }
});

export default router;
