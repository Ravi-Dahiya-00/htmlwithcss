let user = null;

function navigateTo(page) {
  document.querySelectorAll('.page').forEach((page) => page.classList.add('hidden'));
  document.getElementById(page).classList.remove('hidden');
}

function handleLogin() {
  if (user) {
    user = null;
    document.getElementById('login-btn').textContent = 'Login';
    localStorage.removeItem('user');
  } else {
    const username = prompt('Enter your username:');
    user = { username };
    document.getElementById('login-btn').textContent = 'Logout';
    localStorage.setItem('user', JSON.stringify(user));
  }
  
}

function runCode() {
  const code = document.getElementById('editor').value;
  document.getElementById('output').innerHTML = code;
}

function loadChallenges() {
  const challenges = [
    { id: 1, title: 'Build a simple webpage', description: 'Use HTML to build a simple webpage layout.' },
    { id: 2, title: 'Style a button', description: 'Use CSS to style a button.' },
  ];

  const challengeList = document.getElementById('challenge-list');
  challenges.forEach(challenge => {
    const btn = document.createElement('button');
    btn.textContent = challenge.title;
    btn.onclick = () => selectChallenge(challenge);
    challengeList.appendChild(btn);
  });
}

function selectChallenge(challenge) {
  document.getElementById('editor').value = challenge.description;
}

document.addEventListener('DOMContentLoaded', () => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user = JSON.parse(storedUser);
    document.getElementById('login-btn').textContent = 'Logout';
  }
  loadChallenges();
});
