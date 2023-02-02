//This code returns the largest substring which is a palindrome inside of a given string.

var longestPalindrome = function(s) {
    const time = Date.now();
    for(let count = s.length; count >= 1; count--){
        for(let i = 0; i + count <= s.length; i++){
            let temp = (s.substring(i, i + count));
                // console.log(temp);
                if(temp == (temp.split('')).reverse().join('')){
                    console.log((Date.now() - time));
                    return temp;
            }
    }
    }
    
};
