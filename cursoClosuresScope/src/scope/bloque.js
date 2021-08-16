const fruta = () => {
    if (true) {
        var fruta1 = "apple";
        let fruta2 = "banana";
        const fruta3 = "kiwi";
        console.log(fruta2);
        console.log(fruta3);
    }
    console.log(fruta1);
    
};

fruta();

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

const otra = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

otra();