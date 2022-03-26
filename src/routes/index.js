const express = require("express");
const router = express.Router();

router.get("/", (request, resolve) => {
    resolve.end("Welcome");
})

module.exports = router