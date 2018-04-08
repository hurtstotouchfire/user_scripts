// ==UserScript==
// @name Remove Pinterest TOS nags
// @namespace Pinterest
// @match https://www.pinterest.com/*
// ==/UserScript==

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Wait for Pinterest to inject nags banner and then delete it
sleep(2000).then(() => {
  var x = document.querySelector('.Nags');
  x.remove();
});
