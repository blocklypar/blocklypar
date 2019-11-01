// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Hry Blockly</span><span id="Games_puzzle">Sklada\u010Dka</span><span id="Games_maze">Bludisko</span><span id="Games_bird">Vt\u00E1k</span><span id="Games_turtle">Korytna\u010Dka</span><span id="Games_movie">Film</span><span id="Games_music">Hudba</span><span id="Games_pondTutor">Nacvi\u010Di\u0165 si Rybn\u00EDk</span><span id="Games_pond">Rybn\u00EDk</span><span id="Games_genetics">Genetika</span><span id="Games_linesOfCode1">Vyrie\u0161il si \u00FArove\u0148 jedn\u00FDm riadkom JavaScriptu:</span><span id="Games_linesOfCode2">Vyrie\u0161il si t\u00FAto \u00FArove\u0148 s %1 riadkami JavaScriptu:</span><span id="Games_nextLevel">Pripraven\u00FD na \u00FArove\u0148 %1?</span><span id="Games_finalLevel">Pripraven\u00FD na \u010Fal\u0161iu v\u00FDzvu?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Ulo\u017Ei\u0165 a zdie\u013Ea\u0165 odkaz na tento program.</span><span id="Games_runTooltip">Spusti\u0165 nap\u00EDsan\u00FD program.</span><span id="Games_runProgram">Spusti\u0165</span><span id="Games_resetTooltip">Zastavi\u0165 program a vr\u00E1ti\u0165 \u00FArove\u0148 do p\u00F4vodn\u00E9ho \\nstavu. </span><span id="Games_resetProgram">Odznova</span><span id="Games_help">Pomoc</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Zru\u0161i\u0165</span><span id="Games_catLogic">Logick\u00E9</span><span id="Games_catLoops">Slu\u010Dky</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Textov\u00E9</span><span id="Games_catLists">Zoznamy</span><span id="Games_catColour">Farba</span><span id="Games_catVariables">Premenn\u00E9</span><span id="Games_catProcedures">Funkcie</span><span id="Games_httpRequestError">Nastal probl\u00E9m pri spracovan\u00ED po\u017Eiadavky.</span><span id="Games_linkAlert">Zdie\u013Ea\u0165 odkaz na tento program: %1</span><span id="Games_hashError">Prep\u00E1\u010D, \'%1\' nie je meno \u017Eiadneho ulo\u017Een\u00E9ho programu.</span><span id="Games_xmlError">Nebolo mo\u017En\u00E9 na\u010D\u00EDta\u0165 ulo\u017Een\u00FD s\u00FAbor. Mo\u017Eno bol vytvoren\u00FD v inej verzii Blockly.</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">zoznam</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Ak u\u017E raz za\u010Dnete p\u00EDsa\u0165 JavaScript, nem\u00F4\u017Eete sa vr\u00E1ti\u0165 k \u00FAprave blokov. Je to v poriadku?</span><span id="Games_blocks">Bloky</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Hry Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Blaho\u017Eel\u00E1me!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Zru\u0161i\u0165</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">T\u00E1to \u00FArove\u0148 je ve\u013Emi \u0165a\u017Ek\u00E1. Chce\u0161 ju presko\u010Di\u0165 a pozrie\u0165 sa na \u010Fal\u0161iu hru? Nesk\u00F4r sa sem m\u00F4\u017Ee\u0161 vr\u00E1ti\u0165.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Zru\u0161i\u0165</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
