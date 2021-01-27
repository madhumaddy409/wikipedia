const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var historySchema = new Schema(
    {
        user_id:{
            type: Schema.Types.ObjectId,
            ref:"User"
        },
        title:{
            type: String,
            required:true,
            trim: true

        },
        visited_on:{
            type:Date,
            default:Date.now()
        }

    }
);

module.exports = mongoose.model("History", historySchema)