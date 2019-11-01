// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">C\'hoario\u00F9 Blockly</span><span id="Games_puzzle">Miltamm</span><span id="Games_maze">Milendall</span><span id="Games_bird">Labous</span><span id="Games_turtle">Baot</span><span id="Games_movie">Film</span><span id="Games_music">Sonerezh</span><span id="Games_pondTutor">Tutorial Stank</span><span id="Games_pond">Stank</span><span id="Games_genetics">Genetek</span><span id="Games_linesOfCode1">Diskoulmet ho peus al live-ma\u00F1 gant 1 linenn JavaScript :</span><span id="Games_linesOfCode2">Diskoulmet ho peus al live-ma\u00F1 gant %1 linenn JavaScript :</span><span id="Games_nextLevel">Ha prest oc\'h evit al live %1 ?</span><span id="Games_finalLevel">Ha prest oc\'h evit an dae da zont ?</span><span id="Games_submitTitle">Titl :</span><span id="Games_linkTooltip">Enrolla\u00F1 ha liamma\u00F1 ouzh ar bloc\'hado\u00F9.</span><span id="Games_runTooltip">La\u00F1sa\u00F1 ar programm ho peus skrivet.</span><span id="Games_runProgram">La\u00F1sa\u00F1 ar programm</span><span id="Games_resetTooltip">Paouez ar programm hag adderaouekaat al live.</span><span id="Games_resetProgram">Adderaouekaat</span><span id="Games_help">Skoazell</span><span id="Games_dialogOk">Mat eo</span><span id="Games_dialogCancel">Nulla\u00F1</span><span id="Games_catLogic">Poell</span><span id="Games_catLoops">Rodello\u00F9</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Testenn</span><span id="Games_catLists">Rollo\u00F9</span><span id="Games_catColour">Liv</span><span id="Games_catVariables">Argemmenno\u00F9</span><span id="Games_catProcedures">Arc\'hwelio\u00F9</span><span id="Games_httpRequestError">Ur gudenn zo gant ar reked.</span><span id="Games_linkAlert">Ranna\u00F1 ho ploc\'ho\u00F9 gant al liamm-ma\u00F1 :\n\n%1</span><span id="Games_hashError">Digarezit. "%1" ne glot gant programm enrollet ebet.</span><span id="Games_xmlError">Ne c\'haller ket karga\u00F1 ho restr enrollet. Marteze e oa bet krouet gant ur stumm dishe\u00F1vel eus Blockly ?</span><span id="Games_submitted">Trugarez evit ar programm-ma\u00F1. Ma plij d\'hor skipailh marmouzed  do\u00F1vaet e vo embannet ganto er palier ac\'hann da zaou zevezh.</span><span id="Games_listVariable">roll</span><span id="Games_textVariable">testenn</span><span id="Games_breakLink">Ur wech m\'ho po kroget da zazkemma\u00F1 ar JavaScript ne c\'hallit ket mui distrei\u00F1 d\'an daskemma\u00F1 bloc\'ho\u00F9. Ha mat eo evidoc\'h ?</span><span id="Games_blocks">Bloc\'ho\u00F9</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'C\'hoario\u00F9 Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gourc\'hemenno\u00F9 !</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Nulla\u00F1</button><button id="doneOk" class="secondary">Mat eo</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Diaes-kena\u00F1 eo al live-ma\u00F1. Ha c\'hoant ho peus da lammat anezha\u00F1 ha da dremen d\'ar c\'hoari war-lerc\'h ? Gallout a rit atav distrei\u00F1 dezha\u00F1 diwezhatoc\'h.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Nulla\u00F1</button><button id="abortOk" class="secondary">Mat eo</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Mat eo</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
