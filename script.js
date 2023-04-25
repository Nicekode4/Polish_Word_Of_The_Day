const words = [
    ["Badzo", "Very"],
    ["Tak", "Yes"],
    ["Dobre", "Good"],
    ["Jak", "How"],
    ["Ja", "I"],
];

const word = [
    {
        polish: "Badzo",
        english: "Very",
        sentenceEnglish: "That is very good",
        sentencePolish: "To jest badzo dobre"

    }
]
let today = new Date();
let startOfYear = new Date(today.getFullYear(), 0, 0);
let diff = (today - startOfYear) + ((startOfYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
let oneDay = 1000 * 60 * 60 * 24;
let dayOfYear = Math.floor(diff / oneDay);

console.log(dayOfYear);


document.getElementById('word').innerHTML = word[0].polish;
document.getElementById('bottom').innerHTML = word[0].english;

