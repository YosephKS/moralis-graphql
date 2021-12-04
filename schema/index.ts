const { mergeTypeDefs } = require("@graphql-tools/merge");
const nativeTypes = require("./native");

const schemas = mergeTypeDefs([nativeTypes]);

module.exports = schemas;
