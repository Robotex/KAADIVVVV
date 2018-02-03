// ==UserScript==
// @name        KAADIVVVV - vvvvid.it Anti-Adblock Killer
// @namespace   https://github.com/Robotex/
// @description Mantieni il tuo Ad-Blocker attivo mentre ti guardi il tuo anime preferito
// @author      Robotex
// @version     1.3.0
// @license     GPL version 3; http://www.gnu.org/copyleft/gpl.html
// @copyright   2016+, Robotex (https://github.com/Robotex/)
// @homepage    https://github.com/Robotex/kaadivvvv/
// @supportURL  https://github.com/Robotex/kaadivvvv/issues
// @match       *://www.vvvvid.it/*
// @exclude     *://www.vvvvid.it/adblock.html
// @grant       none
// ==/UserScript==

function startAdv (f, b, e) {
  var d = this.wrappedJSObject;
  var c = d.playlistItem.toJSON();
  if (('vod_mode' in c) && (c.vod_mode & 1) === 0 && !vvvvid.user.svodActive()) {
    vvvvid.showGenericError('Il video selezionato è disponibile solo in modalità abbonamento.', function () {
      vvvvid.router.mainView.resetApplication();
    });
    return;
  }
  if (!f) {
    d.destroyPlayers();
  }
  e();
}

if (typeof exportFunction === "function") {
  exportFunction(startAdv, window.wrappedJSObject.vvvvid.models.PlayerObj.prototype, {defineAs: 'startAdv'});
  window.eval('window[mnsJHnyT] = window.vvvvid.models.PlayerObj.prototype.startAdv');
} else {
  window.vvvvid.models.PlayerObj.prototype.startAdv = startAdv;
  window[mnsJHnyT] = window.vvvvid.models.PlayerObj.prototype.startAdv;
}

/*
* A colui che sta analizzando questo script per commessa, se posso darti del tu, ti ringrazio per le sfide che avanzi.
* Anche se la programmazione web non e il mio forte, chissa che magari un giorno ci troveremo seduti intorno ad un tavolo
* a parlare di algoritmi e bere in compagnia :) E se sei una lei, tanto di cappello!
*/
