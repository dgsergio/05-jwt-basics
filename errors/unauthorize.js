const CustomApiError = require('./custom-error');
const { StatusCodes } = require('http-status-codes');

class unAuthorizeError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = unAuthorizeError;
