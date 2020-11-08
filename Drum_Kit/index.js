var drumButtonLength = document.querySelectorAll('.btn').length;
// console.log(drumButtonLength);
// //var drumButtons = document.querySelectorAll('.btn');
document.body.onkeydown = function KeyPress(e) {
    makeSound2(e.key);


}

for (var i = 0; i <= drumButtonLength; i++) {
    document.querySelectorAll('.btn')[i].onclick = function() {
        var buttonInnerText = this.textContent;
        // console.log(buttonInnerText);
        makeSound1(buttonInnerText);
        //  buttonAnimation(buttonInnerText);


    }
}

function makeSound1(key) {
    switch (key) {
        case "A CLAP":
            var clap = new Audio('./sound/clap.wav');
            clap.play();

            break;
        case "S HIHAT":
            var hihat = new Audio('./sound/hihat.wav');
            hihat.play();

            break;
        case "D KICK":
            var kick = new Audio('./sound/kick.wav');
            kick.play();

            break;
        case "F OPENHAT":
            var openhat = new Audio('./sound/openhat.wav');
            openhat.play();

            break;
        case "G BOOM":
            var boom = new Audio('./sound/boom.wav');
            boom.play();

            break;
        case "H RIDE":
            var ride = new Audio('./sound/ride.wav');
            ride.play();

            break;
        case "J SNARE":
            var snare = new Audio('./sound/snare.wav');
            snare.play();

            break;
        case "K TOM":
            var tom = new Audio('./sound/tom.wav');
            tom.play();

            break;
        case "L TINK":
            var tink = new Audio('./sound/tink.wav');
            tink.play();

            break;



        default:
            console.log(key);
            break;
    }
}

function makeSound2(key) {
    key = key.toUpperCase();

    switch (key) {
        case "A":
            var clap = new Audio('./sound/clap.wav');
            clap.play();

            break;
        case "S":
            var hihat = new Audio('./sound/hihat.wav');
            hihat.play();

            break;
        case "D":
            var kick = new Audio('./sound/kick.wav');
            kick.play();

            break;
        case "F":
            var openhat = new Audio('./sound/openhat.wav');
            openhat.play();

            break;
        case "G":
            var boom = new Audio('./sound/boom.wav');
            boom.play();

            break;
        case "H":
            var ride = new Audio('./sound/ride.wav');
            ride.play();

            break;
        case "J":
            var snare = new Audio('./sound/snare.wav');
            snare.play();

            break;
        case "K":
            var tom = new Audio('./sound/tom.wav');
            tom.play();

            break;
        case "L":
            var tink = new Audio('./sound/tink.wav');
            tink.play();

            break;



        default:
            // console.log(key);
            break;
    }
}


// function buttonAnimation(currentKey) {
//     console.log(currentKey)
//     var activeKey = document.querySelector('.' + currentKey);
//     console.log(activeKey);

//     // activeKey.classList.add('pressed');
//     // setTimeout(function() {

//     // })
// }