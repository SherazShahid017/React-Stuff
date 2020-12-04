import '@testing-library/jest-dom'

describe ( "My First Test", () => {

    test.skip("Exact Equality", () => {
        expect(100+100).toBe(200);
    });
    
})