const stu = require("../../model/stu.model")

exports.stu = async (req, res) => {
    try {
        let { firtname, lastname, email, stuId } = req.body
        let stdData = new stu([firtname, lastname, email, stuId])
        stdData = stdData.save()
        res.status(200).json({ message: "success" })

    } catch (err) {
        res.status(500).json({ message: err })
    }
}