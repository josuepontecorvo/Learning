const SHA256 = require("crypto-js/sha256");
class Block {
    constructor(index,timestamp,data,previoushash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previoushash = previoushash;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        return SHA256(JSON.stringify(this.data)+this.previoushash+this.index+this.timestamp).toString();
    }
}

class Blockchain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock (){
        return new Block (0,"01/01/2017","Genesis Block","0") ;
    }
    getLatestBlock() {
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock) {
        newBlock.previoushash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    
}

let chain1 = new Blockchain();
let trans1 = new Block(1,"10/05/2022","coin1");
chain1.addBlock(trans1);
let trans2 = new Block(2,"11/05/2022","coin2");
chain1.addBlock(trans2);
let trans3 = new Block(3,"12/05/2022","coin3");
chain1.addBlock(trans3);

console.log(chain1.chain);


