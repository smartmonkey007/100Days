import * as data from './data/day11';
import { Options } from './data/day11';

function boardPlane(seats: Options[][]) {
    const orgSeats = [...seats].map(col => [...col])

    for (let ri = 0; ri < seats.length; ri++) {
        for (let ci = 0; ci < seats[ri].length; ci++) {
            if (!checkSit(seats, ri, ci)) {
                if (checkMove(seats, ri, ci)) {
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

function checkSit(seats: Options[][], ri: number, ci: number) {
    if (seats[ri][ci] === '#') {
        return false;
    }

    if (seats[ri][ci] === '.') {
        return false;
    }

    if (ci !== 0) {
        if (seats[ri][ci - 1] === '.') {
            return true;
        }

        if (seats[ri][ci - 1] === 'L') {
            return true;
        }
    } else {
        return true;
    }

    return false;
}

function checkMove(seats: Options[][], ri: number, ci: number) {
    if (seats[ri][ci] !== '#' || seats[ri][ci] === '.') {
        return false;
    }

    let adj = 0;
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

    return adj >= 4 ? true : false;
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

}
