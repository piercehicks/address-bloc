const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){
     this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
           "Get current date and time",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
   }

   main(){
     console.log(`Welcome to AddressBloc!`);
      inquirer.prompt(this.mainMenuQuestions).then((response) => {
        switch(response.mainMenuChoice){
          case "Add new contact":
            this.addContact();
            break;
            case "Get current date and time":
             this.getDate();
             break;
          case "Exit":
            this.exit();
          default:
            console.log("Invalid input");
            this.main();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getDate(){
  console.log(new Date())
  this.main();
}

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
     this.clear();
     console.log('addContact called');
     this.main();
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }
 }
