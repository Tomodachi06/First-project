document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const circleBtn = document.querySelector('.circle-btn');

    toggleBtn.addEventListener('click', function() {
        circleBtn.classList.toggle('expanded');
        circleBtn.classList.toggle('collapsed');
    });
});
