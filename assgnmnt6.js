// Q 1 :-

function countChars(S) {
    let countA = 0;
    let countD = 0;
   
    for (let i = 0; i < S.length; i++) {
       if (S[i] == 'A') {
         countA++;
       } else if (S[i] == 'D') {
         countD++;
       }
    }
   
    return [countA, countD];
   }
   let stringS = "AZDEDZDADADAZ";
console.log(countChars(stringS));

// Q 2 :-

function getNameCount(S) {
   
    let occurrence = {};
   
    for (let i = 0; i < S.length; i++) {
       if (occurrence[S[i]]) {
         occurrence[S[i]]++;
       }
    
       else {
         occurrence[S[i]] = 1;
       }
    }
    let count = 0;
    for (let key in occurrence) {
       if (occurrence[key] > 1) {
         count++;
       }
    }
    return count;
   }
   let S = "abcabcd";
   console.log(getNameCount(S)); 


// Q 3:-

function countVowel(V) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
   
    for (let i = 0; i < V.length; i++) {
       if (vowels.includes(V[i])) {
         count++;
       }
    }
    return count;
   }
   
   let V = "abcaebac";
   console.log("No. of vowels =" ,countVowel(V));

// Q 4:-

function countVowels(find) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
   
    for (let i = 0; i < find.length; i++) {
       if (vowels.includes(find[i])) {
         count++;
       }
    }
   return count;
   }
   
   let find = 'HelloWorld';
   console.log("Vowels in Name =" ,countVowels(find)); 


// Q 5 :-

function findlength(N)
{
    let length=0;
    for(const char of N)
    {
        length++;
    }
    return length;
}
const Z ="Hello World";
console.log("Total Length =" ,findlength(Z));


// Q 6:-

function game_winner(input) {
    let countA = 0;
    let countD = 0;
    for (const char of input) {
        if (char === 'A') {
            countA++;
        } else if (char === 'D') {
            countD++;
        }
    }

    if (countA > countD) {
        return "Aditya is winner";
    } else if (countD > countA) {
        return "Danish is winner";
    } else {
        return "Match Draw";
    }
}

const N1 = "DDADDAAADDDDD";
const N2 = "ADDAAADD";
console.log(game_winner(N1));
console.log(game_winner(N2));


// Q 7:-

function joinStrings(S, P) {
    return S + P;
}
var strinS = "Hello,";
var stringP = "World!";
console.log(joinStrings(strinS, stringP));

// Q 8 :-

function isPalidrome(S)
{
   const s=S.toLowerCase();
   const a= S.split('').reverse().join('');
   if( a===s)
   {
    return "true";
   }else
   {
    return "false";
   }
}
console.log(isPalidrome("Naman"));
console.log(isPalidrome("naman"));


// Q 9 :-

function Reverse_String()
{
     const rev= str.split('').reverse().join('');
     return rev;

}
const str="This is Istiyak here";
console.log(Reverse_String(str));

// Q 10 :-

function checkStrings(S1, S2) {
    if(S1===S2)
    {
        return "yes";
    }
    else{
        return"no";
    }
}

const S1="Hey Bro"; 
const S2="Hey Bro";
console.log( checkStrings(S1,S2));

// Q 11 :-

function replacePattern(R, pattern, text) {
    
    var regex = new RegExp(pattern, 'g');
    var result = R.replace(regex, text);
    return result;
}

var R = "The sky is blue. The sun is bright.";
var pattern = "sun";
var text = "moon";
console.log(replacePattern(R, pattern, text));


// Q 12 :-

function splitString(newStr) {
    return newStr.split(/\s+/);
   }
   
console.log(splitString('This is a split string'));


// Q 13 :-

function countVowelsAndConsonants(s) {
    let vowels = 0;
    let consonants = 0;
   
    for (let i = 0; i < s.length; i++) {
       let char = s.charAt(i);
   
       if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
           char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
         vowels++;
       } else if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
         consonants++;
       }
    }
   
    return {
       vowels: vowels,
       consonants: consonants
    };
   }
   
   let s = "Hello, World!";
   let result = countVowelsAndConsonants(s);
   console.log("Vowels: " + result.vowels);
   console.log("Consonants: " + result.consonants);

