
module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar () => {
    return eur*oneEuroIs*fromEuroToDollar("USD")
}




