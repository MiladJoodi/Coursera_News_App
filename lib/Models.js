import mongoose from "mongoose"

const uniSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    rank: {
        type: Number,
        required: true,
        unique: true
    },
},
)

export const Uni = mongoose.models.Uni || mongoose.model("Uni", uniSchema);
