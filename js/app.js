const mailUtente = prompt("Inserire la tua tua email?");
const listEmail = ["peterpozo@gmail.com", 'peterpozo@hotmail.com', 'mariorossi@gmail.com', 'francescototti@hotmail.com', 'lionelmessi@gmail.com'];

for (let i = 0; i < listEmail.length; i++) {
    if((mailUtente.indexOf('@') === -1) || (mailUtente.indexOf(".") === -1)){
        alert("Inserire e-mail valida")

    }
    else{
        if (mailUtente == listEmail[i]){
            alert("La tua email è registrata")
        }
    }

}