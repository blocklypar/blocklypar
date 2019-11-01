// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly leikir</span><span id="Games_puzzle">P\u00FAsl</span><span id="Games_maze">V\u00F6lundarh\u00FAs</span><span id="Games_bird">Fugl</span><span id="Games_turtle">Skjaldbaka</span><span id="Games_movie">Hreyfimynd</span><span id="Games_music">T\u00F3nlist</span><span id="Games_pondTutor">Pond kennslud\u00E6mi</span><span id="Games_pond">Pollur</span><span id="Games_genetics">Erf\u00F0afr\u00E6\u00F0i</span><span id="Games_linesOfCode1">\u00DE\u00FA leystir \u00FEennan \u00E1fanga me\u00F0 1 l\u00EDnu af JavaScript:</span><span id="Games_linesOfCode2">\u00DE\u00FA leystir \u00FEennan \u00E1fanga me\u00F0 %1 l\u00EDnum af JavaScript:</span><span id="Games_nextLevel">Viltu fara \u00ED \u00E1fanga %1?</span><span id="Games_finalLevel">Ertu til a\u00F0 f\u00E1st vi\u00F0 n\u00E6stu \u00E1skorun?</span><span id="Games_submitTitle">Titill:</span><span id="Games_linkTooltip">Vista og tengja vi\u00F0 kubba.</span><span id="Games_runTooltip">Keyra forriti\u00F0 sem \u00FE\u00FA skrifa\u00F0ir.</span><span id="Games_runProgram">Keyra forriti\u00F0</span><span id="Games_resetTooltip">St\u00F6\u00F0va forriti\u00F0 og n\u00FAllstilla \u00E1fangann.</span><span id="Games_resetProgram">Byrja aftur</span><span id="Games_help">Hj\u00E1lp</span><span id="Games_dialogOk">\u00CD lagi</span><span id="Games_dialogCancel">H\u00E6tta vi\u00F0</span><span id="Games_catLogic">R\u00F6kv\u00EDsi</span><span id="Games_catLoops">Lykkjur</span><span id="Games_catMath">Reikningur</span><span id="Games_catText">Texti</span><span id="Games_catLists">Listar</span><span id="Games_catColour">Litir</span><span id="Games_catVariables">Breytur</span><span id="Games_catProcedures">F\u00F6ll</span><span id="Games_httpRequestError">\u00DEa\u00F0 kom upp vandam\u00E1l me\u00F0 bei\u00F0nina.</span><span id="Games_linkAlert">Deildu kubbunum \u00FE\u00EDnum me\u00F0 \u00FEessari kr\u00E6kju:</span><span id="Games_hashError">\u00DEv\u00ED mi\u00F0ur, \'%1\' passar ekki vi\u00F0 neitt vista\u00F0 forrit.</span><span id="Games_xmlError">Gat ekki hla\u00F0i\u00F0 vistu\u00F0u skr\u00E1na \u00FE\u00EDna. Var h\u00FAn kannske b\u00FAin til \u00ED annarri \u00FAtg\u00E1fu af Blockly?</span><span id="Games_submitted">\u00C9g \u00FEakka ykkur k\u00E6rlega fyrir \u00FEetta forrit! Ef kengrugla\u00F0a starfsf\u00F3lkinu okkar l\u00EDkar vi\u00F0 \u00FEa\u00F0, \u00FE\u00E1 munu \u00FEau birta \u00FEa\u00F0 \u00ED safninu innan skamms.</span><span id="Games_listVariable">listi</span><span id="Games_textVariable">texti</span><span id="Games_breakLink">\u00DEegar \u00FE\u00FA byrjar a\u00F0 breyta JavaScript, getur\u00F0u ekki fari\u00F0 til baka \u00ED a\u00F0 breyta blokkum. Er \u00FEa\u00F0 \u00ED lagi?</span><span id="Games_blocks">Kubbar</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly leikir</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Til hamingju!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">H\u00E6tta vi\u00F0</button><button id="doneOk" class="secondary">\u00CD lagi</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u00DEessi \u00E1fangi er mj\u00F6g erfi\u00F0ur. Viltu sleppa honum og fara \u00ED n\u00E6sta leik? \u00DE\u00FA getur alltaf reynt aftur seinna.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">H\u00E6tta vi\u00F0</button><button id="abortOk" class="secondary">\u00CD lagi</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u00CD lagi</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
