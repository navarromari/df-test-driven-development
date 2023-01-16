const { assertEquals } = require(`../test-framework.js`);
const { Scrabble } = require(`../scr/Scrabble.js`);
function testScrabble() {
    //Setup
    const testCases = {
        test1: {
            input: '',
            expected: 0,
            logMessage: `returns 0 for empty words`
        },
        test2: {
            input: " \t\n",
            expected: 0,
            logMessage: `returns 0 for whitespace`
        },
        test3: {
            input: null,
            expected: 0,
            logMessage: `returns 0 for null`
        },
        test4: {
            input: 'a',
            expected: 1,
            logMessage: `scores short word`
        },
        test5: {
            input: 'f',
            expected: 4,
            logMessage: `scores short word`
        },
        test6: {
            input: 'street',
            expected: 6,
            logMessage: `scores a simple word`
        },
        test7: {
            input: 'quirky',
            expected: 22,
            logMessage: `scores a more complicated word`
        },
        test8: {
            input: 'OXYPHENBUTAZONE',
            expected: 41,
            logMessage: `scores a case-insensitive word`
        }

    }

    //Execute && Verify
    Object.entries(testCases).forEach(entry => {
        console.log(entry[1].logMessage);
        const actual = new Scrabble(entry[1].input).score();
        const result = assertEquals(actual, entry[1].expected);
        console.log(result);
    })

}

testScrabble();