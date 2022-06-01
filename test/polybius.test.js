const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("polybius tests written by yours truly", ()=>{
    describe("encoding tests",()=>{
        it("When encoding, it translates the letters i and j to 42.",()=>{
            const message = "Jigglypuff"
            const actual = polybius(message)
            const expected = "42422222134553541212"
            expect(actual).to.equal(expected)

        })
        it("when encoding, ignores capital letters",()=>{
            const message = "PoPtArT"
            const actual = polybius(message)
            const expected = "53435344112444"
            expect(actual).to.equal(expected)

        })
        it("when encoding, maintains space in the message", ()=>{
            const message = "poptart the cat"
            const actual = polybius(message)
            const expected = "53435344112444 443251 311144"
            expect(actual).to.equal(expected)

        })
    })
        
    describe("decoding tests",()=>{
        it("When decoding, it translates 42 to (i/j).",()=>{
            const message = "42422222134553541212"
            const actual = polybius(message, false)
            const expected = "i/ji/jgglypuff"
            expect(actual).to.equal(expected)

        })
        it("when decoding, maintains the space in the message", ()=>{
            const message = "42 13431551 2345 311144 53435344112444"
            const actual = polybius(message, false)
            const expected = "i/j love my cat poptart"
            expect(actual).to.equal(expected)

        })
    })
})




// When encoding, it translates the letters i and j to 42.

// When decoding, it translates 42 to (i/j).

// It ignores capital letters. (For example, the results of A Message and a
//      message should be the same.)

// It maintains spaces in the message, before and after encoding or decoding.