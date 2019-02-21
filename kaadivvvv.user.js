// ==UserScript==
// @name        KAADIVVVV - vvvvid.it Anti-Adblock Killer
// @namespace   https://github.com/Robotex/
// @description Mantieni il tuo Ad-Blocker attivo mentre ti guardi il tuo anime preferito
// @author      Robotex
// @version     1.3.2
// @license     GPL version 3; http://www.gnu.org/copyleft/gpl.html
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
  this.hasAdv = !1;
}

if (typeof exportFunction === "function") {
  exportFunction(checkAdv, window.wrappedJSObject.vvvvid.models.PlayerObj.prototype, {defineAs: 'checkAdv'});
  window.eval('$(document).keydown( ' + keyboardShortcuts + ' )');
} else {
  window.vvvvid.models.PlayerObj.prototype.checkAdv = checkAdv;
  $(document).keydown(keyboardShortcuts);
}

/**
* Because they still keep asking me for that... sorry.
*/
