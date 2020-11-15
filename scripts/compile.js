const fs = require('fs-extra');
const path = require('path');
const solc = require('solc');

//1. cleanup
const compilerDir = path.resolve(__dirname, '../compiled');
fs.removeSync(compilerDir);
fs.ensureDirSync(compilerDir);

// 2. search all contracts
const contractFiles = fs.readdirSync(path.resolve(__dirname, '../contracts'));
contractFiles.forEach(contractFile => {
    //2.1 compile
    const contractPath = path.resolve(__dirname, '../contracts', contractFile);
    const contractSource = fs.readFileSync(contractPath, 'utf8');
    const result = solc.compile(contractSource, 1);
    console.log(`file compiled: ${contractFile}`);
    // console.log(result);

    // 2.2 check errors rather than show them in console directly
    if (Array.isArray(result.errors) && result.errors.length) {
        throw new Error(result.errors[0]);
    }

    //2.3 save to disk
    Object.keys(result.contracts).forEach(name => {
        const contractName = name.replace(/^:/, '');
        // const filePath = path.resolve(__dirname, '../compiled', `${contractName}.json`);
        const filePath = path.resolve(compilerDir, `${contractName}.json`)
        fs.outputJsonSync(filePath, result.contracts[name]);
        console.log(`save compiled contract ${contractName} to ${filePath}`);
    });
});
