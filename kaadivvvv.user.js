// ==UserScript==
// @name        KAADIVVVV - vvvvid.it Anti-Adblock Killer
// @namespace   https://github.com/Robotex/
// @description Mantieni il tuo Ad-Blocker attivo mentre ti guardi il tuo anime preferito
// @author      Robotex
// @version     1.0.1.1
// @license     GPL version 3; http://www.gnu.org/copyleft/gpl.html
// @copyright   2016+, Robotex (https://github.com/Robotex/)
// @homepage    https://github.com/Robotex/kaadivvvv/
// @supportURL  https://github.com/Robotex/kaadivvvv/issues
// @match       http://www.vvvvid.it/*
// @grant       none
// ==/UserScript==

console.log('KAADIVVVV is loading...');

window.vvvvid.cab1 = function (k, n)
{
  var o = this;
  o.isAdBlockActive = false;
  if (n)
    n(false);
};
window.vvvvid.models.PlayerObj.prototype.checkAdv = function () {
  console.log('checkAdv');
  var d = this;
  d.thereIsAdv = false;
};
