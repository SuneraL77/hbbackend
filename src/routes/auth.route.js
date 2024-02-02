import express from "express";

const router = express.Router();
router.route("/register").get((req,res) =>{
    console.log("Hello ")
})

export default router