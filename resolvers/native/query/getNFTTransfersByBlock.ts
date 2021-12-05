interface getNFTTransfersByBlockInput {
  chain?: string;
  subdomain?: string;
  offset?: number;
  limit?: number;
  block_number_or_hash: string;
}

interface getNFTTransfersByBlockArgs {
  input: getNFTTransfersByBlockInput;
}

const getNFTTransfersByBlock = (_: unknown, args: any) => {
  const { input: params } = args || {};
  const { block_number_or_hash } = params || {};
  return restApiHandler({
    functionName: "getNFTTransfersByBlock",
    method: RESTAPIMethod.GET,
    url: `https://deep-index.moralis.io/api/v2/block/${block_number_or_hash}/nft/transfers`,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY,
    },
    params,
  });
};

module.exports = getNFTTransfersByBlock;
