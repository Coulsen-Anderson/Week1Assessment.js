let password = 'Coulsenisdabest35'
let minChars = false
let upperCheck = false
let numCheck = false
let letterCheck = false




for(let i = 0; i < password.length; i++){
    if(!isNaN(+password[i])){
        numCheck = true
    }
    if(password[i] === password[i].toUpperCase() && isNaN(+password[i])){
        upperCheck = true
    }
}

if(/[a-zA-A].test(password)/){
    letterCheck = true
}

if(password.length >= 10 && password.length <= 20){
    minChars = true
} 

if(minChars && letterCheck && upperCheck && numCheck){
    console.log('This password is acceptable.')
}else{
    console.log('This password is unacceptable.')
}