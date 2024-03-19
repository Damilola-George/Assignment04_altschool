const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.json({ data: "Here is your data"})
});

router.post("/", (req, res) => {
    res.json({ data: "Author Created"})
});

router.put("/", (req, res) => {
    res.json({ data: "Author Updated"})
});

router.delete("/", (req, res) => {
    res.json({ data: "Author Deleted"})
});



module.exports = router;



