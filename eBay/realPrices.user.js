// ==UserScript==
// @name         Real eBay Prices
// @version      0.1
// @description  Replace prices on eBay with price + shipping
// @author       https://github.com/hurtstotouchfire
// @match        https://www.ebay.com/sch*
// ==/UserScript==

(function() {
    'use strict';

    // Make an array of objects with the parent containers as jQuery objects
    var containers = $('.lvprices');
    var items = containers.toArray().map(function(i){
        return { container: $(i) };
    });

    // Add the prices as floats
    items.map(function(i){
        i.price = Number($(i.container).children('.lvprice').text()
            .match(/\d+\.?\d+/)[0]);
    });

    // Add the shipping as floats
    items.map(function(i){
        var shipping = $(i.container).children('.lvshipping').text()
            .match(/\d+\.?\d+/) || ['0'];
        i.shipping = Number(shipping[0]);
    });

    // Replace the price containers with the price + shipping
    items.map(function(i){
        var totalPrice = (i.price + i.shipping).toFixed(2);
        var newHtml = '<li class="lvprice prc"><span class="bold">';
        newHtml += '$' + totalPrice + '</span></li>';
        i.container.empty().html(newHtml);
    });
})();
