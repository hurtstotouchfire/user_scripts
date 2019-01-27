// ==UserScript==
// @name           Example
// @description    Usercript with GM_addStyle method. Source: https://stackoverflow.com/questions/23683439/gm-addstyle-equivalent-in-tampermonkey
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

//demo :
GM_addStyle("p { color:red; }");
GM_addStyle("p { text-decoration:underline; }");

document.body.innerHTML = "<p>I used GM_addStyle.</p><pre></pre>";

const sheet = document.getElementById("GM_addStyleBy8626").sheet,
  rules = (sheet.rules || sheet.cssRules);

for (let i=0; i<rules.length; i++)
  document.querySelector("pre").innerHTML += rules[i].cssText + "\n";

