// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Jogos do Blockly</span><span id="Games_puzzle">Quebra-Cabe\u00E7a</span><span id="Games_maze">Labirinto</span><span id="Games_bird">P\u00E1ssaro</span><span id="Games_turtle">Tartaruga</span><span id="Games_movie">Filme</span><span id="Games_music">M\u00FAsica</span><span id="Games_pondTutor">Tutor de Lagoa</span><span id="Games_pond">Lagoa</span><span id="Games_genetics">Gen\u00E9ticas</span><span id="Games_linesOfCode1">Voc\u00EA solucionou esse n\u00EDvel com uma linha de JavaScript:</span><span id="Games_linesOfCode2">Voc\u00EA solucionou esse n\u00EDvel com %1 linhas de JavaScript:</span><span id="Games_nextLevel">Voc\u00EA esta preparado para o n\u00EDvel %1?</span><span id="Games_finalLevel">Voc\u00EA esta preparado para o pr\u00F3ximo desafio?</span><span id="Games_submitTitle">T\u00EDtulo:</span><span id="Games_linkTooltip">Salvar e ligar aos blocos.</span><span id="Games_runTooltip">Rodar o programa que voc\u00EA escreveu.</span><span id="Games_runProgram">Executar o programa</span><span id="Games_resetTooltip">Parar a execu\u00E7\u00E3o do programa e resetar o nivel.</span><span id="Games_resetProgram">Reiniciar</span><span id="Games_help">Ajuda</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">L\u00F3gica</span><span id="Games_catLoops">La\u00E7os</span><span id="Games_catMath">Matem\u00E1tica</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Cor</span><span id="Games_catVariables">Vari\u00E1veis</span><span id="Games_catProcedures">Fun\u00E7\u00F5es</span><span id="Games_httpRequestError">Houve um problema com a requisi\u00E7\u00E3o.</span><span id="Games_linkAlert">Compartilhe seus blocos com este link:\n\n%1</span><span id="Games_hashError">Desculpe, \'%1\' n\u00E3o corresponde a um programa salvo.</span><span id="Games_xmlError">N\u00E3o foi poss\u00EDvel carregar seu arquivo salvo. Talvez ele tenha sido criado com uma vers\u00E3o diferente do Blockly?</span><span id="Games_submitted">Agradecemos pelo programa! Se a nossa equipa gostar dele, este ser\u00E1 publicado na galeria por n\u00F3s dentro de alguns dias.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span><span id="Games_breakLink">Quando voc\u00EA come\u00E7ar a editar o JavaScript, voc\u00EA n\u00E3o poder\u00E1 mais voltar a editar os blocos. Voc\u00EA tem certeza?</span><span id="Games_blocks">Blocos</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Jogos do Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Parab\u00E9ns!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Este n\u00EDvel \u00E9 extremamente dif\u00EDcil. Voc\u00EA deseja pul\u00E1-lo e ir ao pr\u00F3ximo jogo? Voc\u00EA sempre pode voltar mais tarde.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
