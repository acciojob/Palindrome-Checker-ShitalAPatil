// complete the given function

function palindrome(str){
    
        var reverseStr= str.toLowercase(). split(" ").reverse().join("")
        if(reverseStr===str){
            return true
        } else {
            return false
        }

}
module.exports = palindrome
