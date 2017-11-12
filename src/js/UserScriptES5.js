// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.js
// @match        <$URL$>
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    $(function () {
        var element = $('body')
        console.debug('element=%o', element);
    });
    // Your code here...
})();