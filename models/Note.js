const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    text:{type:String, required: true},
    createdAt:{type:Date, default:Date.now},
    owner:{type:Types.ObjectId, ref:'User', required: true},
    done:{type:Boolean, default: false}
})

module.exports = model('Note', schema);
