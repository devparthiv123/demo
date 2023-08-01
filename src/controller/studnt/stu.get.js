const stu = require("../../model/stu.model")
exports.getOne = async (req, res) => {
    try {
        let { id } = req.params
        const data = await stu.findOne({ _id: id });
        res.json({ data: data, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.get = async (req, res) => {
    try {
        const data = await stu.find();
        res.json({ data: data, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};