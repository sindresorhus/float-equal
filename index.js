export default function floatEqual(a, b) {
	if (a === b) {
		return true;
	}

	const diff = Math.abs(a - b);

	if (diff < Number.EPSILON) {
		return true;
	}

	return diff <= Number.EPSILON * Math.min(Math.abs(a), Math.abs(b));
}
