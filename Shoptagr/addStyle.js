// ==UserScript==
// @name         Shoptagr style over-rides
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  CSS
// @author       hurtstotouchfire
// @match        https://beta.shoptagr.com/dashboard
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Show all of My Lists
    GM_addStyle(".sidebar__filter.--lists { height: auto; }");

    // Hide aborted pinterest button
    GM_addStyle("[title~=Privacy] { display: none; }");
})();
