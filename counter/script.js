const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const counterLabel = document.getElementById('counter');


let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    counterLabel.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    counterLabel.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterLabel.textContent = count;
});