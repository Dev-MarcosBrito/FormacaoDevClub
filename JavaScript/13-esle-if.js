/*

    IF (SE)
    Else (SENÃO)
    Else If 

*/

const temperature = 36.5;

if (temperature >= 37.5) {
    console.log('Febre');
} else {
    console.log('Normal');
}

if (temperature >= 37.5) {
    console.log('Febre alta');
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre moderada');
} else {
    console.log('Normal');
}