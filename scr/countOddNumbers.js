function countOddNumbers(input) {

    let oddNumbers = 0;

    input.forEach(num => {
        if (typeof num === `number` && num % 2 !== 0) {
            oddNumbers++;
        }
    })

    return oddNumbers;
};

module.exports = {
    countOddNumbers
};