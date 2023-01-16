class Scrabble {

    constructor(word) {
        this.word = word;
    }

    score() {
        let score = 0;
        if (typeof this.word != 'string') {
            return 0;
        }

        const letters = [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
        ['D', 'G'],
        ['B', 'C', 'M', 'P'],
        ['F', 'H', 'V', 'W', 'Y'],
        ['K'],
        ['J', 'X'],
        ['Q', 'Z']];

        const points = [1, 2, 3, 4, 5, 8, 10];

        for (let i = 0; i < this.word.length; i++) {
            for (let j = 0; j < letters.length; j++) {
                if (letters[j].includes(this.word[i].toUpperCase())) {
                    score += points[j];
                }
            }
        }

        return score;
    }
}
module.exports = {
    Scrabble
};