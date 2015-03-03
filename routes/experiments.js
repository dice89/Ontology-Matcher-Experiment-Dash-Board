/**
 * Created by mueller on 03/03/15.
 */
var express = require('express');
var router = express.Router();
var test_data = require("../model/modelexample")
var Experiment = require("../model/experimentmodel")


router.get("/", function(req,res,next){
    Experiment.find({}, function(err, experiments) {
        if(err) return (next(err))

        res.setHeader('Content-Type', 'application/json');
        res.json(experiments)
    })
});

router.post("/", function(req,res,next){
    var record = new Experiment(req.body)
    record.save(function(err,experiment){
        if(err){res.error(err)}
        res.setHeader('Content-Type', 'application/json');
        res.json(experiment)
    })
})


module.exports = router;
