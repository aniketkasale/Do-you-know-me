var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
 console.log(chalk.yellow("DO YOU KNOW ME ?"))
 console.log("-------------------------------------")
 var Name = readlineSync.question('What is Your Name : ');
 console.log("Welcome " + Name)
function play(que,ans){
  var userAns=readlineSync.question(que);
  if (userAns==ans){
     console.log(chalk.green("Yep!! you are right"));
  score=score+1;
  console.log(chalk.green("Hurray!! Your score is "+ score))
  console.log("-------------------------------------")
  }else{
    
  
  console.log( chalk.red(" you are Wrong"));
  console.log(chalk.red(" Your score is "+ score))
  }
}
var questions=[{que:"What is My Age ? :",ans:"21"},{que:"My Home Town ? :",ans:"akola"},{que:"In Which City I go to College ? :",ans:"pune"}];
for(var i=0;i<questions.length;i++){
  play(questions[i].que,questions[i].ans)
}
console.log("-------------------------------------")
console.log(chalk.yellow("So Your Total Score is ",score))
 console.log("-------------------------------------")
console.log(chalk.yellow("Thank You "))