const words = [
    ["Badzo", "Very"],
    ["Tak", "Yes"],
    ["Dobre", "Good"],
    ["Jak", "How"],
    ["Ja", "I"],
];
let Arraylength = words.length;
let x = words[Math.floor((Math.random()*words.length))];
let value = x[0]
let value2 = x[1]

console.log();

document.getElementById('word').innerHTML = value;
document.getElementById('bottom').innerHTML = value2;

