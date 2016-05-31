// ==UserScript==
// @name        KAADIVVVV - vvvvid.it Anti-Adblock Killer
// @namespace   https://github.com/Robotex/
// @description Mantieni il tuo Ad-Blocker attivo mentre ti guardi il tuo anime preferito
// @author      Robotex
// @version     1.0.4a
// @license     GPL version 3; http://www.gnu.org/copyleft/gpl.html
// @copyright   2016+, Robotex (https://github.com/Robotex/)
// @homepage    https://github.com/Robotex/kaadivvvv/
// @supportURL  https://github.com/Robotex/kaadivvvv/issues
// @match       http://www.vvvvid.it/*
// @match       https://www.vvvvid.it/*
// @grant       none
// ==/UserScript==

window.vvvvid.cab2 = function (k, n)
{
  var o = this;
  o.isAdBlockActive = false;
  if (n)
    n(false);
};

window.MPVastLoader.adbTot = -12;
