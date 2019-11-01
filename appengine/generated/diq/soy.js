// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Kay\u00EA Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirent</span><span id="Games_bird">Mir\u00E7\u0131ke</span><span id="Games_turtle">Kesa</span><span id="Games_movie">Bere</span><span id="Games_music">Muzik</span><span id="Games_pondTutor">Doleka musay\u0131\u015Fi</span><span id="Games_pond">Gol\u0131k</span><span id="Games_genetics">Genetiki</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Sername:</span><span id="Games_linkTooltip">Qeyd ke \u00FB be blokan ra g\u0131re de.</span><span id="Games_runTooltip">Pro\u011Framo ke to nusnayo b\u0131xebetne.</span><span id="Games_runProgram">Programi Akar fi</span><span id="Games_resetTooltip">Pro\u011Frami v\u0131ndarn\u0131 u sewiyay reset ke.</span><span id="Games_resetProgram">Reset ker\u00EA</span><span id="Games_help">Pe\u015Fti</span><span id="Games_dialogOk">TEMAM</span><span id="Games_dialogCancel">B\u0131texelne</span><span id="Games_catLogic">Ment\u0131q</span><span id="Games_catLoops">Dingeki</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Met\u0131n</span><span id="Games_catLists">Listi</span><span id="Games_catColour">Reng</span><span id="Games_catVariables">V\u0131rneyeni</span><span id="Games_catProcedures">Fonksiyoni</span><span id="Games_httpRequestError">wa\u015Ft\u0131\u015Fi deyne zew problem esto</span><span id="Games_linkAlert">Blokan na linkera b\u0131hesrne\n\n%1</span><span id="Games_hashError">Mel\u00FBlime, \'%1\' be qet yew programi ra yewbini n\u00EAg\u00EAno.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">liste</span><span id="Games_textVariable">nu\u015Fte</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">K\u0131litkerd\u0131\u015Fi</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Kay\u00EA Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Tebrik kem!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">B\u0131texelne</button><button id="doneOk" class="secondary">TEMAM</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">B\u0131texelne</button><button id="abortOk" class="secondary">TEMAM</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">TEMAM</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
