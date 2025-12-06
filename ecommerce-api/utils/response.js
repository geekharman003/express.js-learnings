const sendErrorResponse = (res, err) => {
  res.status(err.statusCode).send({
    message: err.message,
    status: false,
  });
};

const sendResponse = (res, data) => {
  res.send(data);
};

module.exports = { sendErrorResponse, sendResponse };
