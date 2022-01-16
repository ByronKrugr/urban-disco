const Model = require('./model.model');

require('./mongo').connect();

function getModel() {
    console.log("getModelgetModelgetModelgetModelgetModelgetModelgetModelgetModelgetModelgetModelgetModelgetModel")
    const docquery = Model.find({});
    docquery
        .exec()
        .then(myModel => {
            res.status(200).json(myModel);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}

module.exports = {
    getModel
};