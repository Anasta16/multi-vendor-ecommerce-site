// code = status code (500, 404, etc.)
// data = total data
module.exports.responseReturn = (res, code, data) => {
    return res.status(code).json(data);
}