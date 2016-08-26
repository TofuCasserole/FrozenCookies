// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies written by Icehawk78, modified by TofuCasserole
// @author         shinji257
// @homepage       https://github.com/TofuCasserole/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @updateURL      https://rawgithub.com/TofuCasserole/FrozenCookies/master/fc_userscript_loader.user.js
// @downloadURL    https://rawgithub.com/TofuCasserole/FrozenCookies/master/fc_userscript_loader.user.js
// ==/UserScript==

function LoadFrozenCookies() {
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('id', 'frozenCookieScript');
  js.setAttribute('src', 'https://rawgithub.com/TofuCasserole/FrozenCookies/master/frozen_cookies.js');
  document.head.appendChild(js);
}
// It's not the best way but Chrome doesn't work with addEventListener... :(
// Delay load by 5 seconds to allow the site to load itself first.)
window.setTimeout(LoadFrozenCookies, 5000);
