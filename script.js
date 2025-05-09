// Animation trigger
document.getElementById('animateBtn').addEventListener('click', () => {
  document.getElementById('heading').classList.toggle('animate-glow');
});

// Save theme preference
document.getElementById('saveThemeBtn').addEventListener('click', () => {
  localStorage.setItem('preferredTheme', 'light');
  alert('Theme preference saved!');
});

// Form validation + localStorage
document.getElementById('userForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  let valid = true;

  if (!email.value.includes('@')) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  if (password.value.length < 8) {
    document.getElementById('passError').textContent = 'Minimum 8 characters required';
    valid = false;
  } else {
    document.getElementById('passError').textContent = '';
  }

  if (valid) {
    localStorage.setItem('userEmail', email.value);
    alert('Form submitted and data saved!');
  }
});

// Load user preferences on page load
window.addEventListener('load', () => {
  const savedEmail = localStorage.getItem('userEmail');
  if (savedEmail) {
    document.getElementById('email').value = savedEmail;
  }

  const preferredTheme = localStorage.getItem('preferredTheme');
  if (preferredTheme === 'light') {
    document.body.style.backgroundColor = '#e6f7ff';
  }
});
