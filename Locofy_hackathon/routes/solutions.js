const express = require('express');
const Solution = require('../models/solutionModel');
const router = express.Router();

router.get('/:roomID/:doubtID', async (req, res) => {
    const roomID = req.params.roomID;
    const doubtID = req.params.doubtID;
    try{
        const solutions = await Solution.find({roomID: roomID, doubtID: doubtID});
        res.status(200).json(solutions);
    }catch(error){
        res.status(400).json({error: error.msg});
        console.log(error);
    }
});

router.post('/:roomID/:doubtID', async (req, res) => {
    const roomID = req.params.roomID;
    const doubtID = req.params.doubtID;
    const instance = req.body;
    try{
        const solution = await Solution.create(instance);
        res.status(200).json(solution);
    }catch(error){
        res.status(400).json({error: error.msg});
    }
});

module.exports = router