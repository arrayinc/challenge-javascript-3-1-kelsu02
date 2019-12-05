// *** YOUR ANSWER BELOW ***

function beerCountDown(number) {
    let count = number;
    for (let i = number; i > 0; i--) {
        console.log(`${count} bottles of beer on the wall.`);
        console.log(`${count} bottles of beer.`);
        count -= 1;
        if (count > 0) {
            console.log(`You take one down, pass it around. ${count} bottles of beer on the wall.`);
        } else {
            console.log(`You take one down, pass it around. No bottles of beer on the wall.`);
        }
    }
}

beerCountDown(4);