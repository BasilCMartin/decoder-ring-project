const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests written by me", ()=> {
    describe("error handling", ()=> {
        it("returns false if the shift value is equal to 0", ()=>{
            const message= "rocker rolling"
            const shift = 0
            const actual = caesar(message, shift);
            expect(actual).to.be.false
        })
        it("returns false if the shift value is less than negative 25", ()=>{
        const message = "rockering rollering"
        const shift = -26
        const actual = caesar(message, shift)
        expect(actual).to.be.false})
        it("returns false if the shift value is greater than 25", ()=>{
            const message = "livin thing"
            const shift = 26
            const actual = caesar(message,shift)
            expect(actual).to.be.false
        })
        it("should return false if there is no shift value",()=>{
            const message = "i love rock and roll"
            const actual = caesar(message)
            expect(actual).to.be.false
        })
    })
    describe("encoding and decoding properties", ()=> {
        it("ignores capital letters", ()=>{
            const message = "ROCkeR RRRROllliNg"
            const shift = 6
            const actual = caesar(message,shift)
            const expected = "xuiqkx xxxxurrrotm"
            expect(actual).to.equal(expected)
        })
        it("should loop around the end of the alphabet",()=>{
            const message = "ZZ top"
            const shift = 6
            const actual = caesar(message, shift)
            const expected = "ff zuv"
            expect(actual).to.equal(expected)
        })
        it("should accept negative values that loop around the front of the alphabet", ()=>{
            const message = "AA rock"
            const shift = -6
            const actual = caesar(message, shift)
            const expected = "uu liwe"
            expect(actual).to.equal(expected)
        })
        it("should maintain spaces and other nonalphabetic symbols",()=>{
            const message = "Z.Z. Top"
            const shift = 5
            const actual = caesar(message, shift)
            const expected = "e.e. ytu"
            expect(actual).to.equal(expected)
        })
        it("should maintain spaces and nonalphabetic characters when decoding as well", ()=>{
            const message = "cash$ money?"
            const shift = 5
            const actual = caesar(message,shift, false)
            const expected = "xvnc$ hjizt?"
            expect(actual).to.equal(expected)
        })
    })
})
// It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.



// It ignores capital letters. (For example, the results of A Message and a message should be the same.)

// When encoding, it handles shifts that go past the end of the alphabet.
// (For example, shifting z to the right by 3 should cause the z to wrap around
// to the front of the alphabet, so that z becomes c.)

// It maintains spaces and other nonalphabetic symbols in the message,
// before and after encoding or decoding.