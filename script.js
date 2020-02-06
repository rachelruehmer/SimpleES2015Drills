let favMovie = (movie = "Pan's Labyrinth", name = "Rachel") => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie();

let getFirstName = (pizza) => console.log(pizza.split(' ', [1]))
let getFirstNameConcise = (pizza) => console.log(pizza.split(' ', [1]))
getFirstNameConcise("Rachel Ruehmer");
getFirstName("Rachel Ruehmer");

let objectLiteral = (a, b) => {
    obj = {
        exponent: a ** b,
        product: a * b,
    }
    console.log(`The exponent of ${a} and ${b} is ${obj.exponent} so the product is ${objectLiteral.product}`)
}
objectLiteral(10, 20)

let aboutMe = (name, location, favFood) => console.log(`${name},${location},${favFood}`);
aboutMe('Rachel', 'Birmingham', 'Hot Chicken')

let spreadArr = [1, 2, 3, 4, 5];

console.log(...spreadArr);

let myName = 'Rachel';

function hello(name) {
    console.log(name.split(''))
}
hello(myName)