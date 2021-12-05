export {};

const { NativeQuery, NativeMutation } = require("./native/index");

const Query = {
  ...NativeQuery,
};

const Mutation = {
  ...NativeMutation,
};

module.exports = {
  Query,
  Mutation,
};
