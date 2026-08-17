var ageEl = document.getElementById('age');
if (ageEl) {
    var birthDate = new Date(1999, 3, 15); // April 15, 1999
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!hasHadBirthdayThisYear) {
        age--;
    }
    ageEl.textContent = age;
}

document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    var nav = btn.parentElement;
    var menu = nav.querySelector('ul');
    var backdrop = nav.querySelector('.nav-backdrop');

    function closeMenu() {
        menu.classList.remove('active');
        btn.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function () {
        var isOpen = menu.classList.toggle('active');
        btn.classList.toggle('active', isOpen);
        if (backdrop) backdrop.classList.toggle('active', isOpen);
        btn.setAttribute('aria-expanded', isOpen);
    });

    if (backdrop) backdrop.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });
});
