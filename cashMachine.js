var pinNumber = 1234;
var accBalance = 2000;
var cashToAdd = 0;
var testPin = 0000;
var cBackAmount = 0;

function pinNumberChecker() {
  var usersPin = prompt("Please enter you PIN:");

  if (usersPin == pinNumber) {
    alert("You pin number is " + usersPin);
    otherService();
  } else {
    alert("You pin number is incorrect");
    closeApp();
  }
}

function otherService() {
  var otherSer = prompt(
    "Do you need another service?\n 1.Check balance.\n 2.Withdraw cash\n 3.Disposit cash\n 4.Change pin\n 5.Close application"
  );
  switch (otherSer) {
    case (otherSer = "1"): {
      balance();
      break;
    }
    case (otherSer = "2"): {
      cashBack();
      break;
    }
    case (otherSer = "3"): {
      depositCash();
      break;
    }
    case (otherSer = "4"): {
      changePIN();
      break;
    }
    case (otherSer = "5"): {
      closeApp();
      break;
    }
    default:
  }
}

function balance() {
  alert("Your balance is " + accBalance);
  otherService();
}

function cashBack() {
  cBackAmount = prompt(
    "How much cash back would you like? You can have up to £500"
  );
  if (cBackAmount > 500 || cBackAmount < 0) {
    alert("Wrong ammount");
    otherService();
  } else if (cBackAmount > accBalance) {
    alert("Insuffient funds");
    otherService();
  } else {
    accBalance = accBalance - cBackAmount;
    alert("Your account balance is now " + accBalance);
    otherService();
  }
}

function depositCash() {
  cashToAdd = prompt("How much cash would you like to add");

  if (cashToAdd < 0) {
    alert("Amount too low");
    otherService();
  } else {
    accBalance += parseInt(cashToAdd); //parseInt makes a string into an integer so instead of 10020, its 120
    alert("Your balance is now " + accBalance);
    otherService();
  }
}

function changePIN() {
  testPin = prompt("Enter your new Pin number");
  if (testPin.lenght > 4 || testPin.lenght < 4) {
    alert("Your pin is the wrong length");
    otherService();
  } else {
    pinNumber = testPin;
    testpin = 0;
    alert("Your pin number has now been changed");
    otherService();
  }
}

function closeApp() {}

pinNumberChecker();
