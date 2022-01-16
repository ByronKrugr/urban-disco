const modelService = require('./model.service');

module.exports = async function (context, req) {
    let a = modelService.getModel();
    console.log(a.id);
    context.res.json({
        text: "Hello from the API (" + a.name + ")"
    });
};