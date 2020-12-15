import * as data from './data/day10';

class Day10 {

    static adapters = [1, 2, 3];

    constructor() { }


    static countConnections(ratings: number[]) {
        let connections: number[] = [];

        ratings = ratings.sort((a, b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            return 0;
        });
        console.log(ratings);
        let prevRating = 0;
        let ratingCount: number[] = [];
        for (let index = 0; index < ratings.length; index++) {
            let rating = ratings[index];
            let searchRatings = ratings.slice(index + 1);

            let continousCount = 1;
            for (let searchIndex = 0; searchIndex < searchRatings.length; searchIndex++) {
                let searchRating = searchRatings[searchIndex];
                if (searchRating - rating - searchIndex === 1) {
                    continousCount += 1;
                } else {
                    index += continousCount - 1;
                    if (((searchIndex + 1) / 3) > 1) {
                        continousCount -= Math.floor(searchIndex / 3);
                    }
                    break;
                }
            }
            if (continousCount > 1) {
                ratingCount.push(continousCount);
            }
        }
        return ratingCount
            .reduce((p, n, i) => {
                return p * n;
            }, 1) / ratingCount.length;
    }

    static checkConnections(ratings: number[]) {
        const connections = {} as any;

        ratings = ratings.sort((a, b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            return 0;
        });

        for (let index = 0; index < ratings.length; index++) {
            let rating = ratings[index];
            let searchRatings = ratings.slice(index);
            for (let searchIndex = 0; searchIndex < searchRatings.length; searchIndex++) {
                let searchRating = searchRatings[searchIndex];
                let connection = this.adapters.find(a => a === searchRating - rating);
                if (connection) {
                    connections[connection] = (connections[connection] || 1) + 1;
                    break;
                }
            }
        }
        return connections;
    }

    static validateConnections(connections: any) {
        return connections[1] * connections[3];
    }
}

if (require.main === module) {
    console.log(Day10.countConnections(data.example));
    console.log(Day10.countConnections(data.sample));
    // console.log(Day10.countConnections(data.puzzle));

    // console.log(Day10.checkConnections(data.sample));
    // console.log(Day10.validateConnections(Day10.checkConnections(data.sample)));

    // console.log(Day10.checkConnections(data.puzzle));
    // console.log(Day10.validateConnections(Day10.checkConnections(data.puzzle)));

}
