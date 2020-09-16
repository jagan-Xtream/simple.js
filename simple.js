const readline = require('readline')
const inp = readline.createInterface({
    input:process.stdin,
    output:process.stdout
    
})
var userInput;

inp.on('line', (data) => {
 userInput = data.split(' ').map(i => Number(i))
})
   function SI(p,t,r) {
       S=userInput[0],userInput[1],userInput[2]
   console.log(( p*t *r/100).toFixed(2))
   }
    inp.on('close', () => {
SI(userInput[0],userInput[1],userInput[2])
    
})
