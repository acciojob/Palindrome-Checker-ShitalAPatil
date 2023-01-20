// complete the given function

function palindrome(str){
    
        var reverseStr= str.trim().split("").reverse().join("").toLowerCase()
        if(reverseStr===str.trim()){
            return true
        } else {
            return false
        }

}
module.exports = palindrome
