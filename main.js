fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        const advice = data.slip.advice;
        const adviceContainer = document.querySelector('.advice-text');
        const adviceNo = document.getElementById('advice-no');
        adviceContainer.innerHTML = `"${advice}"`;
        adviceNo.innerHTML = data.slip.id;
    })

const randomBtn = document.getElementById('randomizer-btn');

randomBtn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            const advice = data.slip.advice;
            console.log(data)
            const adviceContainer = document.querySelector('.advice-text');
            const adviceNo = document.getElementById('advice-no');
            adviceContainer.innerHTML = `"${advice}"`;
            adviceNo.innerHTML = data.slip.id;
        })
})
