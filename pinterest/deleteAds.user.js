// ==UserScript==
// @name Delete promoted pins
// @namespace Pinterest
// @match https://www.pinterest.com/*
// ==/UserScript==

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

setInterval(function(){
  var text = 'Promoted';
  var adLabel = document.evaluate('//*[text()="' + text + '"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0);
  var ad = findAncestor(adLabel, '.pinWrapper');
  ad.remove();
}, 3000);

// TODO: adLabel is intermittently not finding anything.
// Not sure what's causing it. Generally when the page is loaded, it works in the console.
// When adLabel succeeds, the ancestor search is still failing. However, this works:
// adLabel.parentElement.parentElement.parentElement.parentElement.parentElement
// but then somehow remove() isn't working.
