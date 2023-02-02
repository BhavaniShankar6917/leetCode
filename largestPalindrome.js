//This code returns the largest substring which is a palindrome inside of a given string.
//It takes roughly 2800ms on my computer to execute this string "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"
//both take almost the same time.

var longestPalindrome = function(s) {
    const time = Date.now();
    for(let count = s.length; count >= 1; count--){
        for(let i = 0; i + count <= s.length; i++){
            let temp = (s.substring(i, i + count));
                // console.log(temp);
                if(temp == (temp.split('')).reverse().join('')){   //////!!!!!!!!!!!!Just using Spread Operator instead of split here caused a performance difference
                                                                   //////////////////of over 5000ms.
                    console.log((Date.now() - time));
                    return temp;
            }
    }
    }
    
};

//code 2
var longestPalindrome = function(s) {
    let arr = [];
    let time = Date.now();
    // let count = 1;
    for(let count = 1; count <= s.length; count++){
    // while(count <= s.length){

        for(let i = 0; i <= s.length - count; i++){
            let temp = (s.substring(i, i+count));
            if(temp == (temp.split('')).reverse().join('')){
                arr.push(temp);
            }
        }
        // count++;
    }
    // }

    return arr[arr.length - 1], (Date.now() - time);
};
