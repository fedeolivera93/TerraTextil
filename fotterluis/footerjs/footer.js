var links = document.querySelectorAll('.footer a');
links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });
});