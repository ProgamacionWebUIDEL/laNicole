const express = require("express");
const Class=require("../models/class");
//const { request, response } = require("../app");
const router=express.Router();

//Create (POST)
router.post("/create",async(request, response)=> {
    console.log("REQUEST DEL CLIENTT---",request.body);
    const newClass = new Class(request. body);
    await newClass.save();
    response.status(200).json({code: "OK", message: "todo muy bien", info: "OK", data: newClass});
});
module.exports = router;

//Create (GET)
router.get("/list",async(request, response)=> {
    const listClass = await Class.find();
    response.status (200) .json({
        code: "OK",
        message: "todo muy bien",
        info: "OK",
        data: listClass
    });
});
module.exports = router;

//GET ONLY (POST)
router.get("/getonly",async(request, response)=> {
    console.log("REQUEST DEL CLIENTT---",request.body.id);

    const newClass = await Class.findOne({_id: request.body.id});

    response
    .status (200) 
    .json({
        code: "OK",
        message: "todo muy bien",
        info: "OK",
        data: listClass
    });
});
module.exports = router;