const mongoose= require("mongoose");
const AderSchema = new mongoose.Schema({
    adverUrl: {
        type: String,
        required: true,
    }
})
const Adver = mongoose.model("Adver", AderSchema);
module.exports = Adver;