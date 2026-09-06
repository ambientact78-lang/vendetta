const countdown = document.querySelector('[data-countdown]');

if (countdown) {
  const target = new Date(countdown.dataset.target).getTime();
  const updateCountdown = () => {
    const remaining = Math.max(0, Math.floor((target - Date.now()) / 1000));
    const units = {
      days: Math.floor(remaining / 86400),
      hours: Math.floor((remaining % 86400) / 3600),
      minutes: Math.floor((remaining % 3600) / 60),
      seconds: remaining % 60,
    };
    for (const [unit, value] of Object.entries(units)) {
      countdown.querySelector(`[data-unit="${unit}"]`).textContent = String(value).padStart(2, '0');
    }
    if (remaining === 0) {
      countdown.querySelector('.countdown-label').textContent = 'October 31 has arrived';
    }
    return remaining;
  };
  if (updateCountdown() > 0) {
    const interval = setInterval(() => {
      if (updateCountdown() === 0) clearInterval(interval);
    }, 1000);
  }
}
