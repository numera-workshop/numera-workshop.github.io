window.onload = function() {
    var navbarHeight = document.getElementById('main-nav').offsetHeight;
    document.getElementById('main-content').style.marginTop = navbarHeight + 'px';
    document.documentElement.style.scrollPaddingTop = navbarHeight + 'px';
};

window.onresize = function() {
    var navbarHeight = document.getElementById('main-nav').offsetHeight;
    document.getElementById('main-content').style.marginTop = navbarHeight + 'px';
    document.documentElement.style.scrollPaddingTop = navbarHeight + 'px';
};