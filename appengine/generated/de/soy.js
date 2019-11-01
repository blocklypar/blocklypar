// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly-Spiele</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labyrinth</span><span id="Games_bird">Vogel</span><span id="Games_turtle">Schildkr\u00F6te</span><span id="Games_movie">Film</span><span id="Games_music">Musik</span><span id="Games_pondTutor">Teichlehrer</span><span id="Games_pond">Teich</span><span id="Games_genetics">Genetik</span><span id="Games_linesOfCode1">Du hast dieses Level mit 1 Zeile JavaScript gel\u00F6st:</span><span id="Games_linesOfCode2">Du hast dieses Level mit %1 Zeilen JavaScript gel\u00F6st:</span><span id="Games_nextLevel">Bist du bereit f\u00FCr Level %1?</span><span id="Games_finalLevel">Bist du bereit f\u00FCr die n\u00E4chste Herausforderung?</span><span id="Games_submitTitle">Titel:</span><span id="Games_linkTooltip">Speichern und auf Bl\u00F6cke verlinken.</span><span id="Games_runTooltip">Das geschriebene Programm ausf\u00FChren.</span><span id="Games_runProgram">Programm ausf\u00FChren</span><span id="Games_resetTooltip">Stoppt das Programm und setzt das Level zur\u00FCck.</span><span id="Games_resetProgram">Zur\u00FCcksetzen</span><span id="Games_help">Hilfe</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Abbrechen</span><span id="Games_catLogic">Logik</span><span id="Games_catLoops">Schleifen</span><span id="Games_catMath">Mathematik</span><span id="Games_catText">Text</span><span id="Games_catLists">Listen</span><span id="Games_catColour">Farbe</span><span id="Games_catVariables">Variablen</span><span id="Games_catProcedures">Funktionen</span><span id="Games_httpRequestError">Es gab ein Problem mit der Anfrage.</span><span id="Games_linkAlert">Teile deine Bl\u00F6cke mit diesem Link:\n\n%1</span><span id="Games_hashError">Leider stimmt \u201E%1\u201C mit keinem gespeicherten Programm \u00FCberein.</span><span id="Games_xmlError">Deine gespeicherte Datei konnte nicht geladen werden. Vielleicht wurde sie mit einer anderen Blockly-Version erstellt?</span><span id="Games_submitted">Vielen Dank f\u00FCr dieses Programm! Falls unsere Belegschaft aus trainierten Affen es mag, werden sie es innerhalb weniger Tage in der Galerie ver\u00F6ffentlichen.</span><span id="Games_listVariable">Liste</span><span id="Games_textVariable">Text</span><span id="Games_breakLink">Sobald du anf\u00E4ngst, JavaScript zu bearbeiten, kannst du nicht zur\u00FCck gehen, um Bl\u00F6cke zu bearbeiten. Ist das in Ordnung?</span><span id="Games_blocks">Bausteine</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly-Spiele</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gl\u00FCckwunsch!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Abbrechen</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Dieses Level ist sehr schwierig. M\u00F6chtest du es \u00FCberspringen und zum n\u00E4chsten Spiel gehen? Du kannst sp\u00E4ter immer noch zur\u00FCckkehren.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Abbrechen</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
