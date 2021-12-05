interface getTrasactionInput {
  transaction_hash: string;
  chain?: string;
  subdomain?: string;
}

interface getTransactionArgs {
  input: getTrasactionInput;
}

const getTransaction = (_: unknown, args: getTransactionArgs) => {
  const { input: params } = args || {};
  const { transaction_hash } = params || {};
  return restApiHandler({
    functionName: "getTransactions",
    method: RESTAPIMethod.GET,
    url: `https://deep-index.moralis.io/api/v2/transaction/${transaction_hash}`,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY,
    },
    params,
  });
};

module.exports = getTransaction;
