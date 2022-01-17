// window.alert("Hallo Welt");

// window.prompt("Bitte geben Sie Ihren Namen ein.");

// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");

// window.confirm("Stimmen Sie meiner Meinung zu?");

// let alter = prompt("Gib mir bitte dein Alter:");
// console.log(alter);

// let b = 5;
// let a = b * 5 - 3;
// alert(a);

// let mann = "Robert Wadlow ist der größte Mann der Welt : ";
// let grosse = "2,72m";
// alert(mann + grosse);

// alert("Hello! I am an alert box!!");

// alert("Hello\nHow are you?");

// alert(location.hostname);

// let person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//     document.getElementById("demo").innerHTML =
//         "Hello " + person + "! How are you today?";
// }

let text1;
let favDrink = prompt("What's your favorite cocktail drink?");
switch (favDrink) {
    case "Coca-Cola":
        text = "Excellent choice! Coca-Cola is good for your soul.";
        break;
    case "Pepsi":
        text = "Pepsi is my favorite too!";
        break;
    case "Sprite":
        text = "Really? Are you sure the Sprite is your favorite?";
        break;
    default:
        text = "I have never heard of that one!";
}

confirm("Press a button!");

confirm("Press a button!\nEither OK or Cancel.");

let text2;
if (confirm("Press a button!") == true) {
    text = "You pressed OK!";
} else {
    text = "You canceled!";
}
