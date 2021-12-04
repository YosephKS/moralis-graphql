export {};

const { restApiHandler, RESTAPIMethod } = require("../../../handler/restApi");
require("dotenv").config;

const getDateToBlock = (_: unknown, args: any) => {
  const { input: params } = args || {};
  return restApiHandler({
    functionName: "getDateToBlock",
    method: RESTAPIMethod.GET,
    url: `https://deep-index.moralis.io/api/v2/dateToBlock`,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY,
    },
    params,
  });
};

module.exports = getDateToBlock;
