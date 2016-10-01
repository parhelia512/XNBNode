## XNBNode
Command line utility to extract and pack XNB files.

## Compression
XNB files that are created by MonoGame use the LZ4 compression algorithm.
This will not work on XNB files created using XNA, which uses a proprietary compression algorithm, LZX Delta and is not seemingly available on any UNIX like platforms.

## Usage
```
./node main.js extract input_dir output_dir
./node main.js extract input.xnb output.yaml

./node main.js pack input_dir output_dir
./node main.js pack input.yaml output.xml
```

