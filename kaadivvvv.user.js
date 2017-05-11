// ==UserScript==
// @name        KAADIVVVV - vvvvid.it Anti-Adblock Killer
// @namespace   https://github.com/Robotex/
// @description Mantieni il tuo Ad-Blocker attivo mentre ti guardi il tuo anime preferito
// @author      Robotex
// @version     1.1.2
// @license     GPL version 3; http://www.gnu.org/copyleft/gpl.html
// @copyright   2016+, Robotex (https://github.com/Robotex/)
// @homepage    https://github.com/Robotex/kaadivvvv/
// @supportURL  https://github.com/Robotex/kaadivvvv/issues
// @match       http://www.vvvvid.it/*
// @match       https://www.vvvvid.it/*
// @grant       none
// ==/UserScript==

window.vvvvid.cab3 = function (k, n)
{
  var o = this;
  o.isAdBlockActive = false;
  if (n)
    n(false);
};

window.vvvvid.models.PlayerObj.prototype.startAdv = function (e, b, d) {
  var c = this;
  if (!e) {
    if (!_.isUndefined(c.player)) {
      vvvvid.player.destroy();
      delete (c.player);
      delete (vvvvid.player);
    }
  }
  var a = function(j) {
    vvvvid.advPlayer = null;
    $(c.playerControlsClass).removeClass('ppad');
    d();
  };
  if (c.thereIsAdv) {
    vvvvid.cab3(true, a);
  } else {
    d();
  }
};
