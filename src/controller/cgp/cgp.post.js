const cgp = require("../../model/cgp.model")

exports.stu = async (req, res) => {
    try {
        let { userId, cgp } = req.body
        let cgpData = new cgp([userId, cgp])
        cgpData = stdData.save()
        res.status(200).json({ message: "success" })

    } catch (err) {
        res.status(500).json({ message: err })
    }
}