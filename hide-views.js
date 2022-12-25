function hideViews() {
    console.log('Hiding views');
    var views = document.querySelectorAll('[aria-label*="View Tweet analytics"]');
    for (var i = 0; i < views.length; i++) {
        var parentDiv = views[i].parentNode;
        parentDiv.style.display = 'none';
    }

    // For single tweet pages (e.g. https://twitter.com/username/status/1234567890)
    // if (window.location.href.indexOf("status") > -1) {
    //     var article = document.querySelector('article[tabindex="-1"][data-testid="tweet"]');
    //     var aTags = article.querySelectorAll('a[href*="analytics"]');
    //     // var aTags = document.querySelectorAll('a[href*="analytics"]');
    //     for (var i = 0; i < aTags.length; i++) {
    //         aTags[i].parentNode.parentNode.style.display = 'none';
    //     }
    // }

}

// Run the function every 1000 milliseconds (1 second) to check for new elements.
setInterval(hideViews, 1000);

// Run the function once to hide any elements that are already on the page.
hideViews();
