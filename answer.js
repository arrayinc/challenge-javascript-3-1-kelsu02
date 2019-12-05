// *** YOUR ANSWER BELOW ***

function beerCountDown(number) {
    let count = number;
    for (let i = number; i > 0; i--) {
        if (count > 2) {
            console.log(`${count} bottles of beer on the wall.`);
            console.log(`${count} bottles of beer.`);
            count -= 1;
            console.log(`You take one down, pass it around. ${count} bottles of beer on the wall.`);
        }  else {
            switch (count >= 1) {

                case count === 2:
                    console.log(`${count} bottles of beer on the wall.`);
                    console.log(`${count} bottles of beer.`);
                    count -= 1;
                    console.log(`You take one down, pass it around. ${count} bottle of beer on the wall.`);
                    break;

                case count === 1:
                    console.log(`${count} bottle of beer on the wall.`);
                    console.log(`${count} bottle of beer.`);
                    count -= 1;
                    console.log(`You take one down, pass it around. ${count} bottles of beer on the wall.`);
                    break;

                default: 
                    console.log("In heaven there is no beer");
                    break;
            }
        }
    }
    console.log("You need to go to the store.");
}

beerCountDown(6);