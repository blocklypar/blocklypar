// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Loj\u00EBrat Blockly</span><span id="Games_puzzle">Gj\u00EBegj\u00EBz\u00EB</span><span id="Games_maze">Labirint</span><span id="Games_bird">Zog</span><span id="Games_turtle">Breshk\u00EB</span><span id="Games_movie">Film</span><span id="Games_music">Muzik\u00EB</span><span id="Games_pondTutor">Tutori i Pellgut</span><span id="Games_pond">Pellg</span><span id="Games_genetics">Gjenetik\u00EB</span><span id="Games_linesOfCode1">Zgjodh\u00EBt k\u00EBt\u00EB nivel me nj\u00EB 1 rresht JavaScript:</span><span id="Games_linesOfCode2">Zgjodh\u00EBt k\u00EBt\u00EB nivel me %1 rreshta JavaScript:</span><span id="Games_nextLevel">A je gati p\u00EBr nivelin %1?</span><span id="Games_finalLevel">A je gati p\u00EBr sfid\u00EBn tjet\u00EBr?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Ruaje dhe lidhu te blloqet.</span><span id="Games_runTooltip">Ekzekuto programin q\u00EB shkrove. </span><span id="Games_runProgram">Ekzekuto Programin</span><span id="Games_resetTooltip">Ndale programin dhe reseto nivelin.</span><span id="Games_resetProgram">Riktheje</span><span id="Games_help">Ndihm\u00EB</span><span id="Games_dialogOk">N\u00EB rregull</span><span id="Games_dialogCancel">Anulo</span><span id="Games_catLogic">Logjik\u00EB</span><span id="Games_catLoops">Qark</span><span id="Games_catMath">Matematik\u00EB</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Listat</span><span id="Games_catColour">Ngjyr\u00EB</span><span id="Games_catVariables">Variablat</span><span id="Games_catProcedures">Funksionet</span><span id="Games_httpRequestError">Kishte problem me k\u00EBrkes\u00EBn.</span><span id="Games_linkAlert">Ndaj blloqet me k\u00EBt\u00EB lidhje:\n\n%1</span><span id="Games_hashError">Na vjen keq, \'%1\' nuk korrespondon me ndonj\u00EB program t\u00EB ruajtur.</span><span id="Games_xmlError">Nuk mund t\u00EB ngarkoheshin skedar\u00EBt tuaj t\u00EB ruajtur. Ndoshta \u00EBsht\u00EB krijuar me version tjet\u00EBr t\u00EB Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list\u00EB</span><span id="Games_textVariable">tekst</span><span id="Games_breakLink">Sapo t\u00EB filloni t\u00EB modifikoni JavaScript, nuk mund t\u00EB ktheheni te blloqet e redaktimit. A \u00EBsht\u00EB kjo n\u00EB rregull?</span><span id="Games_blocks">Blloqet</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Loj\u00EBrat Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Urime!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Anulo</button><button id="doneOk" class="secondary">N\u00EB rregull</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ky nivel \u00EBsht\u00EB jasht\u00EBzakonisht i v\u00EBshtir\u00EB. D\u00EBshiron ta kap\u00EBrcesh dhe t\u00EB shkosh n\u00EB loj\u00EBn tjet\u00EBr? Mund t\u00EB ktheheni m\u00EB von\u00EB.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Anulo</button><button id="abortOk" class="secondary">N\u00EB rregull</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">N\u00EB rregull</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
