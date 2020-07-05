var pageScrolling = false;

function myScroll() {
    window.scrollBy(0, 10)
    pageScrolling = true;
}

document.onscroll = (e) => {
    if(pageScrolling != true) {
        var repeats = 1000;
        for(i = repeats; i < repeats; i++) {
            myScroll()
        }
        pageScrolling = false;
    }
}