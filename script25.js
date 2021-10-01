//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.


const str = "This website is for losers LOL!"; //строка
const glass = "aeiouy"; //гласные
const res = str.split(/a|e|i|o|u|y|A|E|I|O|U|Y/);
console.log(res);
let b = res.join('');
console.log(b);

//str.split('').forEach(e=>
  //!glass.split('').includes(e) && !res.includes(e) ? res.push(e):''
//)
//console.log('гласные не повторяющиеся -> '+res.join(''));
function disemvowel(str) {
const glass = "aeiouy"; //гласные
const res = str.split(/a|e|i|o|u|y|A|E|I|O|U|Y/);
console.log(res);
let b = res.join('');

    return b;
  }