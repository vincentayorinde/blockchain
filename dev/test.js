const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(
    2345,
    'flasdhfakfjdkjfkdskdjhfalksdhfasdf',
    'fakdsfalksdhflakshdfkljashdflka'
);

bitcoin.createNewTransaction(
    100,
    'BENfsdiflasdjkfhkkhkjhjhgsdjfhsdjk',
    'FRANdfskldjflksdfipisduofsdkfjslkd'
);

bitcoin.createNewBlock(
    7879,
    'sdfjhaksjdhflaksjhdflkjajshdf',
    'lsjdfljsdlfkjsdjkfhskjf'
);

bitcoin.createNewTransaction(
    50,
    'JOEfsdiflasdjkfhkkhkjhjhgsdjfhsdjk',
    'DANdfskldjflksdfipisduofsdkfjslkd'
);

bitcoin.createNewTransaction(
    200,
    'BOLAfsdiflasdjkfhkkhkjhjhgsdjfhsdjk',
    'TAYOdfskldjflksdfipisduofsdkfjslkd'
);

bitcoin.createNewTransaction(
    2500,
    'INTELfsdiflasdjkfhkkhkjhjhgsdjfhsdjk',
    'VINCENTdfskldjflksdfipisduofsdkfjslkd'
);

bitcoin.createNewBlock(
    789,
    'lsdfjalkjsdfjkahsdkjfhkajshdfkjhas',
    'kjhaskdjfhkjsdhfkjadshkjfhasjdasdf'
);

console.log(bitcoin.chain[2]);
