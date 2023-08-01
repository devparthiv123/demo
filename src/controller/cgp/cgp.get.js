const cgp = require("../../model/cgp.model")
exports.getOne = async (req, res) => {
    try {
        let { id } = req.params
        const data = await cgp.findOne({ _id: id });
        res.json({ data: data, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
