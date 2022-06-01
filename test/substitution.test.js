const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("substitution tests by Basil Martin", ()=>{
    describe("error conditions",()=>{
        it("should return false if the alphabet isn't exactly 26 characters",()=>{
            const message = "hello"
            const alphabet = "tooshort"
            const actual = substitution(message, alphabet)
            expect(actual).to.be.false

        })
        it("should return false if there are any duplicate characters in the given alphabet",()=>{
            const message = "rush"
            const alphabet ="zzzzzzzzzzzzxxxxxxxxxxzzzz"
            const actual = substitution(message, alphabet)
            expect(actual).to.be.false
        })
    })
    describe("encoding and decoding conditions",()=>{
        it("correctly translates the phrase",()=>{
            const message = "rush"
            const alphabet = "plmoknijbuhvygctfxrdzeswaq"
            const actual = substitution(message, alphabet)
            expect(actual).to.equal("xzrj")

        })
        it("maintains space in the message when encoding",()=>{
            const message = "rush is tight"
            const alphabet = "plmoknijbuhvygctfxrdzeswaq"
            const actual = substitution(message, alphabet)
            expect(actual).to.equal("xzrj br dbijd")

        })
        it("maintains spaces when decoding",()=>{
            const message = "xzrj br dbijd"
            const alphabet = "plmoknijbuhvygctfxrdzeswaq"
            const actual = substitution(message, alphabet, false)
            expect(actual).to.equal("rush is tight")

        })
        it("ignores capital letters",()=>{
            const message = "RUSH is TIGHT"
            const alphabet = "plmoknijbuhvygctfxrdzeswaq"
            const actual = substitution(message, alphabet)
            expect(actual).to.equal("xzrj br dbijd")

        })
    })
})
// It returns false if the given alphabet isn't exactly 26 characters long.

// It correctly translates the given phrase, based on the alphabet given to the function.

// It returns false if there are any duplicate characters in the given alphabet.

// It maintains spaces in the message, before and after encoding or decoding.

// It ignores capital letters. (For example,
//      the results of A Message and a message should be the same.)