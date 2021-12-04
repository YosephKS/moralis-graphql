export {};

const { NativeQuery } = require("./native/index");

const Query = {
  ...NativeQuery,
};

module.exports = {
  Query,
};
