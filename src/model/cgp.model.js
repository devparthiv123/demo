const mongoose = require('mongoose');
const stu = require("../../src/model/stu.model")

const cgp = new mongoose.schema({
    userId: {
        type: mongoose.schema.ObjectId,
        ref: stu
    },
    cgp: {
        type: String
    }
})

modele.export = mongoose.model("cgp", cgp)