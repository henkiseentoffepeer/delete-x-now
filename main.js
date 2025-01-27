// main.js
window.onload = () => {
  // Detect OS, browser, and screen size
  document.getElementById('os').innerText = getOS();
  document.getElementById('browser').innerText = getBrowser();
  document.getElementById('screen-size').innerText = `${window.innerWidth} x ${window.innerHeight}`;

  // Counter functionality
  document.getElementById('i-did-it').addEventListener('click', async () => {
    const isValid = await validateCaptcha();
    if (isValid) {
      updateCounter();
      document.getElementById('celebration').classList.remove('hidden');
    }
  });
};

function getOS() {
  const platform = navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'Windows';
  if (platform.includes('mac')) return 'macOS';
  if (platform.includes('linux')) return 'Linux';
  if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
  if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) return 'iOS';
  return 'Unknown OS';
}

function getBrowser() {
  const agent = navigator.userAgent;
  if (agent.includes('Chrome')) return 'Chrome';
  if (agent.includes('Firefox')) return 'Firefox';
  if (agent.includes('Safari')) return 'Safari';
  return 'Other';
}

async function validateCaptcha() {
  // Simulate captcha validation
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
}

function updateCounter() {
  let count = parseInt(document.getElementById('count-display').innerText.replace(',', '')) + 1;
  document.getElementById('count-display').innerText = count.toLocaleString();
}
