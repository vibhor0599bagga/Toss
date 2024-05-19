let coin = document.getElementById('coin');
let tossBtn = document.getElementById('toss');
let resetBtn = document.getElementById('reset');
let resultText = document.getElementById('result_text');

tossBtn.addEventListener('click', toss);

function toss() {
    coin.classList.add('active');
    
    setTimeout(() => {
        coin.classList.remove('active');
        
        // Randomly select heads or tails
        const result = Math.random() < 0.5 ? 'heads' : 'tails';
        
        // Update the coin display
        coin.innerHTML = `
            <div class="${result}">
                <img src="${result}.jpg" alt="${result}">
            </div>
        `;
        
        // Update the result text
        resultText.innerText = 'The result is ' + result + '!';
    }, 500);
}

resetBtn.addEventListener('click', () => {
    window.location.reload();
});