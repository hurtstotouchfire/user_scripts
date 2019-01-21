// ==UserScript==
// @name         Shoptagr List Total
// @version      0.1
// @description  Total items shown on the page in a Shoptagr wishlist
// @author       https://github.com/hurtstotouchfire
// @match        https://*.shoptagr.com/*
// ==/UserScript==

(function() {
    'use strict';
    // TODO vet this boilerplate. Pseudocode follows.
    
    // Define page elements:
    // the tagline at the top, i.e. "12 products from 3 retailers"
    let listDescription = $('.topbar h3')
    let listItems = $('.discount-price')
    
    // Loop through listItems and pull out price text, sanitize, convert to numbers
    let prices = listItems.map(function(i) {
        return $(listItems[i]).text().split("$")[1].trim();
    })

    // Add up the numbers and append to listDescription, i.e. "12 products from 3 retailers, $45.71"
    console.log(prices);
})();

notificationnotification // wut?

close
