// ==UserScript==
// @name        KAADIVVVV - vvvvid.it Anti-Adblock Killer
// @namespace   https://github.com/Robotex/
// @description Mantieni il tuo Ad-Blocker attivo mentre ti guardi il tuo anime preferito
// @author      Robotex
// @version     1.4.1
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright   2016+, Robotex (https://github.com/Robotex/)
// @homepage    https://github.com/Robotex/kaadivvvv/
// @supportURL  https://github.com/Robotex/kaadivvvv/issues
// @match       *://www.vvvvid.it/*
// @exclude     *://www.vvvvid.it/adblock.html
// @grant       none
// ==/UserScript==

function keyboardShortcuts(e) {
  if (e.keyCode == 32 && $('#player-video-info').hasClass('inactive'))
    window.vvvvid.player.setPlayPause();
  if (e.keyCode == 39 && $('#player-video-info').hasClass('inactive'))
    window.vvvvid.player.setPlayhead('+5');
  if (e.keyCode == 37 && $('#player-video-info').hasClass('inactive'))
    window.vvvvid.player.setPlayhead('-5');
  if (e.keyCode == 38 && $('#player-video-info').hasClass('inactive'))
    window.vvvvid.player.setVolume('+0.05');
  if (e.keyCode == 40 && $('#player-video-info').hasClass('inactive'))
    window.vvvvid.player.setVolume('-0.05');
  if (e.keyCode == 160 && $('#player-video-info').hasClass('inactive'))
    window.vvvvid.player.setFrame('+1');
  if (e.keyCode == 222 && $('#player-video-info').hasClass('inactive'))
    window.vvvvid.player.setFrame('-1');
}

function checkAdv () {
  this.hasAdv = false;
}

if (typeof exportFunction === "function") {
  exportFunction(checkAdv, window.wrappedJSObject.vvvvid.models.PlayerObj.prototype, {defineAs: 'checkAdv'});
  window.eval('Object.defineProperty(window, \'emdHkdjhj\', { value: undefined, writable: false })');
  window.eval('window[wnbshgd] = window.vvvvid.models.PlayerObj.prototype.checkAdv');
  window.eval('$(document).keydown( ' + keyboardShortcuts + ' )');
  window.eval('window.vvvvid.lastPlayedPreCommunityTime = Number.POSITIVE_INFINITY');
} else {
  window.vvvvid.models.PlayerObj.prototype.checkAdv = checkAdv;
  Object.defineProperty(window, 'emdHkdjhj', { value: undefined, writable: false });
  window[wnbshgd] = window.vvvvid.models.PlayerObj.prototype.checkAdv;
  $(document).keydown(keyboardShortcuts);
  window.vvvvid.lastPlayedPreCommunityTime = Number.POSITIVE_INFINITY;
}
window.sessionStorage.logoPlayed = true;

/**
* A colui che sta analizzando questo script per commessa, se posso darti del tu, ti ringrazio per le sfide che avanzi.
* Anche se la programmazione web non e il mio forte, chissa che magari un giorno ci troveremo seduti intorno ad un tavolo
* a parlare di algoritmi e bere in compagnia :) E se sei una lei, tanto di cappello!
*/
