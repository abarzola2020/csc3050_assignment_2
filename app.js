

const buttons = document.querySelectorAll('.toggle_btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const info = button.nextElementSibling;
    info.classList.toggle('hidden');
    
    if (info.classList.contains('hidden')) {
      button.textContent = 'Show Info';
    } else {
      button.textContent = 'Hide Info';
    }
  });
});