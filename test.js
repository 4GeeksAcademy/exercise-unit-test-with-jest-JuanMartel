test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);
    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBe(expected);
});

test("One yen should be 0.00556 pounds", function() {
    const { fromYenToPound, oneEuroIs } = require('./app.js');
    const pounds = fromYenToPound(1);
    const expected = (1 / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    expect(fromYenToPound(1)).toBe(expected);
});