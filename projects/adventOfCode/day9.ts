import * as data from './data/day9';

function processData(data: number[], depth: number) {
    let violation = null;
    for (let index = depth; index < data.length; index++) {
        let eData = data.slice(index - depth, index);
        if (!checkCipher(eData.pop() || 0, eData, data[index])) {
            violation = data[index];
            break;
        }
    }
    return violation;
}

function checkCipher(evalNumber: number, data: number[], minVal: number): boolean {
    let validated = false;
    for (const num of data) {
        if (minVal === num + evalNumber) {
            validated = true;
            break;
        }
    }


    if (!validated && data.length > 1) {
        let eData = [...data];
        validated = checkCipher(eData.pop() || 0, eData, minVal);
    }

    return validated;
}

function findCipherNumber(target: number, code: number[]) {

    let cr = findCipherRange(target, code);
    while (!cr.found) {
        code.shift();
        cr = findCipherRange(target, code);
    }

    if (cr.found) {
        let total = Math.min(...code.slice(0, cr.count)) + Math.max(...code.slice(0, cr.count));

        return { total, cr, code};
    }

    return null;
}

function findCipherRange(target: Number, code: number[]) {
    let total = 0;
    let count = 0;
    for (const codeVal of code) {
        total += codeVal;
        count++;
        if (total >= target) {
            break;
        }
    }
    return { found: total === target, total, count };
}


if (require.main === module) {
    console.log(`sample data: `, processData(data.sampleData, 5));
    console.log(`puzzle data: `, processData(data.puzzle1, 25));
    console.log('sample data: ', findCipherNumber(127, data.sampleData));
    console.log('sample data: ', findCipherNumber(552655238, data.puzzle1));
    //127, -- 552655238

}