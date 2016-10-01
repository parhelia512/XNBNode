'use strict';
let lz4 = require('lz4');

exports.decompress = function decompress(compressedBuffer, decompressedBuffer) {
    debugger;
    decompressedBuffer = lz4.decode(compressedBuffer);
};

exports.compress = function compress(decompressedBuffer) {
    return lz4.encode(decompressedBuffer);
};
