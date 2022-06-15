// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

//schema 
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Cloud', 'Barret', 'Tifa', 'Aerith', 'Sephiroth']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String,
    image: {type: String, required: true, default: 'https://image.api.playstation.com/vulcan/ap/rnd/202102/1515/0GxrqnoNV8rIHsGCE1hjAKSF.png'}
})

//model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker