class CustomErrorHandler extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const createErrorHandler = (status, message) => {
  return new CustomErrorHandler(status, message);
};

module.exports = { createErrorHandler, CustomErrorHandler };
