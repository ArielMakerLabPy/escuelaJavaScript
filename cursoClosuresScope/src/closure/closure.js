const moneyBox = (coin) => {
    var saveCoins = 0;
    saveCoins += coin;
    console.log(`MoneyBox: $${saveCoins}`);
};


const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coin) => {
        saveCoins += coin;
        console.log(`MoneyBox: $${saveCoins}`);
    };
    return countCoins;
};

let myMoneyBox = moneyBox2();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
