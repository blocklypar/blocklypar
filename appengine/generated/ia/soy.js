// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Jocos Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labyrintho</span><span id="Games_bird">Ave</span><span id="Games_turtle">Tortuca</span><span id="Games_movie">Film</span><span id="Games_music">Musica</span><span id="Games_pondTutor">Intro a Stagno</span><span id="Games_pond">Stagno</span><span id="Games_genetics">Genetica</span><span id="Games_linesOfCode1">Tu ha solvite iste nivello con 1 linea de JavaScript:</span><span id="Games_linesOfCode2">Tu ha solvite iste nivello con %1 lineas de JavaScript:</span><span id="Games_nextLevel">Es tu preste pro le nivello %1?</span><span id="Games_finalLevel">Es tu preste pro le proxime defia?</span><span id="Games_submitTitle">Titulo:</span><span id="Games_linkTooltip">Salveguardar e ligar a blocos. </span><span id="Games_runTooltip">Executar le programma que tu ha scribite.</span><span id="Games_runProgram">Executar programma</span><span id="Games_resetTooltip">Stoppar le programma e reinitialisar le nivello.</span><span id="Games_resetProgram">Reinitialisar</span><span id="Games_help">Adjuta</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancellar</span><span id="Games_catLogic">Logica</span><span id="Games_catLoops">Buclas</span><span id="Games_catMath">Mathematica</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variabiles</span><span id="Games_catProcedures">Functiones</span><span id="Games_httpRequestError">Il habeva un problema con le requesta.</span><span id="Games_linkAlert">Divide tu blocos con iste ligamine:\n\n%1</span><span id="Games_hashError">Infelicemente, \'%1\' non corresponde a alcun programma salveguardate.</span><span id="Games_xmlError">Impossibile cargar le file salveguardate. Pote esser que illo ha essite create con un altere version de Blockly?</span><span id="Games_submitted">Gratias pro iste programma! Si nostre equipa lo ama, illes lo publicara in le galeria intra alcun dies.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span><span id="Games_breakLink">Un vice que tu comencia a modificar JavaScript, tu non potera revenir a modificar blocos. De accordo?</span><span id="Games_blocks">Blocos</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Jocos Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Felicitationes!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancellar</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Iste nivello es extrememente difficile. Vole tu saltar lo e passar al proxime joco? Tu pote sempre revenir plus tarde.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancellar</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
