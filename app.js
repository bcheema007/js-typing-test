const message = document.querySelector('#message');

const btn = document.querySelector('button');

const div = document.querySelector('div');

const testMaterial = ['Arrogance is thinking that hard work can solve everything.', 'There might be times when things are tough but always know you can ask for help.', 'It would not be called a dream if it was easy to achieve.', 'Tomorrow, the day after, and the day after that what you need to do will not change. Reality will always be there in front of you. So, instead of running from it, why not try running with reality?'];

btn.addEventListener('click', beginTest);

function beginTest() {
    let startTime = Date.now();
    document.body.removeChild(btn); //remove start button
    doneBtn = document.createElement('button'); //create done button
    doneBtn.innerHTML = 'Done';
    document.body.appendChild(doneBtn);
    const index = Math.floor(Math.random() * testMaterial.length);
    const phrase = testMaterial[index];
    div.innerHTML = phrase;
    doneBtn.addEventListener('click', function() {
        displayResults(index, startTime);
    });
}

function displayResults(index, startTime) {
    let endTime = Date.now();
    let minutes = (endTime - startTime) / 60000;
    let totalCharactersTyped = message.value.length; //number of characters typed including spaces

    const checkResult = testMaterial[index].split(' ');
    const messageValue = message.value.split(' ');

    let correct = 0;
    let total = checkResult.length;
    for(let i = 0; i < messageValue.length; i++) {
        if(messageValue[i] === checkResult[i]) {
            correct++;
        }
    }
    
    let wpm = Math.floor((totalCharactersTyped / 5) / minutes); //calculation for words per minute

    div.innerHTML = `You typed at ${wpm} words per minute. <br> You were able to get ${correct} out of ${total} words.`;

}