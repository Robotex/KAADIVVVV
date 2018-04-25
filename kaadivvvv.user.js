// ==UserScript==
// @name        KAADIVVVV - vvvvid.it Anti-Adblock Killer
// @namespace   https://github.com/Robotex/
// @description Mantieni il tuo Ad-Blocker attivo mentre ti guardi il tuo anime preferito
// @author      Robotex
// @version     1.3.1
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

function startAdv (g, c, f) {
  var e = (this.wrappedJSObject === undefined ? this : this.wrappedJSObject);
  var d = e.playlistItem.toJSON();
  if (('vod_mode' in d) && (d.vod_mode & 1) == 0 && !vvvvid.user.svodActive()) {
    vvvvid.showGenericError('Il video selezionato è disponibile solo in modalità abbonamento.', function () {
      vvvvid.router.mainView.resetApplication();
    });
    return;
  }
  if (!g) {
    e.destroyPlayers();
  }
  f();
}

if (typeof exportFunction === "function") {
  exportFunction(startAdv, window.wrappedJSObject.vvvvid.models.PlayerObj.prototype, {defineAs: 'startAdv'});
  window.eval('window[mnsJHnyT] = window.vvvvid.models.PlayerObj.prototype.startAdv');
  window.eval('$(document).keydown( ' + keyboardShortcuts + ' )');
} else {
  window.vvvvid.models.PlayerObj.prototype.startAdv = startAdv;
  window[mnsJHnyT] = window.vvvvid.models.PlayerObj.prototype.startAdv;
  $(document).keydown(keyboardShortcuts);
}

/*
* A colui che sta analizzando questo script per commessa, se posso darti del tu, ti ringrazio per le sfide che avanzi.
* Anche se la programmazione web non e il mio forte, chissa che magari un giorno ci troveremo seduti intorno ad un tavolo
* a parlare di algoritmi e bere in compagnia :) E se sei una lei, tanto di cappello!
*/
