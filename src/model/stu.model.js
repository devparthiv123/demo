const mongoose = require('mongoose');

const stus = new monoose.schema({
    firtname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    stuId: {
        type: Number
    }
})

modele.export = mongoose.model("stus", stus)