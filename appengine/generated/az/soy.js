// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Oyunu</span><span id="Games_puzzle">Tapmaca</span><span id="Games_maze">Labirint</span><span id="Games_bird">Qu\u015F</span><span id="Games_turtle">T\u0131sba\u011Fa</span><span id="Games_movie">H\u0259r\u0259k\u0259t</span><span id="Games_music">Musiqi</span><span id="Games_pondTutor">Tutor G\u00F6lm\u0259\u00E7\u0259si</span><span id="Games_pond">G\u00F6lm\u0259\u00E7\u0259</span><span id="Games_genetics">Genetik</span><span id="Games_linesOfCode1">S\u0259n bu m\u0259rh\u0259l\u0259ni  bir s\u0259tirlik JavaScript-d\u0259 h\u0259ll etdin:</span><span id="Games_linesOfCode2">S\u0259n bu m\u0259rh\u0259l\u0259ni  %1 s\u0259tirlik JavaScript-d\u0259 h\u0259ll etdin:</span><span id="Games_nextLevel">S\u0259n  %1 m\u0259rh\u0259l\u0259y\u0259 haz\u0131rsan?</span><span id="Games_finalLevel">S\u0259n  n\u00F6vb\u0259ti s\u0131na\u011Fa haz\u0131rsan?</span><span id="Games_submitTitle">Ba\u015Fl\u0131q:</span><span id="Games_linkTooltip">Bloklara istinad\u0131 g\u00F6st\u0259rm\u0259k v\u0259 yadda\u015Fa saxlamaq.</span><span id="Games_runTooltip">S\u0259nin yaratd\u0131\u011F\u0131n proqram\u0131 icras\u0131na ba\u015Fla.</span><span id="Games_runProgram">Proqram\u0131 \u0130cra Et</span><span id="Games_resetTooltip">Proqram\u0131 dayand\u0131r v\u0259 m\u0259rh\u0259l\u0259ni s\u0131f\u0131rla.</span><span id="Games_resetProgram">S\u0131f\u0131rla</span><span id="Games_help">K\u00F6m\u0259k</span><span id="Games_dialogOk">TAMAM</span><span id="Games_dialogCancel">L\u0259\u011Fv et</span><span id="Games_catLogic">M\u0259ntiq</span><span id="Games_catLoops">D\u00F6vr\u0259</span><span id="Games_catMath">Riyazi</span><span id="Games_catText">M\u0259tn</span><span id="Games_catLists">Siyah\u0131lar</span><span id="Games_catColour">R\u0259ng</span><span id="Games_catVariables">D\u0259yi\u015F\u0259nl\u0259r</span><span id="Games_catProcedures">Funksiyalar</span><span id="Games_httpRequestError">Sor\u011Fu il\u0259 \u0259laq\u0259li problem var.</span><span id="Games_linkAlert">\u015E\u0259xsi bloklar\u0131n\u0131 bu linkl\u0259 b\u00F6l\u00FC\u015F:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">siyah\u0131</span><span id="Games_textVariable">m\u0259tn</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Bloklar</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Oyunu</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">T\u0259brikl\u0259r!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">L\u0259\u011Fv et</button><button id="doneOk" class="secondary">TAMAM</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">L\u0259\u011Fv et</button><button id="abortOk" class="secondary">TAMAM</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">TAMAM</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
