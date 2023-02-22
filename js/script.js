window.onload = function (e) {


    /* Sticky Go Back */

    var goBack = document.querySelector('.go-back'),
        workDetail = document.querySelector('.work-detail');

    window.addEventListener('scroll', fixedGoBack);

    function fixedGoBack() {
        var body = document.querySelector('body');

        window.addEventListener('scroll', fixedGoBack)
        if (window.pageYOffset >= 190) {

            goBack ? goBack.classList.add('fixed') : "";

        } else {
            goBack ? goBack.classList.add('not-fixed') : "";

            setTimeout(() => {
                goBack ? goBack.classList.remove('fixed') : "";
                goBack ? goBack.classList.remove('not-fixed') : "";
            }, 200);
        }


        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            goBack ? goBack.classList.remove('fixed') : "";
            window.removeEventListener('scroll', fixedGoBack)
        } else {
            window.addEventListener('scroll', fixedGoBack)
        }
    }

    if (workDetail) {
        fixedGoBack();
    }


    /* Open Menu bar */

    var iconMenu = document.querySelector('.iconmenu'),
        iconOpen = document.querySelector('.iconopen'),
        navBar = document.querySelector('.nav');

    iconMenu.addEventListener('click', openNav);

    function openNav() {

        if (iconOpen.classList.contains('close')) {
            iconOpen.classList.remove('close');
        } else {
            iconOpen.classList.add('close');
        }

        if (navBar.classList.contains('navshow')) {
            navBar.classList.remove('navshow');
        } else {
            navBar.classList.add('navshow');
        }


    };
    /* end Open Menu bar */


    /* Back to top */
    var toTop = document.getElementById("scrollme");

    toTop.addEventListener("click", function () {
        scrollToTop(600);
    });

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                } else clearInterval(scrollInterval);
            }, 15);
    }
    /* end Back to top */


    ///////// Animate Modules //////////
    var module = document.querySelectorAll('.section'),
        workImg = document.querySelectorAll('.work'),
        timelineItem = document.querySelectorAll('.timeline-item');


    const anime = (element, animation) => {
        if (element.offsetParent != null) {
            element.classList.add(animation)
        }
    }

    const isInViewport = (element) => {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.bottom >= 0 &&
            bounding.right >= 0 &&
            bounding.top <= document.documentElement.clientHeight &&
            bounding.left <= document.documentElement.clientWidth
        )
    };
    const isModuleVisbibleAnimation = (element, animation) => {
        if (isInViewport(element)) {
            if (window.innerWidth >= 800) {
                anime(element, animation);
            }
        }
    };
    // for viewport
    const animeContainers = (container, animation) => {

        container.forEach(item => {
            isModuleVisbibleAnimation(item, animation);
            if (item.children) {
                [...item.children].forEach(element => {
                    isModuleVisbibleAnimation(element, animation);
                })
            }
        })
    }

    // for scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 800) {
            animeContainers(module, "anime");
            animeContainers(workImg, "animeWork");
            animeContainers(timelineItem, "animeTimeline");
        }
    })
    // to load the animations
    animeContainers(module, "anime");
    animeContainers(workImg, "animeWork");
    animeContainers(timelineItem, "animeTimeline");

    //open Modal

    const btnVideo = document.querySelector('.btnVideo'),
        modalVideo = document.querySelector('.modal'),
        iconCloseVideo = document.querySelector('.modal__icon'),
        body = document.querySelector('body');

    btnVideo.addEventListener("click", openVideo);

    iconCloseVideo.addEventListener("click", closeVideo);


    function openVideo() {
        setTimeout(() => {
            modalVideo.classList.add('open');

        }, 300);

        body.style.overflow = "hidden";
    }

    function closeVideo() {
        modalVideo.classList.remove('open');
        body.style.overflow = "visible";
    };
    document.querySelector('.modal').style.height = window.innerHeight + "px";


};