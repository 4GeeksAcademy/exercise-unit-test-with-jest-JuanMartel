// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (eur) => {
    const result = eur*oneEuroIs["USD"];
    return parseFloat(result.toFixed(3));
    
}
const fromDollarToYen = (dol) => {
    const euro = dol / oneEuroIs['USD'];
    return result = euro * oneEuroIs['JPY'];
};

const fromYenToPound = (yen) => {
    const euro = yen / oneEuroIs['JPY'];
    return result = euro * oneEuroIs['GBP'];
    
};


console.log(fromEuroToDollar(1))
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1))

module.exports = { oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound, };
