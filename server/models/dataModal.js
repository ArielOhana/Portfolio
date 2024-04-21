const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    date:
    {
        type: String,
        required:true,
    },
    visits: {
        type: [Date], 
        required: true
    },
    emails: {
        type: [{
            subject: { type: String, required: false },
            text: { type: String, required: false }
        }],
        default: []
    },
    projectsInteraction: {
        type: [{
            git: { type: Number, required: false, default: 0 },
            url: { type: Number, required: false, default: 0 },
            projectName: { type: String, required: false}
        }],
        default: []
    }
}, { timestamps: true });

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
