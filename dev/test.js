const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'flaskdjhflkjahsdflashdflkuahsdf';
const currentBlockData = [
    {
        amount: 20,
        sender: 'NEWfshdlkjfahsljdfhsldfj',
        recipient: 'sdfljsdkljfhsdkjfhsdjf'
    },
    {
        amount: 40,
        sender: 'sdflkjsdlkfjlskdjflkjsdf',
        recipient: 'lkjsdflkjslkdjflksdf'
    },
    {
        amount: 5000,
        sender: 'lkashdfkljhwehrjklfelwf',
        recipient: 'flsdjflksjdflkshdfliwehl'
    }
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// bitcoin.createNewBlock(
//     2345,
//     'flasdhfakfjdkjfkdskdjhfalksdhfasdf',
//     'fakdsfalksdhflakshdfkljashdflka'
// );

// bitcoin.createNewTransaction(
//     100,
//     'BENfsdiflasdjkfhkkhkjhjhgsdjfhsdjk',
//     'FRANdfskldjflksdfipisduofsdkfjslkd'
// );

// bitcoin.createNewBlock(
//     7879,
//     'sdfjhaksjdhflaksjhdflkjajshdf',
//     'lsjdfljsdlfkjsdjkfhskjf'
// );

// bitcoin.createNewTransaction(
//     50,
//     'JOEfsdiflasdjkfhkkhkjhjhgsdjfhsdjk',
//     'DANdfskldjflksdfipisduofsdkfjslkd'
// );

// bitcoin.createNewTransaction(
//     200,
//     'BOLAfsdiflasdjkfhkkhkjhjhgsdjfhsdjk',
//     'TAYOdfskldjflksdfipisduofsdkfjslkd'
// );

// bitcoin.createNewTransaction(
//     2500,
//     'INTELfsdiflasdjkfhkkhkjhjhgsdjfhsdjk',
//     'VINCENTdfskldjflksdfipisduofsdkfjslkd'
// );

// bitcoin.createNewBlock(
//     789,
//     'lsdfjalkjsdfjkahsdkjfhkajshdfkjhas',
//     'kjhaskdjfhkjsdhfkjadshkjfhasjdasdf'
// );

// console.log(bitcoin);
