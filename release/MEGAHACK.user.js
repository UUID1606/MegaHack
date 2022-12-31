// ==UserScript==
// @name         Mega Hack JS
// @version      1.00.0
// @description  Tanki Online Cheat
// @author       Zorro
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
// @description  Tanki Online Cheat

// @downloadURL  https://github.com/UUID1606/MegaHack/raw/main/release/MEGAHACK.user.js
// @updateURL    https://github.com/UUID1606/MegaHack/raw/main/release/MEGAHACK.meta.js

// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow


// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://github.com/UUID1606/MegaHack/raw/main/release/MEGAHACK.min.js',
    nocache: true,
    onload: r => eval(r.responseText)
})
