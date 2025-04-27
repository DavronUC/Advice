const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const getAdviceBtn = document.getElementById('get-advice');

async function fetchAdvice() {
    try {
        const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
        const data = await res.json();
        adviceId.textContent = `ADVICE ${data.slip.id}`;
        adviceText.textContent = `${data.slip.advice}`;
    } catch (error) {
        adviceText.textContent = "Xatolik yuz berdi. Qayta urinib ko‘ring.";
    }
}

getAdviceBtn.addEventListener('click', fetchAdvice);
fetchAdvice()