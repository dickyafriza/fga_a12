const toggleButton = document.getElementById('toggle-Button');
const navilist = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    navilist.classList.toggle('active');
})