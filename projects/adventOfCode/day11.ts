import * as data from './data/day11';
import { Options } from './data/day11';

function boardPlane(seats: Options[][], maxVision = false, occupyLimit = 4) {
    const orgSeats = [...seats].map(col => [...col])

    for (let ri = 0; ri < seats.length; ri++) {
        for (let ci = 0; ci < seats[ri].length; ci++) {
            if (!checkSit(seats, ri, ci, maxVision)) {
                if (checkMove(seats, ri, ci, occupyLimit, maxVision)) {
                    orgSeats[ri][ci] = 'L';
                }
            } else {
                orgSeats[ri][ci] = '#';
            }
        }
    }
    return orgSeats;
}

function deepEqual(orgSeats, seats) {
    let equal = true;
    for (let ri = 0; ri < seats.length; ri++) {
        for (let ci = 0; ci < seats[ri].length; ci++) {
            if (orgSeats[ri][ci] !== seats[ri][ci]) {
                equal = false;
                break;
            }
        }
        if (!equal) {
            break;
        }
    }

    return equal;
}

function checkSit(seats: Options[][], ri: number, ci: number, maxVision: boolean) {
    if (seats[ri][ci] === '#') {
        return false;
    }

    if (seats[ri][ci] === '.') {
        return false;
    }

    if (maxVision) {
        if (maxVisionCheck(seats, ri, ci) === 0) {
            return true;
        }
    } else {
        if (checkAdj(seats, ri, ci, maxVision) === 0) {
            return true;
        }
    }

    return false;
}

function maxVisionCheck(seats: Options[][], ri: number, ci: number) {
    let count = 0;
    count += checkTL(seats, ri, ci) ? 1 : 0;
    count += checkT(seats, ri, ci) ? 1 : 0;
    count += checkTR(seats, ri, ci) ? 1 : 0;
    count += checkL(seats, ri, ci) ? 1 : 0;
    count += checkR(seats, ri, ci) ? 1 : 0;
    count += checkBL(seats, ri, ci) ? 1 : 0;
    count += checkB(seats, ri, ci) ? 1 : 0;
    count += checkBR(seats, ri, ci) ? 1 : 0;

    return count;
}

function checkTL(seats: Options[][], ri: number, ci: number) {
    let result = null;
    ri -= 1;
    ci -= 1;
    if (ri === -1 || ci === -1) {
        return false;
    }

    if (seats[ri][ci] === '#') {
        return true;
    }

    if (seats[ri][ci] === 'L') {
        return false;
    }


    if (seats[ri][ci] === '.') {
        return checkTL(seats, ri, ci);
    }

    return result;
}

function checkT(seats: Options[][], ri: number, ci: number) {
    let result = null;
    ri -= 1;
    if (ri === -1 || ci === -1) {
        return false;
    }

    if (seats[ri][ci] === '#') {
        return true;
    }

    if (seats[ri][ci] === 'L') {
        return false;
    }

    if (seats[ri][ci] === '.') {
        return checkT(seats, ri, ci);
    }

    return result;
}

function checkTR(seats: Options[][], ri: number, ci: number) {
    let result = null;
    ri -= 1;
    ci += 1;
    if (ri === -1 || ci === seats[ri].length) {
        return false;
    }

    if (seats[ri][ci] === '#') {
        return true;
    }

    if (seats[ri][ci] === 'L') {
        return false;
    }


    if (seats[ri][ci] === '.') {
        return checkTR(seats, ri, ci);
    }

    return result;
}

function checkL(seats: Options[][], ri: number, ci: number) {
    let result = null;
    ci -= 1;
    if (ri === -1 || ci === -1) {
        return false;
    }

    if (seats[ri][ci] === '#') {
        return true;
    }

    if (seats[ri][ci] === 'L') {
        return false;
    }


    if (seats[ri][ci] === '.') {
        return checkL(seats, ri, ci);
    }

    return result;
}

function checkR(seats: Options[][], ri: number, ci: number) {
    let result = null;
    ci += 1;
    if (ri === -1 || ci === seats[ri].length) {
        return false;
    }

    if (seats[ri][ci] === '#') {
        return true;
    }

    if (seats[ri][ci] === 'L') {
        return false;
    }


    if (seats[ri][ci] === '.') {
        return checkR(seats, ri, ci);
    }

    return result;
}

function checkBL(seats: Options[][], ri: number, ci: number) {
    let result = null;
    ri += 1;
    ci -= 1;
    if (ri === seats.length || ci === -1) {
        return false;
    }

    if (seats[ri][ci] === '#') {
        return true;
    }

    if (seats[ri][ci] === 'L') {
        return false;
    }


    if (seats[ri][ci] === '.') {
        return checkBL(seats, ri, ci);
    }

    return result;
}

function checkB(seats: Options[][], ri: number, ci: number) {
    let result = null;
    ri += 1;
    if (ri === seats.length || ci === -1) {
        return false;
    }

    if (seats[ri][ci] === '#') {
        return true;
    }

    if (seats[ri][ci] === 'L') {
        return false;
    }


    if (seats[ri][ci] === '.') {
        return checkB(seats, ri, ci);
    }

    return result;
}

function checkBR(seats: Options[][], ri: number, ci: number) {
    let result = null;
    ri += 1;
    ci += 1;
    if (ri === seats.length || ci === seats[ri].length) {
        return false;
    }

    if (seats[ri][ci] === '#') {
        return true;
    }

    if (seats[ri][ci] === 'L') {
        return false;
    }


    if (seats[ri][ci] === '.') {
        return checkBR(seats, ri, ci);
    }

    return result;
}

function checkAdj(seats: Options[][], ri: number, ci: number, maxVision) {
    let adj = 0;
    if (maxVision) {
        return maxVisionCheck(seats, ri, ci);
    }
    if (ci > 0) {
        adj += seats[ri][ci - 1] === '#' ? 1 : 0;
    }
    if (ci < seats[ri].length - 1) {
        adj += seats[ri][ci + 1] === '#' ? 1 : 0
    }

    if (ri > 0) {
        adj += seats[ri - 1][ci] === '#' ? 1 : 0;
        if (ci > 0) {
            adj += seats[ri - 1][ci - 1] === '#' ? 1 : 0;
        }
        if (ci < seats[ri - 1].length - 1) {
            adj += seats[ri - 1][ci + 1] === '#' ? 1 : 0
        }
    }

    if (ri < seats.length - 1) {
        adj += seats[ri + 1][ci] === '#' ? 1 : 0;
        if (ci > 0) {
            adj += seats[ri + 1][ci - 1] === '#' ? 1 : 0;
        }
        if (ci < seats[ri + 1].length - 1) {
            adj += seats[ri + 1][ci + 1] === '#' ? 1 : 0
        }
    }

    return adj;
}

function checkMove(seats: Options[][], ri: number, ci: number, occupyLimit: number, maxVision) {
    if (seats[ri][ci] !== '#' || seats[ri][ci] === '.') {
        return false;
    }

    return checkAdj(seats, ri, ci, maxVision) >= occupyLimit ? true : false;
}

function countSeats(seats: Options[][]) {
    return seats.reduce((p, n) => {
        return p + n.filter(s => s === '#').length;
    }, 0);

}

function deepCopy(seats) {
    return [...seats].map(col => [...col]);
}


if (require.main = module) {
    let solution = boardPlane(data.sample);
    console.log(deepEqual(solution, data.sampleI2))

    solution = boardPlane(solution);
    console.log(deepEqual(solution, data.sampleI3))

    solution = boardPlane(solution);
    console.log(deepEqual(solution, data.sampleI4))

    solution = boardPlane(solution);
    console.log(deepEqual(solution, data.sampleI5))

    solution = boardPlane(solution);
    console.log(deepEqual(solution, data.sampleI6))

    solution = boardPlane(data.puzzle);
    let orgSample = data.puzzle;
    while (!deepEqual(solution, orgSample)) {
        orgSample = solution;
        solution = boardPlane(solution);
    }

    console.log(countSeats(solution));

    solution = boardPlane(data.sample2, true, 5);
    console.log(deepEqual(solution, data.sample2I2));

    solution = boardPlane(solution, true, 5);
    console.log(deepEqual(solution, data.sample2I3));
    solution = boardPlane(solution, true, 5);
    console.log(deepEqual(solution, data.sample2I4));
    solution = boardPlane(solution, true, 5);
    console.log(deepEqual(solution, data.sample2I5));
    solution = boardPlane(solution, true, 5);
    console.log(deepEqual(solution, data.sample2I6));





    solution = boardPlane(data.puzzle, true, 5);
    orgSample = data.puzzle;

    while (!deepEqual(solution, orgSample)) {
        orgSample = solution;
        solution = boardPlane(solution, true, 5);
    }

    console.log(countSeats(solution));



}
