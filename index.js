// 1
const fan = {
    nameBrand: 'GFC Fan',
    fanPrice: 3000,
    isSpinning: true,
    fanQuality: { made: 'Pakistan', imported: 'RFL Company' },
    fanColor: ['Black', 'Blue', 'Violet', 'Red'],
    fanRideing: function () {
        console.log('true')
    }
};
// 2
const fanDetails = `
    This Fan Name: ${fan.nameBrand}.This price: ${fan.fanPrice}.
    This Fan Quality: ${fan.fanQuality.imported},
    This Fan Color: ${fan.fanColor[1]}.
`;
// console.log(fanDetails);
// 3
// 3.1
const feedback = () => 89;
// console.log(feedback());
// 3.2
const dividing = (number) => number / 17;
// console.log(dividing(119));
// 3.3
const paraMeter2 = (num1, num2) => (num1 + num2) / 2;
// console.log(paraMeter2(2, 2));

//3.4

const multilineArrow = (num1, num2) => {
    const addparams1 = num1 + 7;
    const addparams2 = num2 + 7;
    return addparams1 + addparams2;
}
// console.log(multilineArrow(3, 3));
// 4

const arrs = [7, 14, 21, 28, 35, 42, 56];

const divisiblenumbers7 = arrs.map(divisible7 => divisible7 / 7);
// console.log(divisiblenumbers7);

// 5 destructring object

const { nameBrand, fanPrice, isSpinning } = fan;
// console.log(nameBrand, fanPrice, isSpinning);

//6

const arr = ['Black', 'Blue', 'Violet', 'Red'];
const [, blue] = arr;
// console.log(blue)

