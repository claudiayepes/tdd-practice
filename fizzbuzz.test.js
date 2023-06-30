const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", ()=>{
    test("should print 1 if they receive 1", ()=>{
        //Lo que se espera recibir
        const expected = 1;
        //lo que recibimos
        const result= fizzbuzz(1);
        //Comprobación de lo que esperamos
        expect(expected).toBe(result);
    });

    test("should print fizz if they receive 3", ()=>{
        const expected = "fizz";
        const result= fizzbuzz(3);
        expect(expected).toBe(result);
    })

    test("should print fizz if they receive is multiple of 3", ()=>{
        const expected = "fizz";
        const result = fizzbuzz(6);
        expect(expected).toBe(result);
    })

    test("should print buzz if they receive is multiple of 5", ()=>{
        const expected = "buzz";
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    })

    test("should print fizzbuzz if they receive is multiple of 3 and 5", ()=>{
        const expected = "fizzbuzz";
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })
});