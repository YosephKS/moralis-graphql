interface getContractEventsInput {
  address: string;
  chain?: string;
  subdomain?: string;
  providerUrl?: string;
  from_block?: number;
  to_block?: number;
  from_date?: string;
  to_date?: string;
  topic?: string;
  offset?: number;
  limit?: number;
}

interface getContractEventsArgs {
  input: getContractEventsInput;
}

const getContractEvents = (_: unknown, args: any) => {
  const { input: params } = args || {};
  const { address } = params || {};
  return restApiHandler({
    functionName: "getContractEvents",
    method: RESTAPIMethod.POST,
    url: `https://deep-index.moralis.io/api/v2/${address}/events`,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY,
    },
    params,
  });
};

module.exports = getContractEvents;
