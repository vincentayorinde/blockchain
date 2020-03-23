var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const Blockchain = require('./blockchain');
const { uuid } = require('uuidv4');

const nodeAddress = uuid()
    .split('-')
    .join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', (req, res) => {
    res.send(bitcoin);
});

app.post('/transaction', (req, res) => {
    const blockIndex = bitcoin.createNewTransaction(
        req.body.amount,
        req.body.sender,
        req.body.recipient
    );
    res.json({
        message: `Transaction will be added in block ${blockIndex}.`
    });
});

app.get('/mine', (req, res) => {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastBlock['index']
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(
        previousBlockHash,
        currentBlockData,
        nonce
    );

    bitcoin.createNewTransaction(12.5, '00', nodeAddress);

    const newBlock = bitcoin.createNewBlock(
        nonce,
        previousBlockHash,
        blockHash
    );

    res.json({
        message: 'New Block Mined Successfully',
        block: newBlock
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
