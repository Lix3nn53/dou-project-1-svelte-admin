/*
 *
 * Util functions to convert hex color palatte to rgb for custom tailwind colors
 *
 */

const colorNames = ['base', 'primary', 'secondary', 'danger'];
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

function hexArrayToRgb(hexArray) {
	let colorIndex = 0;
	let nameIndex = 0;

	hexArray.forEach((element) => {
		const rgb = hexToRgb(element);
		console.log(`--color-${colorNames[colorIndex]}-${indexNames[nameIndex]}: ${rgb}`);
		nameIndex++;
		if (nameIndex > 9) {
			nameIndex = 0;
			colorIndex++;
		}
	});
}

const myArray = [
	'#dcdce1',
	'#d1d2d8',
	'#bbbdc5',
	'#a5a9b3',
	'#8f95a0',
	'#79828d',
	'#616a72',
	'#4a5256',
	'#32393b',
	'#1b1f1f',
	'#ccc8ef',
	'#bebbeb',
	'#a39fe3',
	'#8783db',
	'#6b68d3',
	'#4e4ccb',
	'#3534b5',
	'#2a2c91',
	'#20226d',
	'#15184a',
	'#dee0ae',
	'#d6dba1',
	'#c3d187',
	'#adc76e',
	'#94bd54',
	'#77ab42',
	'#5e9539',
	'#487f31',
	'#356928',
	'#255320',
	'#efe3d7',
	'#e8d5c6',
	'#dbb4a6',
	'#ce8c85',
	'#c1646b',
	'#b04760',
	'#973d61',
	'#7d325d',
	'#642854',
	'#4a1e46'
];

hexArrayToRgb(myArray);
