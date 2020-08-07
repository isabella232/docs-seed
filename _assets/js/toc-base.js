function animateScrolling(hash) {
    var isApiSection = $("article.api-reference").length == 1;
    var breadCrumbsElement = $("p.breadcrumbs");
    var hasBreadCrumbs = breadCrumbsElement.length == 1 && breadCrumbsElement.text().trim() != "";
    var currentScrollTop = $(window).scrollTop();
    var offset = $(hash).offset() || { top: currentScrollTop };

    var scrollOffsetCorrection = NAVBAR_HEIGHT;
    if (currentScrollTop == 0) {
      scrollOffsetCorrection += HEADER_HEIGHT;
      if (hasBreadCrumbs) {
        scrollOffsetCorrection += BREADCRUMBS_HEIGHT;
      }
      if (isApiSection) {
        scrollOffsetCorrection += API_SCROLL_FIX;
      }
    }

    $('html, body').animate({
        scrollTop: offset.top - scrollOffsetCorrection
    }, 500, function () {
        if (history.pushState) {
            history.pushState(null, null, hash);
        } else {
            window.location.hash = hash;
        }
    });
}
