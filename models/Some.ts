import mongoose from "mongoose";
const mongoose_fuzzy_searching = require('@thedrizzyway/mongoose-fuzzy-searching-v3');
 
const Some = new mongoose.Schema({
    Email: {
        type: String,
    },
    RegistrationDate: {
        type: Date,
    },
    Birthday: {
        type: Date,
    },
    OTP: {
        type: Number
    },
    Token: {
        type: String
    },
    Gender: {
        type: String
    },
    Name: {
        type: String
    },
    LeadBy: {
        type: String
    },
    Password: {
        type: String
    },
    Status: {
        type: String
    },
    isguest: {
        type: Boolean
    },
    Contact: {
        type: String
    },
    isSms: {
        type: Boolean
    }
});

Some.plugin(mongoose_fuzzy_searching, { fields: ['Email', 'Name', 'Contact', 'LeadBy'] });

export default mongoose.models.Some || mongoose.model("Some", Some);