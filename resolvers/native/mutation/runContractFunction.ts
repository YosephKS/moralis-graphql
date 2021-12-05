interface runContractFunctionInput {
  chain?: string;
  subdomain?: string;
  providerUrl?: string;
  function_name: string;
  address: string;
}

interface runContractFunctionArgs {
  input: runContractFunctionInput;
}

const runContractFunction = (_: unknown, args: runContractFunctionArgs) => {
  const { input: params } = args || {};
  const { address } = params || {};
  return restApiHandler({
    functionName: "runContractFunction",
    method: RESTAPIMethod.POST,
    url: `https://deep-index.moralis.io/api/v2/${address}/function`,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY,
    },
    params,
  });
};

module.exports = runContractFunction;
