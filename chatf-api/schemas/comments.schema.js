const mongoose = require('mongoose');
const deepPopulate =require('mongoose-deep-populate')(mongoose);
const findVisible =require('./findVisible');
 
const TopicsSchema = new mongoose.Schema({
    text: {type: String},
    topic:{type: mongoose.Schema.Types.ObjectId, ref: 'Topics'},
    member:{type: mongoose.Schema.Types.ObjectId, ref: 'Members'},
    isvisible: {type: Boolean, default: true},
    createdAt: {type: Date}

})
const population = [{
    path: 'topic',
    match: {isVisible: true}
},
{
    path: 'member',
    match: {isVisible: true}

}]

TopicsSchema.pre('find', findVisible(population));
TopicsSchema.pre('findOne', findVisible(population));
TopicsSchema.pre('findOneAndUpdate', findVisible());
TopicsSchema.pre('count', findVisible());
TopicsSchema.pre('countDocuments', findVisible(population));

TopicsSchema.plugin(deepPopulate, {})

const Topics = mongoose.model('Topics', TopicsSchema,'Topics');
module.exports = Topics