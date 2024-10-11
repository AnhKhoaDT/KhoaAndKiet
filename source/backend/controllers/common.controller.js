const createDocument = (Model) => async (req, res) => {
    const data = req.body;
    const newDocument = new Model(data);
    try {
        await newDocument.save();
        res.status(201).json({ success: true, data: newDocument });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getDocuments = (Model) => async (req, res) => {
    try {
        const documents = await Model.find();
        res.status(200).json({ success: true, data: documents });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getDocumentById = (Model) => async (req, res) => {
    const id = req.params.id;
    try {
        const document = await Model.findById(id);
        if (!document) {
            return res.status(404).json({ success: false, message: "Document not found" });
        }
        res.status(200).json({ success: true, data: document });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateDocument = (Model) => async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const document = await Model.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!document) {
            return res.status(404).json({ success: false, message: "Document not found" });
        }
        res.status(200).json({ success: true, data: document });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteDocument = (Model) => async (req, res) => {
    const id = req.params.id;
    try {
        const document = await Model.findByIdAndDelete(id);
        if (!document) {
            return res.status(404).json({ success: false, message: "Document not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument
};
