// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Trencaclosques</span><span id="Games_maze">Laberint</span><span id="Games_bird">Ocell</span><span id="Games_turtle">Tortuga</span><span id="Games_movie">Pel\u00B7l\u00EDcula</span><span id="Games_music">M\u00FAsica</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">Has solucionat aquest nivell amb 1 l\u00EDnia de JavaScript:</span><span id="Games_linesOfCode2">Has solucionat aquest nivell amb $1 l\u00EDnies de JavaScript</span><span id="Games_nextLevel">Est\u00E0s preparat pel nivell %1?</span><span id="Games_finalLevel">Est\u00E0s preparat pel seg\u00FCent repte?</span><span id="Games_submitTitle">T\u00EDtol:</span><span id="Games_linkTooltip">Desa i enlla\u00E7a als blocs.</span><span id="Games_runTooltip">Executa el programa que has escrit.</span><span id="Games_runProgram">Executa el programa</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reinicialitza</span><span id="Games_help">Ajuda</span><span id="Games_dialogOk">D\'acord</span><span id="Games_dialogCancel">Cancel\u00B7la</span><span id="Games_catLogic">L\u00F2gica</span><span id="Games_catLoops">Bucles</span><span id="Games_catMath">Matem\u00E0tiques</span><span id="Games_catText">Text</span><span id="Games_catLists">Llistes</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Procediments</span><span id="Games_httpRequestError">Hi ha hagut un problema amb la sol\u00B7licitud.</span><span id="Games_linkAlert">Comparteix els teus blocs amb aquest enlla\u00E7: %1</span><span id="Games_hashError">Ho sentim, \'%1\' no es correspon amb cap fitxer desat de Blockly.</span><span id="Games_xmlError">No s\'ha pogut carregar el teu fitxer desat.  Potser va ser creat amb una versi\u00F3 diferent de Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">llista</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocs</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Games</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Felicitats!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel\u00B7la</button><button id="doneOk" class="secondary">D\'acord</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Aquest nivell \u00E9s extremadament dif\u00EDcil. El vols deixar i anar al seg\u00FCent joc? Sempre podr\u00E0s tornar-hi m\u00E9s tard.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel\u00B7la</button><button id="abortOk" class="secondary">D\'acord</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">D\'acord</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
