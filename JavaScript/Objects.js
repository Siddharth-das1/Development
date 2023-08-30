//Simple object
/*let Alien = {
     Name: 'Jaadu',
     Age: 25,
     Gender: 'Male',
     Height: 1.75,
     Weight: 70,
     HairColor: 'Brown',
}

console.log(Alien.Gender , Alien.Height);
*/

//Complex Object
let System = {
  Name: 'Jaadu',
  Age: 25,
  Gender: 'Male',
  Height: 1.75,
  laptop: {
    cpu: 'i7',
    ram: 16,
    brand:'HP',
  },
  Weight: 70,
  HairColor: 'Brown',
}
//delete System.laptop
for(let key in System.laptop){

  console.log(System);

}

//console.log(System);

//////////////////////////  Diffrent Question below ! /////////////
/*var account = function (name, balance){

    account.name = name;
    account.balance = balance;
  
    account.deposit = function (depositAmount) {
      newBalance = account.balance - depositAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You have insufficient funds!!!");
      }
    };
  
    account.withdraw = function (withdrawAmount){
      newBalance = account.balance - withdrawAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You have insufficient funds!!!");
      }
  
    };
  
    account.transfer = function (transferAmount){
  //got stuck here
    }
  
    console.log("Name: " + name + "; Balance: " + balance);
  }
  
  
  var AustinAccount = new account ("Austin", 500);
  var KateAccount = new account ("Kate", 10000);
  var GingerAccount = new account ("Ginger", 70000000);
  var OreoAccount = new account ("Oreo", 900000000);
  */