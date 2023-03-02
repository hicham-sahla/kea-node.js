const endOfJune = new Date('June 30, 2023 23:59:59').getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = endOfJune - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (distance < 0) {
    clearInterval(timer);
    timerElement.innerHTML = 'EXPIRED';
  }
}, 1000);
