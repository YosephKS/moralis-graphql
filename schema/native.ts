const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type log {
    log_index: String
    transaction_hash: String
    transaction_index: String
    address: String
    data: String
    topic0: String
    topic1: String
    topic2: String
    block_timestamp: String
    block_number: String
    block_hash: String
  }

  type blockTransaction {
    hash: String
    nonce: String
    transaction_index: String
    from_address: String
    to_address: String
    value: String
    gas: String
    gas_price: String
    input: String
    receipt_cumulative_gas_used: String
    receipt_gas_used: String
    receipt_contract_address: String
    receipt_root: String
    receipt_status: String
    block_timestamp: String
    block_hash: String
    logs: log
  }

  input getBlockInput {
    chain: String
    subdomain: String
    block_number_or_hash: String!
  }

  input getDateByBlockInput {
    chain: String
    providerUrl: String
    date: String!
  }

  type getBlockResponse {
    timestamp: String
    number: String
    hash: String
    parent_hash: String
    nonce: String
    sha3_uncles: String
    logs_bloom: String
    transactions_root: String
    state_root: String
    receipts_root: String
    miner: String
    difficulty: String
    total_difficulty: String
    size: String
    extra_data: String
    gas_limit: String
    gas_used: String
    transaction_count: String
    transactions: blockTransaction
  }

  type getDateByBlockResponse {
    date: String
    block: Int
    timestamp: Int
  }

  type Query {
    getBlock(input: getBlockInput!): getBlockResponse
    getDateToBlock(input: getDateByBlockInput!): getDateByBlockResponse
  }
`;

module.exports = typeDefs;
