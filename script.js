document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var menu = btn.parentElement.querySelector('ul');
        menu.classList.toggle('active');
        btn.classList.toggle('active');
        btn.setAttribute('aria-expanded', btn.classList.contains('active'));
    });
});
