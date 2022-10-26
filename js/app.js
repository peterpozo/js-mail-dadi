// Mail 

const mailList = ["peterpozo@gmail.com", 'peterpozo@hotmail.com', 'mariorossi@gmail.com', 'francescototti@hotmail.com', 'lionelmessi@gmail.com']
const accedi = document.getElementById("accedi")
accedi.addEventListener('click', 
    function() {
        const mail = document.getElementById("mail").value;
        if(mailList.includes(mail)) {
            console.log("Email valida. Benvenuto!")
            alert("Inizia ora!")
        }
        else{
            console.log("Email non valida. Riprovare.")
            alert("Non puoi giocare se non sei iscritto!")
            
        }
    }
);


//Dice Generator
const roll = document.getElementById("roll");

roll.addEventListener('click', function(){
    // User 1 
 const firstRandomNum = Math.floor(Math.random()* 6) + 1;
 const fistDiceImage = 'img/dice' + firstRandomNum + '.svg';

 document.querySelectorAll('img')[0].setAttribute ('src', fistDiceImage);

 // User 2 
 const secondRandomNum = Math.floor(Math.random()* 6) + 1;
 const secondDiceImage = 'img/dice' + secondRandomNum + '.svg';

 document.querySelectorAll('img')[1].setAttribute ('src', secondDiceImage);

 // Logic for winner 
 if (firstRandomNum > secondRandomNum){
    document.querySelector('h1').innerHTML = "The Winner is User 1";
 } else if (firstRandomNum < secondRandomNum){
    document.querySelector('h1').innerHTML = "The Winner is User 2";
 } else document.querySelector('h1').innerHTML = "It's a Draw!";

})