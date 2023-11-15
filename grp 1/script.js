document.getElementById('shakeButton').addEventListener('click', function() {
    var html = document.documentElement;

    html.classList.add('shake-animation');

    setTimeout(function() {
        html.classList.remove('shake-animation');
    }, 500); // The duration should match the CSS animation duration
});
