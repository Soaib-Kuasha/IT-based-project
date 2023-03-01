var works = [{
        categoryId: 2,
        categoryName: "ui-design",
        title: "Daily UI Challenge",
        year: "On going",
        category: "UI Design, Front-End Development",
        url: "#",
        thumb: "./images/works/01.jpg",
        fullClass: true,
        featured: true,
    },
    {
        categoryId: 2,
        categoryName: "ui-design",
        title: "App Proposal",
        year: "2019",
        category: "UI Design",
        url: "#",
        thumb: "images/works/02.jpg",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 2,
        categoryName: "ui-design",
        title: "Landing Page Layout Proposal",
        year: "2019",
        category: "UI Design",
        url: "#",
        thumb: "images/works/03.jpg",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 2,
        categoryName: "ui-design",
        title: "Website",
        year: "2019",
        category: "UI Design, Front-End Development",
        thumb: "images/works/04.jpg",
        url: "works/valeirawebsite.html",
        fullClass: false,
        featured: true,
    },

];

/* 
1 - graphic
2 - ui
3 - packaing
4 - editorial
5 - illustration
*/
var worksPage = document.querySelector('.works-main'),
    worksHome = document.querySelector('.works-home');


for (let i = 0; i < works.length; i++) {
    const {
        categoryId,
        title,
        year,
        category,
        thumb,
        url,
        fullClass,
        featured,
        categoryName,
    } = works[i];


    var template = `<a id ="${categoryName}" data-id="${categoryId}" class="work ${fullClass ? "full" : ""}" href="${url}">
    <div class="image">
        <div class="img" style="background-image: url(${thumb})"></div>
        <p class=" overlay-title">${title}</p>
        <p class="overlay-text">${year} / ${category}</p>
    </div>
</a>`;

    if (worksPage) {
        worksPage.insertAdjacentHTML('beforeend', template);
    } else if (worksHome && featured) {

        worksHome.insertAdjacentHTML('beforeend', template);
    }


}