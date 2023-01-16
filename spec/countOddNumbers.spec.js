const { assertEquals } = require(`../test-framework.js`); //destructuring assignment
const { countOddNumbers } = require(`../scr/countOddNumbers.js`);
function testCountOddNumbers() {
    //Setup
    const testCases = {
        test1: {
            input: [1, 2, 3, 4, 5, 6],
            expected: 3,
            logMessage: `Test 1: [1,2,3,4,5,6] => 3`
        },
        test2: {
            input: [0, 1, 2],
            expected: 1,
            logMessage: `Test 2: [0,1,2] => 1`
        },
        test3: {
            input: [2, 4, 6],
            expected: 0,
            logMessage: `Test 3: [2,4,6] => 0`
        }
    }

    //Execute && Verify
    Object.entries(testCases).forEach(entry => {
        console.log(entry[1].logMessage);
        const actual = countOddNumbers(entry[1].input);
        const result = assertEquals(actual, entry[1].expected);
        console.log(result);
    })

}

testCountOddNumbers();