export {};

const axios = require("axios").default;
const { ApolloError } = require("apollo-server-errors");

enum RESTAPIMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "PUT",
}

interface HeadersType {
  "Content-Type": string;
  "X-API-Key": string;
}

interface restApiHandlerInput {
  functionName: string;
  method: RESTAPIMethod;
  url: string;
  headers: HeadersType;
  params: Object;
}

const restApiHandler: (input: restApiHandlerInput) => unknown = async ({
  functionName,
  method,
  url,
  headers,
  params,
}) => {
  try {
    const response = await axios({
      method,
      url,
      headers,
      params,
    });
    const { status, data } = response;
    if (status === 200) {
      return data;
    } else {
      throw new ApolloError(
        `Fetching Moralis Web3 API Falied: ${functionName} ${status}`
      );
    }
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new ApolloError(`Axios Fetching API Error: ${e}`);
    } else {
      throw new ApolloError();
    }
  }
};

module.exports = {
  RESTAPIMethod,
  restApiHandler,
};
