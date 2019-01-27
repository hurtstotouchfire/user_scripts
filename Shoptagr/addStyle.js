// ==UserScript==
// @name         Add Style
// @namespace    Shoptagr
// @version      0.1
// @description  Shoptagr CSS over-rides
// @author       https://github.com/hurtstotouchfire
// @match        https://beta.shoptagr.com/dashboard
// @grant        GM_addstyle
// ==/UserScript==

(function() {
    'use strict';

    // Show all of My Lists
    GM_addstyle(".sidebar__filter.--lists { height: auto; }");
})();
