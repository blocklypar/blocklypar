// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Giogus de Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirintu</span><span id="Games_bird">Pilloni</span><span id="Games_turtle">Tostoinu</span><span id="Games_movie">Filmi</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">St\u00E0ini</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">As arres\u00F2lviu custu livellu cun 1 arriga de JavaScript:</span><span id="Games_linesOfCode2">As arres\u00F2lviu custu livellu cun %1 arrigas de JavaScript:</span><span id="Games_nextLevel">Prontu ses po su livellu %1?</span><span id="Games_finalLevel">Prontu ses po un\'\u00E0teru disafiu?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Sarva e alli\u00F2ngia a is brocus. </span><span id="Games_runTooltip">Arrollia su programa chi as scritu.</span><span id="Games_runProgram">Arr\u00F2llia su Programa</span><span id="Games_resetTooltip">Firma su programa e anudda su livellu.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Agiudu</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Annulla</span><span id="Games_catLogic">L\u00F2gica</span><span id="Games_catLoops">L\u00F2rigas</span><span id="Games_catMath">Matem\u00E0tica</span><span id="Games_catText">Testu</span><span id="Games_catLists">Lista</span><span id="Games_catColour">Colori</span><span id="Games_catVariables">Variabilis</span><span id="Games_catProcedures">Funtzionis</span><span id="Games_httpRequestError">Ddui fut unu problema cun sa pregunta</span><span id="Games_linkAlert">Poni is brocus tuus in custu ac\u00E0piu:\n\n%1</span><span id="Games_hashError">Mi dispraxit, \'%1\' non torrat a pari cun nimancu unu de is programas sarvaus.</span><span id="Games_xmlError">Non potzu carrigai su file sarvau. Fortzis est st\u00E8tiu fatu cun d-una versioni diferenti de Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">testu</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Brocus</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Giogus de Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Bravu!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Annulla</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Custu livellu est dif\u00ECcili meda. Bolis andai a fai un\'\u00E0teru giogu? Podis torrai a custu prus a tardu si bolis.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Annulla</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
