// write a function that checks if a string is a pangram
// NOTE: A pangram is a sentence containing every letter of the alphabet.

function pangram(str){
    let word = str.toLowerCase();
    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < word.length; i++)

        if(word.indexOf(alphabets.charAt(i)) == -1)
            
        return false;
    
            return true;        

}
console.log(pangram("The quick brown fox jumps over the lazy dog"));