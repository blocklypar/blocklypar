// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly j\u00E1t\u00E9kok</span><span id="Games_puzzle">Kirak\u00F3s</span><span id="Games_maze">Labirintus</span><span id="Games_bird">Mad\u00E1r</span><span id="Games_turtle">Tekn\u0151c</span><span id="Games_movie">Film</span><span id="Games_music">Zene</span><span id="Games_pondTutor">T\u00F3 gyakorl\u00F3</span><span id="Games_pond">T\u00F3</span><span id="Games_genetics">Genetika</span><span id="Games_linesOfCode1">Egyetlen sor JavaScript k\u00F3ddal megoldottad a feladatot:</span><span id="Games_linesOfCode2">%1 sor JavaScript k\u00F3ddal oldottad meg a feladatot.</span><span id="Games_nextLevel">K\u00E9szen \u00E1llsz a(z) %1. feladatra?</span><span id="Games_finalLevel">K\u00E9szen \u00E1llsz a k\u00F6vetkez\u0151 kih\u00EDv\u00E1sra?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Ment\u00E9s \u00E9s hivatkoz\u00E1s a blokkokra.</span><span id="Games_runTooltip">Futtasd a programod!</span><span id="Games_runProgram">Program futtat\u00E1sa</span><span id="Games_resetTooltip">Program le\u00E1ll\u00EDt\u00E1sa, \u00E9s a szint vissza\u00E1ll\u00EDt\u00E1sa.</span><span id="Games_resetProgram">Vissza\u00E1ll\u00EDt\u00E1s</span><span id="Games_help">S\u00FAg\u00F3</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">M\u00E9gse</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Ciklusok</span><span id="Games_catMath">Matek</span><span id="Games_catText">Sz\u00F6vegkezel\u00E9s</span><span id="Games_catLists">Listakezel\u00E9s</span><span id="Games_catColour">Sz\u00EDnek</span><span id="Games_catVariables">V\u00E1ltoz\u00F3k</span><span id="Games_catProcedures">Elj\u00E1r\u00E1sok</span><span id="Games_httpRequestError">A k\u00E9r\u00E9ssel kapcsolatban probl\u00E9ma mer\u00FClt fel.</span><span id="Games_linkAlert">Ezzel a hivatkoz\u00E1ssal tudod megosztani a programodat:\n\n%1</span><span id="Games_hashError">Sajnos a \'%1\' hivatkoz\u00E1s nem tartozik egyetlen programhoz sem.</span><span id="Games_xmlError">A programodat nem lehet bet\u00F6lteni.  Elk\u00E9pzelhet\u0151, hogy a Blockly egy m\u00E1sik verzi\u00F3j\u00E1ban k\u00E9sz\u00FClt?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">sz\u00F6veg</span><span id="Games_breakLink">Ha elkezded a JavaScriptet szerkeszteni akkor k\u00E9s\u0151bb nem l\u00E9phetsz vissza a blokkok szerkeszt\u00E9s\u00E9be. Ezt akarod?</span><span id="Games_blocks">Blokkok</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly j\u00E1t\u00E9kok</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = 'BlocklyGames.soy.titleSpan';
}


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit183 = opt_data.maxLevel + 1;
  for (var i183 = 1; i183 < iLimit183; i183++) {
    output += ' ' + ((i183 == opt_data.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i183) + '">' + soy.$$escapeHtml(i183) + '</span>' : (i183 == opt_data.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i183) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i183) + soy.$$escapeHtml(opt_data.suffix) + '">' + soy.$$escapeHtml(i183) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i183) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i183) + soy.$$escapeHtml(opt_data.suffix) + '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = 'BlocklyGames.soy.levelLinks';
}


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = 'BlocklyGames.soy.dialog';
}


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gratul\u00E1lok!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">M\u00E9gse</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ez a szint k\u00FCl\u00F6n\u00F6sen neh\u00E9z. Szeretn\u00E9l a k\u00F6vetkez\u0151 j\u00E1t\u00E9kra ugrani? B\u00E1rmikor megpr\u00F3b\u00E1lhatod \u00FAjb\u00F3l!<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">M\u00E9gse</button><button id="abortOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = 'BlocklyGames.soy.abortDialog';
}


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName = 'BlocklyGames.soy.storageDialog';
}


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
