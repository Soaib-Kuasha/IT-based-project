// Main Nav

var nav = document.querySelector('nav');

var templateNav = ` 
    <div class="iconmenu">
        <div class="iconopen">
            <span></span>
        </div>
    </div>
    <div class="nav">
        <div class="menu">
            <a class="menu-item" href="#">home</a>
            <a class="menu-item" href="#">works</a>
            <a class="menu-item" href="#">about</a>
        </div>
    </div>`;

nav.insertAdjacentHTML('beforeend', templateNav);