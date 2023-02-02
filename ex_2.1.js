function closestToZero(ts) {
	if (!ts.length) return 0;

	let closest = ts[0];
	for (let i = 1; i < ts.length; i++) {
		if (Math.abs(ts[i]) < Math.abs(closest) || (Math.abs(ts[i]) === Math.abs(closest) && ts[i] > 0)) {
			closest = ts[i];
		}
	}
	return closest;
}

let ts = [7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7];

console.log(closestToZero(ts));