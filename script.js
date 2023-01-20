// complete the given function

function palindrome(str){
    
        var reverseStr= str.toLowerCase().reverse()
        if(reverseStr===str){
            return true
        } else {
            return false
        }

}
module.exports = palindrome
