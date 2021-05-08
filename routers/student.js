const express = require("express");
const router = new express.Router();
router.get('/rath',(req,res)=>{
    res.send("Hello");
});
module.exports = router;
