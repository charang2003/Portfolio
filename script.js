
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked){
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
    else{
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled')
    }
});
