'use strict';
let lz4 = require('lz4');

exports.decompress = function decompress(compressedBuffer, decompressedBuffer) {
    lz4.decodeBlock(compressedBuffer, decompressedBuffer);
};

exports.compress = function compress(decompressedBuffer, compressedBuffer) {
    lz4.encodeBlock(decompressedBuffer, compressedBuffer);
};
