/*
 *
 * Util functions to convert hex color palatte to rgb for custom tailwind colors
 *
 */

const colorNames = ['base'];
const indexNames = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

function hexToRgb(hex) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');

		const res = [(c >> 16) & 255, (c >> 8) & 255, c & 255];

		return `${res[0]} ${res[1]} ${res[2]}`;
	}
	throw new Error('Bad Hex');
}

function hexArrayToRgb(hexArray, reverse) {
	let colorIndex = 0;
	let nameIndex = 0;
	const rgbArr = []; // for reverse

	hexArray.forEach((element) => {
		const rgb = hexToRgb(element);
		rgbArr.push(rgb);

		const tolog = `--color-${colorNames[colorIndex]}-${indexNames[nameIndex]}: ${rgb}`;
		console.log(tolog);
		nameIndex++;
		if (nameIndex > 9) {
			nameIndex = 0;
			colorIndex++;
		}
	});

	if (reverse) {
		colorIndex = 0;
		nameIndex = 0;

		for (let index = rgbArr.length - 1; index >= 0; index--) {
			const rgb = rgbArr[index];
			const tolog = `--color-${colorNames[colorIndex]}-${indexNames[nameIndex]}: ${rgb}`;
			console.log(tolog);
			nameIndex++;
			if (nameIndex > 9) {
				nameIndex = 0;
				colorIndex++;
			}
		}
	}
}

const myArray = [
	'#FAFAFA',
	'#E7E7E9',
	'#C2C2C8',
	'#9C9CA6',
	'#777783',
	'#55555E',
	'#44444B',
	'#333339',
	'#222226',
	'#111113'
];

hexArrayToRgb(myArray, true);
