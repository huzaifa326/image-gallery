const buttons = document.querySelectorAll('.button');
const items = document.querySelectorAll('.item');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // Remove active class from all buttons
    buttons.forEach((button) => button.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Show/hide items based on filter
    items.forEach((item) => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
