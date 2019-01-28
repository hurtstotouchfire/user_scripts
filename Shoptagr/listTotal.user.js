// ==UserScript==
// @name         Shoptagr List Total
// @version      0.1
// @description  Total items shown on the page in a Shoptagr wishlist
// @author       https://github.com/hurtstotouchfire
// @match        https://*.shoptagr.com/*
// @noframes
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
  'use strict';

  // sleep time expects milliseconds
  function sleep (time) {
    return new Promise(function(resolve){ setTimeout(resolve, time) });
  }

  function getSum(total, num) {
    return total + num;
  }

  jQuery.noConflict();
  var jq = jQuery;

  // Wait 3.5 seconds
  sleep(15000).then(function(){
    // Define page elements:
    // the tagline at the top, i.e. "12 products from 3 retailers"
    let listDescription = jq('.topbar h3');
    let listItems = jq.makeArray(jq('.discount-price'));

    console.log("Tamper:" + listItems.length);

    // Loop through listItems and pull out price text, sanitize, convert to numbers
    let prices = jq.map(listItems, function(e, i) {
        return parseFloat(jq(e).text().split("$")[1].trim());
    })

    // Add up the numbers and append to listDescription, i.e. "12 products from 3 retailers, $45.71
    listDescription.append(", $" + prices.reduce(getSum).toFixed(2));
    });
})();
