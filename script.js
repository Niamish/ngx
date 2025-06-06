const toggleButton = document.getElementById('toggle-theme');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
}
