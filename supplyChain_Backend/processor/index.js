const { TransactionProcessor } = require('sawtooth-sdk/processor')

const SupplyChainHandler = require('./handler')
const env = require('../shared/env')

const transactionProcessor = new TransactionProcessor(env.validatorUrl)

transactionProcessor.addHandler(new SupplyChainHandler())
transactionProcessor.start()

console.log(`Starting SupplyChainHandler processor`)
console.log(`Connecting to Sawtooth validator at ${env.validatorUrl}`)