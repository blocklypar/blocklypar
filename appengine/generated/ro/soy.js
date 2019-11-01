// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirint</span><span id="Games_bird">P\u0103s\u0103ri</span><span id="Games_turtle">\u021Aestoas\u0103</span><span id="Games_movie">Film</span><span id="Games_music">Muzic\u0103</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">Ai rezolvat acest nivel cu o linie de JavaScript:</span><span id="Games_linesOfCode2">A\u021Bi rezolvat acest nivel cu %1 linii de JavaScript:</span><span id="Games_nextLevel">E\u0219ti pregatit pentru nivelul %1?</span><span id="Games_finalLevel">Sunte\u021Bi preg\u0103ti\u021Bi pentru urm\u0103toarea provocare?</span><span id="Games_submitTitle">Titlu:</span><span id="Games_linkTooltip">Salveaz\u0103 \u0219i adaug\u0103 la blocuri. </span><span id="Games_runTooltip">Rula\u021Bi programul pe care l-a\u021Bi scris.</span><span id="Games_runProgram">Ruleaz\u0103 programul</span><span id="Games_resetTooltip">Opri\u021Bi programul \u0219i reseta\u021Bi nivelul.</span><span id="Games_resetProgram">Reseteaz\u0103</span><span id="Games_help">Ajutor</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Revocare</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Bucle</span><span id="Games_catMath">Matematic\u0103</span><span id="Games_catText">Text</span><span id="Games_catLists">Liste</span><span id="Games_catColour">Culoare</span><span id="Games_catVariables">Variabile</span><span id="Games_catProcedures">Func\u021Bii</span><span id="Games_httpRequestError">A ap\u0103rut o problem\u0103 la solicitare.</span><span id="Games_linkAlert">Distribuie-\u021Bi blocurile folosind aceast\u0103 leg\u0103tur\u0103:\n\n%1</span><span id="Games_hashError">Scuze, \u201E%1\u201D nu corespunde nici unui program salvat.</span><span id="Games_xmlError">Sistemul nu a putut \u00EEnc\u0103rca fi\u0219ierul salvat. Poate c\u0103 a fost creat cu o alt\u0103 versiune de Blockly?</span><span id="Games_submitted">V\u0103 mul\u021Bumim pentru acest program! Dac\u0103 personalul nostru de maimu\u021Be instruite \u00EEl plac, \u00EEl vor publica \u00EEn galerie \u00EEn c\u00E2teva zile.</span><span id="Games_listVariable">list\u0103</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Dup\u0103 ce \u00EEncepe\u021Bi s\u0103 edita\u021Bi JavaScript, nu v\u0103 pute\u021Bi \u00EEntoarce la blocurile de editare. E bine a\u0219a?</span><span id="Games_blocks">Blocuri</div></div>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Felicit\u0103ri!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Revocare</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Acest nivel este extrem de dificil. Dori\u021Bi s\u0103 \u00EEl s\u0103ri\u021Bi \u0219i s\u0103 merge\u021Bi la urm\u0103torul joc? V\u0103 pute\u021Bi \u00EEntoarce \u00EEntotdeauna mai t\u00E2rziu.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Revocare</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
