interface getLogsByAddressInput {
  address: string;
  chain?: string;
  subdomain?: string;
  block_number?: string;
  from_block?: string;
  to_block?: string;
  from_date?: string;
  to_date?: string;
  topic0?: string;
  topic1?: string;
  topic2?: string;
  topic3?: string;
}

interface getLogsByAddressArgs {
  input: getLogsByAddressInput;
}

const getLogsByAddress = (_: unknown, args: getLogsByAddressArgs) => {
  const { input: params } = args || {};
  const { address } = params || {};
  return restApiHandler({
    functionName: "getLogsByAddress",
    method: RESTAPIMethod.GET,
    url: `https://deep-index.moralis.io/api/v2/${address}/logs`,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY,
    },
    params,
  });
};

module.exports = getLogsByAddress;
