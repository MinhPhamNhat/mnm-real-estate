const mongoose = require('mongoose')

const informationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ownerId:  {
        type: String,
        require: true,
    },
    type:  {
        type: String, 
        require: true,
        enum: ["contact", "censor", "warn"],
    },
    propertyId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'properties',
    },
    contact: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'contacts'
    },
    censor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'censors'
    },
    warn: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'warns'
    },
    isRead:  {
        type: Boolean, 
        require: true
    },
    date: Date,
})

module.exports = mongoose.model("informs", informationSchema)