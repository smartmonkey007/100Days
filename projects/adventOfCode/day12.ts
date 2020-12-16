import * as data from './data/day12';

type Code = { action: string, value: number };
enum Dir { 'e', 's', 'w', 'n' };

function parseData(data: string): Code[] {
    return data.split('\n').map(d => {
        let action = d[0];
        let value = parseInt(d.substr(1));

        return { action, value };
    });
}

function changeDirection(currentDirection: Dir, degrees: number): Dir {
    if (degrees % 90 !== 0) {
        throw new Error('Unexpected degrees, do more work');
    }

    let cd = currentDirection;
    let cdi = (degrees / 90) + cd;
    cdi = cdi <= 3 ? cdi : cdi % 4;
    cdi = cdi >= -3 ? cdi : cdi % 4;
    cdi = cdi >= 0 ? cdi : 4 + cdi;
    return cdi;
}

function navigate(codes: Code[]) {
    let motion = { n: 0, e: 0, s: 0, w: 0, ns: 0, ew: 0 };
    let currentDirection: Dir = Dir.e
    codes.forEach(code => {
        if (code.action === 'F') {
            motion[Dir[currentDirection]] += code.value;
        }
        if (code.action === 'R') {
            currentDirection = changeDirection(currentDirection, code.value);
        }
        if (code.action === 'L') {
            currentDirection = changeDirection(currentDirection, -code.value);
        }

        if (['N', 'E', 'S', 'W'].includes(code.action)) {
            motion[code.action.toLowerCase()] += code.value;
        }

    });
    motion.ns = Math.abs(motion.n - motion.s);
    motion.ew = Math.abs(motion.e - motion.w);
    return motion;
}

function navigateWaypoints(codes: Code[]) {
    let motion = { n: 0, e: 0, s: 0, w: 0, ns: 0, ew: 0 };
    let waypoints = [{ dir: Dir.e, value: 10 }, { dir: Dir.n, value: 1 }];
    codes.forEach(code => {
        if (code.action === 'F') {
            motion[Dir[waypoints[0].dir]] += waypoints[0].value * code.value;
            motion[Dir[waypoints[1].dir]] += waypoints[1].value * code.value;
        }
        if (code.action === 'R') {
            waypoints[0].dir = changeDirection(waypoints[0].dir, code.value);
            waypoints[1].dir = changeDirection(waypoints[1].dir, code.value);
        }
        if (code.action === 'L') {
            waypoints[0].dir = changeDirection(waypoints[0].dir, -code.value);
            waypoints[1].dir = changeDirection(waypoints[1].dir, -code.value);
        }

        if (['N', 'E', 'S', 'W'].includes(code.action)) {
            let wp = waypoints.find(wp => Dir[wp.dir] === code.action.toLowerCase());
            if (wp) {
                wp.value += code.value;
            } else {
                const action = code.action.toLowerCase();
                if (action === 'e') {
                    let wp = waypoints.find(w => Dir[w.dir] === 'w');
                    if (wp) {
                        wp.value -= code.value;
                        if (wp.value < 0) {
                            wp.dir = Dir.e
                            wp.value = Math.abs(wp.value);
                        }
                    } else {
                        throw new Error('waypoint not found');
                    }
                }

                if (action === 'w') {
                    let wp = waypoints.find(w => Dir[w.dir] === 'e');
                    if (wp) {
                        wp.value -= code.value;
                        if (wp.value < 0) {
                            wp.dir = Dir.w
                            wp.value = Math.abs(wp.value);
                        }

                    } else {
                        throw new Error('waypoint not found');
                    }
                }

                if (action === 'n') {
                    let wp = waypoints.find(w => Dir[w.dir] === 's');
                    if (wp) {
                        wp.value -= code.value;
                        if (wp.value < 0) {
                            wp.dir = Dir.n
                            wp.value = Math.abs(wp.value);
                        }

                    } else {
                        throw new Error('waypoint not found');
                    }
                }

                if (action === 's') {
                    let wp = waypoints.find(w => Dir[w.dir] === 'n');
                    if (wp) {
                        wp.value -= code.value;
                        if (wp.value < 0) {
                            wp.dir = Dir.s
                            wp.value = Math.abs(wp.value);

                        }

                    } else {
                        throw new Error('waypoint not found');
                    }
                }
            }
        }

    });
    motion.ns = Math.abs(motion.n - motion.s);
    motion.ew = Math.abs(motion.e - motion.w);
    return motion;

}


if (require.main === module) {
    let codes = parseData(data.sample);
    console.table(navigate(codes));
    codes = parseData(data.puzzle);
    console.table(navigate(codes));
    console.log(`solution: ${navigate(codes).ew + navigate(codes).ns}`)

    console.table(navigateWaypoints(parseData(data.sample)));
    console.log(`solution: ${navigateWaypoints(codes).ew + navigateWaypoints(codes).ns}`)

    console.table(navigateWaypoints(parseData(data.puzzle)));
    console.log(`solution2: ${navigateWaypoints(codes).ew + navigateWaypoints(codes).ns}`)

}
