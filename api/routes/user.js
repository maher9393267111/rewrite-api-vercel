const express = require("express");
const router = express.Router();

router.get("/one", (req, res) => {


    res.send("Hello user!");
    }
);

module.exports = router;