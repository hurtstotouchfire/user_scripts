// ==UserScript==
// @name         Real eBay Prices
// @version      0.1
// @description  Replace prices on eBay with price + shipping
// @author       https://github.com/hurtstotouchfire
// @match        https://www.ebay.com/sch*
// ==/UserScript==

(function() {
    'use strict';

    // TODO: Using this script as a template for a shoptagr script, I'm getting errors like containers.toArray is not a function.
    //       Honesly, I can't really imagine why I am going through this weird looping thing anyway. You'd think I could get jQuery
    //       objects some more clever way, or loop through whatever is coming back natively. Anyway, just debugging, I tried to
    //       naively jqueryify the whole container set (`$(containers)`) and the error is really weird:
    //       `SyntaxError: '[object HTMLDivElement]' is not a valid selector`
    //       Maybe it's late at night and I've forgotten javascript but I really should have put some damn jsdoc comments on this
    //       garbage. Then at least I'd know what object types I expected as inputs and outputs and whatnot.
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
