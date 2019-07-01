const env = require('../shared/env');
var { _hashforpayload } = require("../shared/Addressing");
const cbor = require('cbor')
const { protobuf } = require('sawtooth-sdk')
const KeyManager = require('./keymanager');
const { protobuff } = require('./payload');

const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

function prepareTransactions(payload, email) {
    if (payload != null) {
        var keyManager = new KeyManager();
        console.log("prepareTransaction", payload);
        var tempUserPublicKey = keyManager.readpublickey(email)
        protopayload = protobuff(payload);
        console.log("protopayload", protopayload)
        const payloadBytes = cbor.encode(protopayload)
        const transactionHeaderBytes = protobuf.TransactionHeader.encode({
            familyName: env.familyName,
            familyVersion: env.familyVersion,
            inputs: ['f6aa54'],
            outputs: ['f6aa54'],
            signerPublicKey: tempUserPublicKey,
            batcherPublicKey: tempUserPublicKey,
            dependencies: [],
            payloadSha512: _hashforpayload(payloadBytes),
            nonce: (new Date()).toString()
        }).finish()

        const signature = keyManager.sign(transactionHeaderBytes, email);

        const transaction = protobuf.Transaction.create({
            header: transactionHeaderBytes,
            headerSignature: signature,
            payload: payloadBytes
        })

        const transactions = [transaction]

        const batchHeaderBytes = protobuf.BatchHeader.encode({
            signerPublicKey: tempUserPublicKey,
            transactionIds: transactions.map((txn) => txn.headerSignature),
        }).finish()

        headerSignature = keyManager.sign(batchHeaderBytes, email);

        const batch = protobuf.Batch.create({
            header: batchHeaderBytes,
            headerSignature: headerSignature,
            transactions: transactions
        })

        // Batch Transactions

        // var applicationPublicKey = keyManager.readpublickey(env.familyName)

        // const payloadBytes1 = cbor.encode(payload1)
        // const transactionHeaderBytes1 = protobuf.TransactionHeader.encode({
        //     familyName: env.familyName,
        //     familyVersion: env.familyVersion,
        //     inputs: ['f6aa54'],
        //     outputs: ['f6aa54'],
        //     signerPublicKey: tempUserPublicKey,
        //     batcherPublicKey: applicationPublicKey,
        //     dependencies: [],
        //     payloadSha512: _hashforpayload(payloadBytes1),
        //     nonce: (new Date()).toString()
        // }).finish()

        // const transactionHeaderSignature = keyManager.sign(transactionHeaderBytes1, email);

        // const transaction1 = protobuf.Transaction.create({
        //     header: transactionHeaderBytes1,
        //     headerSignature: transactionHeaderSignature,
        //     payload: payloadBytes1
        // })


        // const payloadBytes2 = cbor.encode(payload2)
        // const transactionHeaderBytes2 = protobuf.TransactionHeader.encode({
        //     familyName: env.familyName,
        //     familyVersion: env.familyVersion,
        //     inputs: ['f6aa54'],
        //     outputs: ['f6aa54'],
        //     signerPublicKey: tempUserPublicKey,
        //     batcherPublicKey: applicationPublicKey,
        //     dependencies: [],
        //     payloadSha512: _hashforpayload(payloadBytes2),
        //     nonce: (new Date()).toString()
        // }).finish()

        // const transactionHeaderSignature2 = keyManager.sign(transactionHeaderBytes2, email);

        // const transaction2 = protobuf.Transaction.create({
        //     header: transactionHeaderBytes2,
        //     headerSignature: transactionHeaderSignature2,
        //     payload: payloadBytes2
        // })

        // const transactions = [transaction1, transaction2]

        // const batchHeaderBytes = protobuf.BatchHeader.encode({
        //     signerPublicKey: applicationPublicKey,
        //     transactionIds: transactions.map((txn) => txn.headerSignature),
        // }).finish()

        // batchheaderSignature = keyManager.sign(batchHeaderBytes, env.familyName);

        // const batch = protobuf.Batch.create({
        //     header: batchHeaderBytes,
        //     headerSignature: batchheaderSignature,
        //     transactions: transactions
        // })


        // end of batch Transactions

        const batchListBytes = protobuf.BatchList.encode({
            batches: [batch]
        }).finish()

        return batchListBytes;
    }
    //  else {

    // }
}



function prepareBatchTransactions(email, ...payload) {
    let transactions = [];
    var keyManager = new KeyManager();
    var tempUserPublicKey = keyManager.readpublickey(email)
    var applicationPublicKey = keyManager.readpublickey(env.familyName)

    payload.array.forEach(element => {

        const payloadBytes = cbor.encode(element)
        const transactionHeaderBytes = protobuf.TransactionHeader.encode({
            familyName: env.familyName,
            familyVersion: env.familyVersion,
            inputs: ['f6aa54'],
            outputs: ['f6aa54'],
            signerPublicKey: tempUserPublicKey,
            batcherPublicKey: applicationPublicKey,
            dependencies: [],
            payloadSha512: _hashforpayload(payloadBytes),
            nonce: (new Date()).toString()
        }).finish()

        const transactionHeaderSignature = keyManager.sign(transactionHeaderBytes, email);

        const transaction = protobuf.Transaction.create({
            header: transactionHeaderBytes,
            headerSignature: transactionHeaderSignature,
            payload: payloadBytes
        })
        transactions.push(transaction);
    });

    const batchHeaderBytes = protobuf.BatchHeader.encode({
        signerPublicKey: applicationPublicKey,
        transactionIds: transactions.map((txn) => txn.headerSignature),
    }).finish()

    batchheaderSignature = keyManager.sign(batchHeaderBytes, env.familyName);

    const batch = protobuf.Batch.create({
        header: batchHeaderBytes,
        headerSignature: batchheaderSignature,
        transactions: transactions
    })

    const batchListBytes = protobuf.BatchList.encode({
        batches: [batch]
    }).finish()

    return batchListBytes;
}

module.exports = { prepareTransactions, prepareBatchTransactions };