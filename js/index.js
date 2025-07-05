// NAV-BAR-START
// Close the menu
function closeMenu() {
    document.getElementById('collapseMenu').classList.remove('show');
}

//close the search-box
function closeSearch_Box() {
    document.getElementById('collapseSearch').classList.remove('show');
}

//navbar-bottom
document.querySelectorAll('.hover-underline').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.hover-underline').forEach(l => l.classList.remove('active'));

        this.classList.add('active');
    });
});

// NAV-BAR-END