const { CustomErrorHandler } = require("../errors/custom-error-handler");

const errorHandler = (err, req, res, next) => {
  err instanceof CustomErrorHandler
    ? res.status(err.status).json({ status: false, msg: err.message })
    : res.status(500).json({ status: false, msg: err });
};

module.exports = errorHandler;
