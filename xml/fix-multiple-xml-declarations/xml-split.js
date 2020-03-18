#!/usr/bin/env node
const assert = require('assert');
const path = require('path');
const fs = require('fs');
const regex = /<\?xml version="1\.0" encoding="UTF-8"\?>/;
const tsFile = async (filename, outdir) => {
    const buffer = await fs.promises.readFile(filename);
    const parsedPath = path.parse(filename);
    const ps = buffer
        .toString()
        .split(regex)
        .filter(part => part)
        .map((v, i) => fs.promises.writeFile(`${outdir}/${parsedPath.name}_${i}${parsedPath.ext}`, '<?xml version="1.0" encoding="UTF-8"?>' + v));
    return Promise.all(ps).catch(err => console.error(err));
}
const ls = dir => fs.promises.readdir(dir)
const run = async (dir, outputDir) => {
    const files = await ls(dir);
    console.log('files', files);
    await Promise.all(files.map(f => tsFile(`${dir}/${f}`, outputDir)))
    process.exit(0);
}
const [_, _i, source, output] = process.argv;
console.log(process.argv);
assert(source, 'Missing source directory: ex ./xmlerror');
assert(output, 'Missing  output directory: ex ./xmlfiles');
run(source, output);