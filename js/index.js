// Iteration 1: Names and Input
const hacker1 = "Oliwia";
const hacker2 = "Dani";
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;
console.log(`The driver's name is ${hacker1} and the navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1Length>hacker2Length) {
console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
}
else if(hacker1Length<hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}
else if(hacker1Length===hacker2Length) {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
};
// Iteration 3: Loops
function separate(word) {
    return word.split('').join(' ')
};
function capitalize(word) {
    return word.toUpperCase()
};
function separateCapitalize(word) {
    console.log(word.split('').join(' ').toUpperCase())
};
// function separateCapitalize(word) {
//     return capitalize(separate)
// };
function sort(str1, str2) {
    if(str1>str2) {
        console.log("The driver's name goes first.")
    }
    else if(str1<str2) {
        console.log("Yo, the navigator goes first definitely.")
    }
    else if(str1==str2) {
       console.log("What?! You both have the same name?")
    }
};

const string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae massa massa. Cras non fermentum diam. Nunc vitae ex magna. Vivamus pharetra ex nisl, pellentesque vulputate quam dapibus et. Quisque purus libero, eleifend sed sodales sed, porta vel eros. Vivamus feugiat massa eget ex commodo pulvinar. Pellentesque eu odio a sem dictum maximus eget eget lorem.";

const string2 = "Nullam quis augue risus. Aliquam efficitur nulla sit amet felis gravida, ut volutpat purus lacinia. Nulla lobortis lacus a feugiat accumsan. Morbi in mattis enim. Nunc ut fermentum turpis. Donec sapien magna, mattis ut velit eu, tempor laoreet nisl. Aenean sollicitudin congue ipsum. Morbi volutpat ipsum leo, eu viverra urna eleifend eget. Aliquam et ultrices ipsum. Donec fringilla neque et arcu sodales feugiat. Pellentesque mattis nunc diam, ac condimentum sapien varius eget.";

const string3 = "Sed ut sagittis justo, nec pretium erat. Phasellus in accumsan turpis. Fusce pretium mauris iaculis ipsum viverra, vitae vulputate ligula dictum. Aenean vel commodo nibh. Cras venenatis, leo vitae luctus bibendum, est ipsum dictum est, at vestibulum ipsum justo non odio. Etiam iaculis, mauris in euismod egestas, arcu leo ultrices justo, non scelerisque lacus neque a nisl. Etiam et augue sed justo suscipit mattis at id metus.";

function countWords(str) {
console.log(str.split(' ').length);
};

function countEt(str, find) {
    for(let i = 0; i <= str.length; i+=1) {
        return str.split(find).length - 1;
}
};

function checkPalindrome(string) {
    let j = str.length -1;
    for(let i = 0; i < j/2; i+=1) {
        let forward = str[i];
        let backward = str[j-i];
        if(forward !== backward) {
            return false
        }
    }
    return true
};

function palindromeMessage(string) {
    if (checkPalindrome == true) {
    console.log("It's palindrome");
    }
    else {
    console.log("It's not palindrome");
    }
}

separateCapitalize(hacker1);

function reverse(word) {
    console.log(word.split('').reverse().join(''))
};

reverse(hacker2);

sort(hacker1, hacker2);

countWords(string2);

console.log(countEt(string1, "et"));

palindromeMessage("jpi");