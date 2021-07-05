window.onload = function(){

let progress = document.getElementById('progress')
let gigasLeft = document.getElementById('gbBig')
let gigasUsed = document.getElementById('gbSmall')
let gigas = 815  // Modify here amount of gigas used
let left = 1000 - gigas

progress.style.width = ((gigas*100)/1000) + "%"
gigasLeft.innerHTML = left.toString() //Speech bubble text
gigasUsed.innerHTML = gigas.toString().concat(' GB') //Amount of gigas used text


}

