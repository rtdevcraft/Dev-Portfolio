document.addEventListener('DOMContentLoaded', function () {
  const modeToggleBtn = document.getElementById('modeToggle');
  const body = document.body;

  modeToggleBtn.addEventListener('click', function () {
    if (body.classList.contains('light')) {
      body.classList.remove('light');
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
    }
  });

  // Initialize with light mode
  body.classList.add('light');
});
