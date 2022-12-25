function hideViews() {
    console.log('Hiding views');
    var views = document.querySelectorAll('[aria-label*="View Tweet analytics"]');
    for (var i = 0; i < views.length; i++) {
        var parentDiv = views[i].parentNode;
        parentDiv.style.display = 'none';
    }
}

// Run the function every 1000 milliseconds (1 second) to check for new elements.
setInterval(hideViews, 1000);

// Run the function once to hide any elements that are already on the page.
hideViews();
