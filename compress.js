'use strict';
let lz4 = require('lz4');

exports.decompress = function decompress(compressedBuffer, decompressedBuffer) {
    lz4.decodeBlock(compressedBuffer, decompressedBuffer);
};

exports.compress = function compress(decompressedBuffer) {
    let compressedBuffer = new Buffer(lz4.encodeBound(decompressedBuffer.length));
    let compressedSize = lz4.encodeBlock(decompressedBuffer, compressedBuffer);
    compressedBuffer = compressedBuffer.slice(0, compressedSize);
    return compressedBuffer;
};
