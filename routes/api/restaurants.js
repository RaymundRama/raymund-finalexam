// Router object for /api/restaurants endpoint
// Import Express
const express = require("express");
// create router object
const router = express.Router();
// import model
const Restaurant = require("../../models/restaurant")

// Configure handlers
// TODO add CRUD functionality by adding handlers for these HTTP Methods


// Create mapped to POST
router.post("/", (req, res,next)=> {
    if (!req.body.name){
        res.status(400).json({'ValidationError': 'name is a required field'});
    }else if (!req.body.address){
        res.status(400).json({'ValidationError': 'address is a required field'});
    } else {
        Restaurant.create({
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
        rating: req.body.rating
    }, (err, newRestaurant) => {
        if (err) {
            console.log(err);
            res.status(500).json({'ErrorMessage':'Server threw an exception'});
        }else{
            res.status(200).json(newRestaurant);
        }
    }
    )}
})


// Read mapped to GET
router.get("/", async (req,res,next)=>{
    let restaurants = await Restaurant.find().limit(10);
    res.status(200).json(restaurants)

})


// Update mapped to PUT
// no updating I guess. 

// Delete mapped to DELETE
router.delete('/:_id', (req,res, next) => {
    Restaurant.remove({
        _id: req.params._id
    }, (err) => {
        if (err){
            console.log(err) // server threw up (ewwww)
            res.status(500).json({'ErrorMessage': 'Server threw exception'});
        } else {
            res.status(200).json({"Success":"true"});
        }
    })
})

//Export 
module.exports = router;