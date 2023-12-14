//import mongoose
const mongoose = require("mongoose");
// Create Schema definition object > JSON format
const schemaDefObj = {
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String
    },
    emailAddress: {
        type: String
    },
    rating: {
        type: number,
        minimum: 0,
        exclusiveMaximum: 10
    }
};

// Create mongoose Schema
const restaurantSchema = new mongoose.Schema(schemaDefObj);
// export mongoose model
module.exports = mongoose.model('Restaurant', restaurantSchema);