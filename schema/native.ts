const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar JSON

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

  type block {
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

  type blockDate {
    date: String
    block: Int
    timestamp: Int
  }

  type logEventByAddress {
    transaction_hash: String
    address: String
    block_timestamp: String
    block_number: String
    block_hash: String
    data: String
    topic0: String
    topic1: String
    topic2: String
    topic3: String
  }

  type nftTransfer {
    token_address: String
    token_id: String
    from_address: String
    to_address: String
    value: String
    amount: String
    contract_type: String
    block_number: String
    block_timestamp: String
    block_hash: String
    transaction_hash: String
    transaction_type: String
    transaction_index: String
    log_index: Int
    operator: String
  }

  type nftTransferCollection {
    total: Int
    page: Int
    page_size: Int
    result: [nftTransfer]
    block_exists: Boolean
  }

  type logEvent {
    transaction_hash: String
    address: String
    block_timestamp: String
    block_number: String
    block_hash: String
    data: JSON
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

  input getLogsByAddressInput {
    address: String!
    chain: String
    subdomain: String
    block_number: String
    from_block: String
    to_block: String
    from_date: String
    to_date: String
    topic0: String
    topic1: String
    topic2: String
    topic3: String
  }

  input getNFTTransfersByBlockInput {
    chain: String
    subdomain: String
    offset: Int
    limit: Int
    block_number_or_hash: String!
  }

  input getTransactionInput {
    chain: String
    subdomain: String
    transaction_hash: String!
  }

  input getContractEventsInput {
    chain: String
    subdomain: String
    providerUrl: String
    from_block: Int
    to_block: Int
    from_date: String
    to_date: String
    topic: String!
    offset: Int
    limit: Int
    address: String!
  }

  input runContractFunctionInput {
    chain: String
    subdomain: String
    providerUrl: String
    function_name: String!
    address: String!
  }

  type Query {
    getBlock(input: getBlockInput!): block
    getDateToBlock(input: getDateByBlockInput!): blockDate
    getLogsByAddress(input: getLogsByAddressInput!): logEventByAddress
    getNFTTransfersByBlock(
      input: getNFTTransfersByBlockInput!
    ): nftTransferCollection
    getTransaction(input: getTransactionInput!): blockTransaction
  }

  type Mutation {
    getContractEvents(input: getContractEventsInput!): [logEvent]
    runContractFunction(input: runContractFunctionInput!): String
  }
`;

module.exports = typeDefs;
