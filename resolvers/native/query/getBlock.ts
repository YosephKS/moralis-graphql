const { restApiHandler, RESTAPIMethod } = require("../../../handler/restApi");
require("dotenv").config;

interface getBlockInput {
  block_number_or_hash: string;
  chain?: string;
  subdomain?: string;
}

interface getBlockArgs {
  input: getBlockInput;
}

const getBlock = async (_: unknown, args: getBlockArgs) => {
  const { input: params } = args || {};
  const { block_number_or_hash } = params || {};
  return restApiHandler({
    functionName: "getBlock",
    method: RESTAPIMethod.GET,
    url: `https://deep-index.moralis.io/api/v2/block/${block_number_or_hash}`,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY,
    },
    params,
  });
};

module.exports = getBlock;
