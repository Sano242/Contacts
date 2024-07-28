const database = ["Arnold", "Sly", "Dwayne", "Vin", "JCVD", "Steven"];

let yesOrNo = "yes";

for(let i =0; i < 6; i++){

  let slotNum = "slot-" + i;

  document.getElementById(slotNum).innerHTML = database[i];

}

alert("Hello, this is your contacts page! Do you want to view your contacts?");

while(yesOrNo == "yes"){

  let index = prompt("Please input a slot number (0-5):")

  while(index === null || (index < 0 || index > 5)){

    alert("Invalid input, please input a valid slot number (0-5)");

    index = prompt("Please input a slot number (0-5):")

  }

  if(index < 6 && index >= 0){

    alert('You selected ' + database[index]);
    console.log('You selected ' + database[index]);
  
  }

  yesOrNo = prompt("Do you want to select another contacts? (type yes/no)");

  while(yesOrNo === null || (yesOrNo != "yes" && yesOrNo != "no")){

    yesOrNo = prompt("Invalid input, please input a valid answer (yes/no)");

  }
  
}

alert("Thank you for using this contacts page!");
